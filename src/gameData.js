export const categories = {
  proven: { color: '#ef4444', label: 'Proven' },
  informed: { color: '#ec4899', label: 'Informed' },
  assumed: { color: '#6366f1', label: 'Assumed' },
  speculative: { color: '#f59e0b', label: 'Speculative' },
  aspirational: { color: '#64748b', label: 'Aspirational' },
};

export const beliefOptions = [
  { text: 'I must be perfect', category: 'proven' },
  { text: "I'm not good enough", category: 'proven' },
  { text: 'I need their approval', category: 'proven' },
  { text: 'I must always be strong', category: 'proven' },
  { text: 'They should understand me', category: 'informed' },
  { text: 'My partner completes me', category: 'informed' },
  { text: 'They must agree with me', category: 'informed' },
  { text: 'Life should be fair', category: 'assumed' },
  { text: "People can't change", category: 'assumed' },
  { text: "I can't trust anyone", category: 'assumed' },
  { text: 'People are unreliable', category: 'assumed' },
  { text: 'People are generally good', category: 'assumed' },
  { text: 'Success = money', category: 'speculative' },
  { text: 'Work defines my worth', category: 'speculative' },
  { text: 'I must be in control', category: 'aspirational' },
  { text: 'Emotions are weakness', category: 'aspirational' },
  { text: 'My way is the right way', category: 'aspirational' },
  { text: 'Uncertainty is natural', category: 'aspirational' },
];

const oppositions = [
  // Proven vs Assumed / Speculative
  ['Memory can be unreliable', 'My memories are accurate'],
  ['Context shapes behavior', 'People are consistent'],
  ['Emotions influence decisions', 'Logic drives behavior'],
  ['Attention is limited', 'More information improves decisions'],
  ['Habits automate behavior', 'People can easily change'],
  ['Expectations shape perception', 'I see things objectively'],

  // Informed vs Assumed
  ['Growth mindset can improve learning', 'Talent matters more than effort'],
  ['Autonomy increases motivation', 'People seek rewards and avoid pain'],
  [
    'Positive reinforcement works better than punishment',
    'Failure means lack of effort',
  ],
  ['People adapt to life changes', 'Past predicts future'],
  ['Fairness affects motivation', 'The world is fair'],

  // Aspirational vs Assumed
  ['People can change', 'Personality is mostly fixed'],
  ['People can change', 'People can easily change'], // nuanced tension
  ['People are fundamentally good', 'People get what they deserve'],
  ['Effort leads to growth', 'Hard work guarantees success'],
  ['Understanding improves relationships', 'Most people think like me'],
  ['Trust is worth the risk', "I can't trust anyone"],
  ['Open-mindedness improves decisions', 'If it feels right, it is right'],

  // Speculative vs Aspirational
  ['People are less empathetic now', 'Kindness spreads'],
  ['Resilience is declining', 'Adversity builds strength'],
  ['Rewards reduce intrinsic motivation', 'Helping others improves life'],

  // Axiomatic vs Assumed / Speculative
  ['Truth matters', 'People prefer certainty over truth'],
  ['Fairness is important', 'The world is fair'],
  ['Compassion is good', 'People get what they deserve'],
  ['All people have equal worth', 'People favor their in-group'],
  ['Honesty is better than deception', 'If it feels right, it is right'],

  // Cross-category tensions
  ['Optimism supports well-being', 'People are less empathetic now'],
  ['Social norms influence actions', 'I see things objectively'],
  ['Authority influences behavior', 'I must be in control'],
  ['Curiosity enhances learning', 'If it feels right, it is right'],
  ['Stories shape identity', 'Logic drives behavior'],
];

export const categoryInsights = {
  proven:
    'Holding contradictory proven beliefs is rare and destabilizing — it suggests a breakdown in what you consider reliable reality. This tension often forces a re-evaluation of evidence, pushing you to refine how you decide what is actually true.',

  informed:
    "Opposing informed beliefs reflect an active updating process — you're integrating new evidence while still holding onto older models. This friction is where learning happens, as your understanding recalibrates toward better approximations of reality.",

  assumed:
    'Conflicting assumed beliefs reveal cracks in your default worldview. What once felt obvious is no longer unquestioned, signaling a shift from inherited thinking to independent reasoning.',

  speculative:
    'Contradictory speculative beliefs show that you are exploring multiple possible explanations at once. Rather than confusion, this often reflects cognitive flexibility — the ability to hold uncertainty without prematurely collapsing into a single answer.',

  aspirational:
    'Opposing aspirational beliefs reflect a tension between who you are and who you want to be. These conflicts often surface when your desired identity pulls against current habits, limitations, or lived experience.',

  axiomatic:
    'Conflicting axiomatic beliefs indicate a deeper philosophical tension — competing values or principles that cannot be easily reconciled. This kind of conflict often shapes major life decisions, as it forces you to clarify what you ultimately stand for.',
};

export const negationWords = new Set([
  'not',
  'no',
  'never',
  'neither',
  'nor',
  "n't",
  "isn't",
  "can't",
  "won't",
  "doesn't",
  "don't",
  "didn't",
  "wasn't",
  "weren't",
  "hasn't",
  "haven't",
  "hadn't",
  "shouldn't",
  "wouldn't",
  "couldn't",
]);

export const hasNegation = (text) =>
  text
    .toLowerCase()
    .split(/\s+/)
    .some((w) => negationWords.has(w));

export const getContentWords = (text) =>
  text
    .toLowerCase()
    .split(/\s+/)
    .filter((w) => !negationWords.has(w) && w.length > 1);

export const areBeliefsSimilar = (b1, b2) => b1.category === b2.category;

export const areBeliefsOpposed = (b1, b2) => {
  if (
    oppositions.some(
      ([a, b]) =>
        (b1.text === a && b2.text === b) || (b1.text === b && b2.text === a),
    )
  )
    return true;

  const neg1 = hasNegation(b1.text);
  const neg2 = hasNegation(b2.text);
  if (neg1 === neg2) return false;

  const words1 = new Set(getContentWords(b1.text));
  const words2 = new Set(getContentWords(b2.text));
  const intersection = [...words1].filter((w) => words2.has(w)).length;
  const union = new Set([...words1, ...words2]).size;
  return union > 0 && intersection / union > 0.4;
};
