// Tiny event bus: the preloader announces when the intro is finished,
// so the hero / navbar entrance animations start at the right moment.
export const markReady = () => {
  window.__appReady = true;
  window.dispatchEvent(new Event("app:ready"));
};

export const onReady = (cb) => {
  if (window.__appReady) {
    cb();
    return () => {};
  }
  window.addEventListener("app:ready", cb, { once: true });
  return () => window.removeEventListener("app:ready", cb);
};

export const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
