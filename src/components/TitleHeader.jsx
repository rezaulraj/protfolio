import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "../lib/ready";

gsap.registerPlugin(ScrollTrigger);

// Section heading whose letters rise up one by one when scrolled into view.
const TitleHeader = ({ title, accent, text, number }) => {
  const root = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const tl = gsap.timeline({
        scrollTrigger: { trigger: root.current, start: "top 85%", once: true },
      });
      tl.from(".th-line", { scaleX: 0, transformOrigin: "left", duration: 0.8, ease: "expo.out" })
        .from(".th-eyebrow", { opacity: 0, x: -20, duration: 0.6, ease: "power3.out" }, "<")
        .from(
          ".th-char",
          { yPercent: 115, rotate: 12, stagger: 0.035, duration: 1, ease: "expo.out" },
          "<0.1"
        )
        .from(".th-accent", { yPercent: 115, duration: 1.1, ease: "expo.out" }, "-=0.8")
        .from(".th-num", { yPercent: 60, opacity: 0, duration: 1.2, ease: "expo.out" }, "<");
    },
    { scope: root }
  );

  return (
    <div ref={root} className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="eyebrow mb-4 flex items-center gap-3">
          <span className="th-eyebrow text-pink-100">{number}</span>
          <span className="th-line h-px w-10 bg-white/40" />
          <span className="th-eyebrow">{text}</span>
        </p>
        <h2 aria-label={`${title} ${accent ?? ""}`} className="text-5xl font-bold tracking-tight text-white md:text-7xl">
          {title.split("").map((c, i) => (
            <span key={i} aria-hidden="true" className="-mb-[0.15em] inline-block overflow-hidden pb-[0.15em] align-bottom">
              <span className="th-char inline-block">{c === " " ? " " : c}</span>
            </span>
          ))}
          {accent && (
            <>
              {" "}
              <span aria-hidden="true" className="-mb-[0.15em] inline-block overflow-hidden pb-[0.15em] align-bottom">
                <span className="th-accent inline-block pr-2 font-serif font-normal italic text-gradient">
                  {accent}
                </span>
              </span>
            </>
          )}
        </h2>
      </div>
      <div className="hidden overflow-hidden md:block">
        <p className="th-num font-mono text-8xl font-medium leading-none text-white/[0.06]">
          {number}
        </p>
      </div>
    </div>
  );
};

export default TitleHeader;
