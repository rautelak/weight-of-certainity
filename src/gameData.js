export const categories = {
  proven: {
    color: '#ef4444',
    label: 'Proven',
    description:
      'Well-supported by consistent evidence and research. These beliefs are the hardest to argue with — and the hardest to let go of, even when they stop serving you.',
  },
  informed: {
    color: '#ec4899',
    label: 'Informed',
    description:
      'Grounded in evidence but with meaningful uncertainty remaining. These beliefs are more flexible than proven ones — they update when the evidence shifts, but not without resistance.',
  },
  assumed: {
    color: '#6366f1',
    label: 'Assumed',
    description:
      'Treated as fact without close examination. These beliefs feel like observations about the world, which is exactly what makes them so effective at shaping behaviour from the background.',
  },
  speculative: {
    color: '#f59e0b',
    label: 'Speculative',
    description:
      'Forward-looking beliefs about where things are heading or how they might work. They\'re not provable yet — but they still guide decisions as if they were.',
  },
  aspirational: {
    color: '#64748b',
    label: 'Aspirational',
    description:
      'Beliefs about how things should be. They drive goals and values, but also create a persistent gap between what is and what you expect — which becomes its own kind of pressure.',
  },
  axiomatic: {
    color: '#10b981',
    label: 'Axiomatic',
    description:
      'Core moral and philosophical commitments held as foundational. These rarely get questioned because they feel self-evident — which means they shape everything beneath them without scrutiny.',
  },
};

