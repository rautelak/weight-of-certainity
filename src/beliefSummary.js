import { categories } from './gameData';

// ─── Archetypes ───────────────────────────────────────────────────────────────

const ARCHETYPES = [
  {
    id: 'perfectionist',
    name: 'The Perfectionist',
    tagline:
      'A self-imposed standard that quietly exhausts everything beneath it',
    // Primary: density of proven (self-defining) beliefs
    // Boost: specific self-critical text
    score: (beliefs, counts) => {
      let s = counts.proven * 15;
      if (counts.proven >= 3) s += 20;
      if (beliefs.some((b) => b.text.toLowerCase().includes('perfect')))
        s += 10;
      if (beliefs.some((b) => b.text.toLowerCase().includes('not good enough')))
        s += 10;
      if (beliefs.some((b) => b.text.toLowerCase().includes('approval')))
        s += 8;
      if (beliefs.some((b) => b.text.toLowerCase().includes('strong'))) s += 5;
      return s;
    },
  },
  {
    id: 'controller',
    name: 'The Controller',
    tagline:
      'Certainty as a coping mechanism for a world that refuses to cooperate',
    // Primary: density of aspirational (rules/order) beliefs
    // Boost: specific control text
    score: (beliefs, counts) => {
      let s = counts.aspirational * 15;
      if (counts.aspirational >= 3) s += 20;
      if (beliefs.some((b) => b.text.toLowerCase().includes('control')))
        s += 10;
      if (beliefs.some((b) => b.text.toLowerCase().includes('my way'))) s += 10;
      if (beliefs.some((b) => b.text.toLowerCase().includes('weakness')))
        s += 8;
      return s;
    },
  },
  {
    id: 'skeptic',
    name: 'The Skeptic',
    tagline:
      'A world viewed through the lens of what people will eventually do wrong',
    // Primary: density of assumed (worldview) beliefs, weighted toward negative ones
    // Boost: specific distrust text
    score: (beliefs, counts) => {
      const negAssumed = beliefs.filter(
        (b) =>
          b.category === 'assumed' &&
          /\b(can't|cannot|never|unreliable|distrust|wrong|bad)\b/i.test(
            b.text,
          ),
      ).length;
      let s = counts.assumed * 10 + negAssumed * 10;
      if (counts.assumed >= 3) s += 15;
      if (beliefs.some((b) => b.text.toLowerCase().includes("can't trust")))
        s += 10;
      if (beliefs.some((b) => b.text.toLowerCase().includes('unreliable')))
        s += 8;
      if (beliefs.some((b) => b.text.toLowerCase().includes("can't change")))
        s += 8;
      return s;
    },
  },
  {
    id: 'achiever',
    name: 'The Achiever',
    tagline: 'Worth measured in output — leaving rest permanently unsafe',
    // Primary: density of speculative (success/worth) beliefs
    // Boost: specific output/worth text
    score: (beliefs, counts) => {
      let s = counts.speculative * 20;
      if (counts.speculative >= 2) s += 20;
      if (beliefs.some((b) => b.text.toLowerCase().includes('success')))
        s += 10;
      if (beliefs.some((b) => b.text.toLowerCase().includes('worth'))) s += 10;
      if (beliefs.some((b) => b.text.toLowerCase().includes('work'))) s += 8;
      if (beliefs.some((b) => b.text.toLowerCase().includes('money'))) s += 8;
      return s;
    },
  },
  {
    id: 'dependent',
    name: 'The Dependent',
    tagline:
      'Identity built on connection — and therefore vulnerable to its absence',
    // Primary: density of informed (relational) beliefs
    // Boost: specific dependency text
    score: (beliefs, counts) => {
      let s = counts.informed * 18;
      if (counts.informed >= 3) s += 20;
      if (beliefs.some((b) => b.text.toLowerCase().includes('complet')))
        s += 10;
      if (beliefs.some((b) => b.text.toLowerCase().includes('understand')))
        s += 8;
      if (beliefs.some((b) => b.text.toLowerCase().includes('agree'))) s += 8;
      if (beliefs.some((b) => b.text.toLowerCase().includes('need'))) s += 5;
      return s;
    },
  },
  {
    id: 'seeker',
    name: 'The Seeker',
    tagline: 'Holding old maps and new terrain at once — actively mid-change',
    // Primary: number of active contradictions + category spread
    // No meaningful text boost — this archetype is structural
    score: (beliefs, counts, conflicts) => {
      const totalConflicts = Object.values(conflicts).reduce(
        (s, p) => s + p.length,
        0,
      );
      const activeCats = Object.values(counts).filter((c) => c > 0).length;
      let s = totalConflicts * 20 + activeCats * 8;
      if (totalConflicts >= 3) s += 20;
      return s;
    },
  },
  {
    id: 'philosopher',
    name: 'The Philosopher',
    tagline:
      'A wide-ranging belief system that creates coherence — and comprehensive constraint',
    // Primary: breadth + depth — only meaningful at 8+ beliefs with 4+ categories
    // Returns 0 below threshold so concentrated archetypes win on small sets
    score: (beliefs, counts) => {
      if (beliefs.length < 8) return 0;
      const activeCats = Object.values(counts).filter((c) => c > 0).length;
      if (activeCats < 4) return 0;
      let s = activeCats * 10;
      if (activeCats >= 5) s += 25;
      if (beliefs.length >= 10) s += 20;
      if (beliefs.length >= 15) s += 15;
      // Bonus for genuinely balanced spread — no single category dominates
      const maxCount = Math.max(...Object.values(counts));
      if (maxCount / beliefs.length < 0.4) s += 15;
      return s;
    },
  },
  {
    id: 'cynic',
    name: 'The Cynic',
    tagline: 'Disappointment preemptively managed through lowered expectations',
    // Primary: assumed beliefs with negative framing (any wording)
    // Boost: specific negative text
    score: (beliefs, counts) => {
      const negAssumed = beliefs.filter(
        (b) =>
          b.category === 'assumed' &&
          /\b(can't|cannot|never|unreliable|bad|wrong|fail|distrust|disappoint)\b/i.test(
            b.text,
          ),
      ).length;
      let s = negAssumed * 20;
      if (negAssumed >= 2) s += 20;
      if (beliefs.some((b) => b.text.toLowerCase().includes("can't trust")))
        s += 8;
      if (beliefs.some((b) => b.text.toLowerCase().includes('unreliable')))
        s += 8;
      return s;
    },
  },
];

