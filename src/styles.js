// ─── Canvas dimensions ────────────────────────────────────────────────────────
export const CANVAS_WIDTH = 630;
export const CANVAS_HEIGHT = 420;

/** Derive scaled sizes for all SVG elements so they stay proportional
 *  when the canvas viewport changes. */
export const getCanvasSizes = (width, height) => {
  const scale = Math.min(width / 900, height / 600);
  return {
    playerR:       Math.round(18 * scale),
    beliefR:       Math.round(14 * scale),
    beliefRHovered:Math.round(16 * scale),
    haloR:         Math.round(19 * scale),
    conflictR:     Math.round(13 * scale),
    conflictOffset:Math.round(38 * scale),
    labelOffset:   Math.round(34 * scale),
    fontPlayer:    Math.round(14 * scale),
    fontLabel:     Math.round(11 * scale),
    fontHint:      Math.round(10 * scale),
    fontConflict:  Math.round(13 * scale),
  };
};

// ─── Color tokens ─────────────────────────────────────────────────────────────
export const colors = {
  pageBg:       'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
  cardBg:       'white',
  canvasBg:     '#f0f9ff',
  textPrimary:  '#1f2937',
  textMuted:    '#6b7280',
  textBody:     '#374151',
  borderLight:  '#e5e7eb',
  player:       '#3b82f6',
  playerStroke: '#1e40af',
  beliefStroke: '#1f2937',
  lockedStroke: '#10b981',
  hoveredStroke:'#fbbf24',
  hintText:     '#f59e0b',
  btnPrimary:   '#6366f1',
  btnSecondary: '#64748b',
  btnGreen:     '#10b981',
  freedomHigh:  '#10b981',
  freedomMid:   '#f59e0b',
  freedomLow:   '#ef4444',
};

export const getFreedomColor = (freedom) =>
  freedom > 60 ? colors.freedomHigh : freedom > 30 ? colors.freedomMid : colors.freedomLow;

// ─── Reusable style objects ───────────────────────────────────────────────────
export const cardStyle = {
  background: colors.cardBg,
  borderRadius: '16px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
};

export const introCardStyle = {
  ...cardStyle,
  boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
  textAlign: 'center',
};

const btnBase = {
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: '600',
  color: 'white',
  padding: '10px 14px',
  fontSize: '0.9em',
};

export const btnPrimary   = { ...btnBase, background: colors.btnPrimary };
export const btnSecondary = { ...btnBase, background: colors.btnSecondary };
export const btnGreen     = { ...btnBase, background: colors.btnGreen };
export const btnLarge     = { ...btnBase, background: colors.btnPrimary, padding: '14px 36px', fontSize: '1.1em', borderRadius: '8px' };

export const inputStyle = {
  width: '100%',
  padding: '10px',
  fontSize: '1em',
  borderRadius: '6px',
  border: `2px solid ${colors.borderLight}`,
  marginBottom: '10px',
  boxSizing: 'border-box',
};
