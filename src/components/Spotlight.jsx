import { useEffect, useRef } from "react";

// A soft light that follows the cursor + feeds --mx/--my to every .card
const Spotlight = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    let frame;
    const onMove = (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (ref.current) {
          ref.current.style.transform = `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`;
          ref.current.style.opacity = "1";
        }
        document.querySelectorAll(".card").forEach((card) => {
          const r = card.getBoundingClientRect();
          card.style.setProperty("--mx", `${e.clientX - r.left}px`);
          card.style.setProperty("--my", `${e.clientY - r.top}px`);
        });
      });
    };
    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-0 size-[600px] rounded-full opacity-0 transition-opacity duration-700"
      style={{
        background: "radial-gradient(circle, rgba(155,92,255,0.09) 0%, transparent 60%)",
      }}
    />
  );
};

export default Spotlight;