// ─── Classifier ───────────────────────────────────────────────────────────────

const getCounts = (beliefs) =>
  Object.keys(categories).reduce((acc, cat) => {
    acc[cat] = beliefs.filter((b) => b.category === cat).length;
    return acc;
  }, {});

const classifyArchetype = (beliefs, counts, conflicts) => {
  const scored = ARCHETYPES.map((a) => ({
    ...a,
    finalScore: a.score(beliefs, counts, conflicts),
  }))
    .filter((a) => a.finalScore > 0)
    .sort((a, b) => b.finalScore - a.finalScore);
  return scored[0] || null;
};

// ─── Narrative builder ────────────────────────────────────────────────────────

export const generateBeliefSummary = (beliefs, conflicts) => {
  if (beliefs.length < 5) return null;

  const counts = getCounts(beliefs);
  const totalConflicts = Object.values(conflicts).reduce(
    (s, p) => s + p.length,
    0,
  );
  const activeCats = Object.values(counts).filter((c) => c > 0).length;
  const archetype = classifyArchetype(beliefs, counts, conflicts);

  const paragraphs = [];

  // ── Theme: dominant category ──────────────────────────────────────────────
  const [domCat, domCount] = Object.entries(counts).sort(
    (a, b) => b[1] - a[1],
  )[0];
  const domLabel = categories[domCat].label.toLowerCase();
  const domBeliefs = beliefs.filter((b) => b.category === domCat).slice(0, 2);
  const domExamples = domBeliefs.map((b) => `"${b.text}"`).join(' and ');

  if (domCount >= 3) {
    paragraphs.push(
      `Your belief system is dominated by ${domLabel} beliefs — ${domExamples} form its gravitational center. ` +
        `When one category holds this much weight, it becomes the lens through which everything else gets interpreted: ` +
        `not just beliefs in that domain, but how you read situations, people, and your own reactions.`,
    );
  } else if (activeCats >= 4) {
    const activeLabels = Object.entries(counts)
      .filter(([, c]) => c > 0)
      .map(([k]) => categories[k].label.toLowerCase())
      .join(', ');
    paragraphs.push(
      `Your beliefs are spread across ${activeCats} different domains — ${activeLabels}. ` +
        `A wide-ranging system like this creates a feeling of internal coherence, where each domain reinforces the others. ` +
        `The cost is that freedom gets constrained from multiple directions simultaneously, with no single belief carrying all the weight.`,
    );
  } else {
    paragraphs.push(
      `With ${beliefs.length} belief${beliefs.length !== 1 ? 's' : ''} active, ${domExamples} ` +
        `${domBeliefs.length > 1 ? 'are' : 'is'} already shaping how you move through this space. ` +
        `Notice the resistance when you try to pull away — that pull is the belief doing its work.`,
    );
  }

  // ── Theme: cross-category interaction ────────────────────────────────────
  const proven = beliefs.filter((b) => b.category === 'proven');
  const aspirational = beliefs.filter((b) => b.category === 'aspirational');
  const informed = beliefs.filter((b) => b.category === 'informed');
  const speculative = beliefs.filter((b) => b.category === 'speculative');
  const assumed = beliefs.filter((b) => b.category === 'assumed');

  if (proven.length > 0 && aspirational.length > 0) {
    paragraphs.push(
      `There is a notable interaction between your proven beliefs (${`"${proven[0].text}"`}) ` +
        `and your aspirational ones (${`"${aspirational[0].text}"`}). ` +
        `Proven beliefs define the self; aspirational ones define the rules you impose on it. ` +
        `Together, they create a system where the standards leave little room for the person they're applied to.`,
    );
  } else if (speculative.length > 0 && informed.length > 0) {
    paragraphs.push(
      `Holding speculative beliefs like "${speculative[0].text}" alongside informed ones like "${informed[0].text}" ` +
        `creates a compounding pressure: relational expectations shape what success must look like, ` +
        `and success beliefs determine how relationships get valued. Each domain quietly redefines what the other feels like.`,
    );
  } else if (assumed.length >= 2) {
    paragraphs.push(
      `You hold ${assumed.length} assumed beliefs — ${assumed
        .slice(0, 2)
        .map((b) => `"${b.text}"`)
        .join(' and ')}. ` +
        `Assumed beliefs are particularly load-bearing because they feel like observations rather than choices. ` +
        `That invisibility is what makes them so effective at constraining behaviour without feeling like constraints at all.`,
    );
  } else if (proven.length >= 2) {
    paragraphs.push(
      `"${proven[0].text}" and "${proven[1].text}" both sit in the proven category, ` +
        `but they may pull in different directions. Multiple proven beliefs about the self create an internal committee — ` +
        `each casting a vote on what you're allowed to feel, attempt, or claim.`,
    );
  }

  // ── Prosocial vs drive tension ────────────────────────────────────────────
  const prosocialKeywords = [
    'fair',
    'good',
    'trust',
    'understand',
    'complet',
    'generally good',
  ];
  const driveKeywords = [
    'defines my worth',
    'success = money',
    'must be in control',
    'my way',
    'must be perfect',
    'must always be strong',
  ];
  const prosocialBeliefs = beliefs.filter((b) =>
    prosocialKeywords.some((k) => b.text.toLowerCase().includes(k)),
  );
  const driveBeliefs = beliefs.filter((b) =>
    driveKeywords.some((k) => b.text.toLowerCase().includes(k)),
  );
  if (prosocialBeliefs.length >= 1 && driveBeliefs.length >= 1) {
    paragraphs.push(
      `There is a subtler constraint at work: believing "${prosocialBeliefs[0].text}" while holding "${driveBeliefs[0].text}" ` +
        `creates a hidden conflict. These beliefs don't directly contradict — but the first quietly rules out many of ` +
        `the strategies the second might otherwise justify. This is a more invisible form of constraint than outright opposition.`,
    );
  }

  // ── Tension: contradiction callout ───────────────────────────────────────
  let tension = null;
  if (totalConflicts > 0) {
    const firstCat = Object.keys(conflicts)[0];
    const [a, b] = conflicts[firstCat][0];
    tension =
      `The sharpest tension in your belief web is between "${a.text}" and "${b.text}". ` +
      `These don't coexist comfortably — they actively undermine each other. ` +
      `Holding both means part of your belief system is always working against the other part, ` +
      `which rarely produces resolution. More often, it produces a persistent, low-grade exhaustion.`;
    if (totalConflicts >= 3) {
      tension +=
        ` With ${totalConflicts} contradictions active simultaneously, this isn't an isolated tension — it's a pattern. ` +
        `Belief systems with this much internal conflict are usually mid-transition, ` +
        `even when the person inside them doesn't experience it that way yet.`;
    }
  }

  // ── Closing: freedom cost ────────────────────────────────────────────────
  const freedomPct = Math.max(0, Math.round(100 - beliefs.length * (100 / 20)));
  let closing;
  if (freedomPct < 20) {
    closing =
      `At ${beliefs.length} beliefs, your freedom to move — in this space, and in the thinking this space is meant to mirror — ` +
      `is heavily constrained. Each belief is a line attached to you. The web doesn't feel like a cage ` +
      `because you built it yourself, one reasonable conviction at a time.`;
  } else if (freedomPct < 50) {
    closing =
      `With ${beliefs.length} beliefs active, you retain real freedom — but certain directions have become ` +
      `much harder than others. Not because they're blocked, but because the beliefs make them feel wrong before you've even tried.`;
  } else {
    closing =
      `With only ${beliefs.length} belief${beliefs.length !== 1 ? 's' : ''}, the system is still light. ` +
      `The interesting question at this stage isn't what you believe — it's what you've already decided not to include.`;
  }

  return { archetype, paragraphs, tension, closing };
};
