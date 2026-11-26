/**
 * Soft, slow-moving pink light that drifts behind the whole site.
 * It sits on top of the sections with `mix-blend-mode: screen`, so on the
 * dark maroon it reads as a gentle glow and never covers text or clicks.
 */
const AmbientBackground = () => (
  <div
    aria-hidden
    className="ambient-bg pointer-events-none fixed inset-0 z-[90] overflow-hidden"
  >
    <span className="ambient-blob ambient-blob--a" />
    <span className="ambient-blob ambient-blob--b" />
    <span className="ambient-blob ambient-blob--c" />
  </div>
);

export default AmbientBackground;
