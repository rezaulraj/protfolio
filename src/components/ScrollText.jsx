import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Giant text band that slides sideways as you scroll.
// variant="ribbon" draws a tilted gradient ribbon instead.
const ScrollText = ({ items, reverse = false, variant = "outline" }) => {
  const root = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".st-track",
        { xPercent: reverse ? -35 : 0 },
        {
          xPercent: reverse ? 0 : -35,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: 0.6 },
        }
      );
    },
    { scope: root }
  );

  const list = [...items, ...items, ...items];

  if (variant === "ribbon") {
    return (
      <div ref={root} aria-hidden="true" className="relative overflow-hidden py-16">
        <div className="-mx-[5%] -rotate-3 bg-linear-to-r from-pink-100 via-violet to-blue-50 py-5 md:py-7">
          <div className="st-track flex w-max items-center gap-8 whitespace-nowrap text-3xl font-bold uppercase text-ink md:text-6xl">
            {list.map((t, i) => (
              <span key={i} className="flex items-center gap-8">
                {t} <span className="text-white">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={root} aria-hidden="true" className="overflow-hidden py-10 md:py-16">
      <div className="st-track flex w-max items-center gap-10 whitespace-nowrap text-[15vw] font-bold uppercase leading-none tracking-tight md:text-[9vw]">
        {list.map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className={i % 2 ? "text-outline" : "text-white/90"}>{t}</span>
            <span className="text-[0.4em] text-pink-100">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrollText;
