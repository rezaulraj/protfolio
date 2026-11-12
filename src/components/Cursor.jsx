import { useEffect, useRef } from "react";
import gsap from "gsap";

// Dot + trailing ring. The ring grows over links/buttons and shows a label
// over anything with data-cursor="Label".
const Cursor = () => {
  const dot = useRef(null);
  const ring = useRef(null);
  const label = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const d = dot.current;
    const r = ring.current;
    gsap.set([d, r], { xPercent: -50, yPercent: -50 });

    const dx = gsap.quickTo(d, "x", { duration: 0.12, ease: "power3" });
    const dy = gsap.quickTo(d, "y", { duration: 0.12, ease: "power3" });
    const rx = gsap.quickTo(r, "x", { duration: 0.55, ease: "power3" });
    const ry = gsap.quickTo(r, "y", { duration: 0.55, ease: "power3" });

    let state = "";
    const setState = (next, text = "") => {
      if (next === state) return;
      state = next;
      label.current.textContent = text;
      if (next === "label") {
        gsap.to(r, { width: 96, height: 96, backgroundColor: "rgba(255,255,255,1)", borderColor: "rgba(255,255,255,0)", duration: 0.4, ease: "power3.out" });
        gsap.to(label.current, { opacity: 1, duration: 0.3 });
        gsap.to(d, { scale: 0, duration: 0.3 });
      } else if (next === "link") {
        gsap.to(r, { width: 64, height: 64, backgroundColor: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.6)", duration: 0.4, ease: "power3.out" });
        gsap.to(label.current, { opacity: 0, duration: 0.2 });
        gsap.to(d, { scale: 0, duration: 0.3 });
      } else {
        gsap.to(r, { width: 36, height: 36, backgroundColor: "rgba(255,255,255,0)", borderColor: "rgba(255,255,255,0.35)", duration: 0.4, ease: "power3.out" });
        gsap.to(label.current, { opacity: 0, duration: 0.2 });
        gsap.to(d, { scale: 1, duration: 0.3 });
      }
    };

    const onMove = (e) => {
      gsap.to([d, r], { opacity: 1, duration: 0.3, overwrite: "auto" });
      dx(e.clientX);
      dy(e.clientY);
      rx(e.clientX);
      ry(e.clientY);
      const labelled = e.target.closest?.("[data-cursor]");
      if (labelled) return setState("label", labelled.dataset.cursor);
      if (e.target.closest?.("a, button, input, textarea, label")) return setState("link");
      setState("idle");
    };
    const onLeave = () => gsap.to([d, r], { opacity: 0, duration: 0.3 });
    const onDown = () => gsap.to(r, { scale: 0.8, duration: 0.2 });
    const onUp = () => gsap.to(r, { scale: 1, duration: 0.3 });

    window.addEventListener("pointermove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[90] hidden md:block">
      <div
        ref={ring}
        className="flex-center fixed left-0 top-0 size-9 rounded-full border border-white/35 opacity-0"
      >
        <span
          ref={label}
          className="font-mono text-[11px] font-medium uppercase tracking-widest text-ink opacity-0"
        />
      </div>
      <div ref={dot} className="fixed left-0 top-0 size-1.5 rounded-full bg-pink-100 opacity-0" />
    </div>
  );
};

export default Cursor;
