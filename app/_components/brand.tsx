export const ArrowUpRight = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
    <path d="M5 15 15 5M7 5h8v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ArrowRight = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
    <path d="M3.5 10h13m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ArrowDown = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
    <path d="M10 4v12m0 0 5-5m-5 5-5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ZentraMark = ({ compact = false }: { compact?: boolean }) => (
  <span className={compact ? "zentra-mark zentra-mark--compact" : "zentra-mark"} aria-hidden="true">
    <svg viewBox="0 0 40 40" fill="none">
      <path d="M8 9.5h24L25.6 16H14.4L8 9.5Z" fill="currentColor" />
      <path d="m14.4 16 11.2 8L32 30.5H8L14.4 24h11.2L14.4 16Z" fill="currentColor" />
    </svg>
  </span>
);