export const beliefOptions = [
  // Proven
  { text: 'Strong relationships improve well-being', category: 'proven' },
  { text: 'Memory can be unreliable', category: 'proven' },
  { text: 'People have cognitive biases', category: 'proven' },
  { text: 'Context shapes behavior', category: 'proven' },
  { text: 'Chronic stress harms health', category: 'proven' },
  { text: 'Sleep affects mental performance', category: 'proven' },
  { text: 'Rewards reinforce behavior', category: 'proven' },
  { text: 'Emotions influence decisions', category: 'proven' },
  { text: 'Attention is limited', category: 'proven' },
  { text: 'Attachment affects relationships', category: 'proven' },
  { text: 'Practice improves skill', category: 'proven' },
  { text: 'People seek rewards and avoid pain', category: 'proven' },
  { text: 'Social norms influence actions', category: 'proven' },
  { text: 'Multitasking reduces efficiency', category: 'proven' },
  { text: 'Trauma has lasting effects', category: 'proven' },
  { text: 'Habits automate behavior', category: 'proven' },
  { text: 'Expectations shape perception', category: 'proven' },
  { text: 'People favor their in-group', category: 'proven' },
  { text: 'Self-control varies by context', category: 'proven' },
  { text: 'Spaced learning improves retention', category: 'proven' },
  // Informed
  { text: 'Growth mindset can improve learning', category: 'informed' },
  { text: 'Optimism supports well-being', category: 'informed' },
  { text: 'Purpose increases life satisfaction', category: 'informed' },
  { text: 'Mindfulness reduces stress', category: 'informed' },
  { text: 'Autonomy increases motivation', category: 'informed' },
  { text: 'Early experiences shape personality', category: 'informed' },
  { text: 'Emotional intelligence aids relationships', category: 'informed' },
  { text: 'Gratitude improves mood', category: 'informed' },
  { text: 'People adapt to life changes', category: 'informed' },
  { text: 'Belief in ability improves performance', category: 'informed' },
  { text: 'Support buffers stress', category: 'informed' },
  { text: 'Clear goals improve results', category: 'informed' },
  {
    text: 'Positive reinforcement works better than punishment',
    category: 'informed',
  },
  { text: 'Stories shape identity', category: 'informed' },
  { text: 'Exposure reduces anxiety', category: 'informed' },
  { text: 'People prefer consistency', category: 'informed' },
  { text: 'Curiosity enhances learning', category: 'informed' },
  { text: 'Exercise improves mental health', category: 'informed' },
  { text: 'Fairness affects motivation', category: 'informed' },
  { text: 'Authority influences behavior', category: 'informed' },
  // Assumed
  { text: 'Hard work guarantees success', category: 'assumed' },
  { text: 'People get what they deserve', category: 'assumed' },
  { text: 'I see things objectively', category: 'assumed' },
  { text: 'Most people think like me', category: 'assumed' },
  { text: 'Good intentions lead to good outcomes', category: 'assumed' },
  { text: 'Confidence equals competence', category: 'assumed' },
  { text: 'Talent matters more than effort', category: 'assumed' },
  { text: 'Failure means lack of effort', category: 'assumed' },
  { text: 'My memories are accurate', category: 'assumed' },
  { text: 'People are consistent', category: 'assumed' },
  { text: 'The world is fair', category: 'assumed' },
  { text: 'First impressions are accurate', category: 'assumed' },
  { text: 'If it feels right, it is right', category: 'assumed' },
  { text: 'More information improves decisions', category: 'assumed' },
  { text: 'People can easily change', category: 'assumed' },
  { text: 'Emotions are irrational', category: 'assumed' },
  { text: 'Past predicts future', category: 'assumed' },
  { text: 'Others notice my mistakes', category: 'assumed' },
  { text: 'Logic drives behavior', category: 'assumed' },
  { text: 'Popular opinions are correct', category: 'assumed' },
  // Speculative
  { text: 'Technology reduces attention span', category: 'speculative' },
  { text: 'Social media reshapes identity', category: 'speculative' },
  { text: 'Unconscious drives most behavior', category: 'speculative' },
  { text: 'People are less empathetic now', category: 'speculative' },
  { text: 'AI will reshape thinking', category: 'speculative' },
  { text: 'Childhood determines adulthood', category: 'speculative' },
  { text: 'Free will is an illusion', category: 'speculative' },
  { text: 'Society is more fragile now', category: 'speculative' },
  { text: 'Personality is mostly fixed', category: 'speculative' },
  { text: 'Humans seek meaning over happiness', category: 'speculative' },
  { text: 'Decisions are rationalized after', category: 'speculative' },
  { text: 'Loneliness will keep increasing', category: 'speculative' },
  { text: 'Narratives matter more than facts', category: 'speculative' },
  { text: 'Culture outweighs individuality', category: 'speculative' },
  { text: 'Behavior is predictable with enough data', category: 'speculative' },
  { text: 'Suppressing emotions causes harm', category: 'speculative' },
  { text: 'People prefer certainty over truth', category: 'speculative' },
  { text: 'Resilience is declining', category: 'speculative' },
  { text: 'Rewards reduce intrinsic motivation', category: 'speculative' },
  { text: 'Beliefs shape reality', category: 'speculative' },
  // Aspirational
  { text: 'People can change', category: 'aspirational' },
  { text: 'Effort leads to growth', category: 'aspirational' },
  { text: 'People are fundamentally good', category: 'aspirational' },
  { text: 'Understanding improves relationships', category: 'aspirational' },
  { text: 'Kindness spreads', category: 'aspirational' },
  { text: 'I can overcome limits', category: 'aspirational' },
  {
    text: 'Collaboration is better than competition',
    category: 'aspirational',
  },
  { text: 'Honesty leads to better outcomes', category: 'aspirational' },
  { text: 'Forgiveness helps healing', category: 'aspirational' },
  { text: 'Everyone deserves a second chance', category: 'aspirational' },
  { text: 'Learning never stops', category: 'aspirational' },
  { text: 'Adversity builds strength', category: 'aspirational' },
  { text: 'Helping others improves life', category: 'aspirational' },
  { text: 'Authenticity brings fulfillment', category: 'aspirational' },
  { text: 'Small actions matter', category: 'aspirational' },
  { text: 'People want to do well', category: 'aspirational' },
  { text: 'Trust is worth the risk', category: 'aspirational' },
  { text: 'Purpose can be created', category: 'aspirational' },
  { text: 'Open-mindedness improves decisions', category: 'aspirational' },
  { text: 'Change is possible at scale', category: 'aspirational' },
  // Axiomatic
  { text: 'Human life has value', category: 'axiomatic' },
  { text: 'Truth matters', category: 'axiomatic' },
  { text: 'Suffering should be reduced', category: 'axiomatic' },
  { text: 'Fairness is important', category: 'axiomatic' },
  { text: 'People deserve autonomy', category: 'axiomatic' },
  { text: 'Compassion is good', category: 'axiomatic' },
  { text: 'People deserve dignity', category: 'axiomatic' },
  { text: 'Freedom is valuable', category: 'axiomatic' },
  { text: 'Choices carry responsibility', category: 'axiomatic' },
  { text: 'Justice should guide systems', category: 'axiomatic' },
  { text: 'Intentions matter', category: 'axiomatic' },
  { text: 'Honesty is better than deception', category: 'axiomatic' },
  { text: 'All people have equal worth', category: 'axiomatic' },
  { text: 'Harm should be avoided', category: 'axiomatic' },
  { text: 'Promises should be kept', category: 'axiomatic' },
  { text: 'Moral progress is possible', category: 'axiomatic' },
  { text: 'Rights exist beyond power', category: 'axiomatic' },
  { text: 'Respect should be given', category: 'axiomatic' },
  { text: 'Good actions should be encouraged', category: 'axiomatic' },
  { text: 'Ethics should guide decisions', category: 'axiomatic' },
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
