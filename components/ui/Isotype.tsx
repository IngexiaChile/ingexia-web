/**
 * INGEXIA isotype: a hexagon frame with an internal node network forming an
 * "X", per the official brand guideline. Primary strokes/fills use
 * `currentColor` so the mark adapts to light or dark backgrounds through
 * ordinary CSS color inheritance; the accent diagonal and its two nodes stay
 * fixed at the brand brass tone in every context.
 */
export function Isotype({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 138"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M60 30 L103 55 V105 L60 130 L17 105 V55 Z"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinejoin="round"
      />

      <line
        x1="17"
        y1="55"
        x2="103"
        y2="105"
        stroke="#8A6A3B"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <line
        x1="103"
        y1="55"
        x2="17"
        y2="105"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />

      <circle cx="17" cy="55" r="7" fill="#8A6A3B" />
      <circle cx="103" cy="105" r="7" fill="#8A6A3B" />
      <circle cx="103" cy="55" r="7" fill="currentColor" />
      <circle cx="17" cy="105" r="7" fill="currentColor" />

      <line
        x1="60"
        y1="30"
        x2="60"
        y2="12"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="60" cy="8" r="4.5" fill="#8A6A3B" />
    </svg>
  );
}
