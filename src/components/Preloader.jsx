import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { markReady, prefersReducedMotion } from "../lib/ready";

const words = ["Design", "Build", "Ship"];

const Preloader = () => {
  const root = useRef(null);
  const count = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) {
        gsap.set(root.current, { display: "none" });
        markReady();
        return;
      }
      document.body.style.overflow = "hidden";
      const n = { v: 0 };
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = "";
          ScrollTrigger.refresh();
        },
      });

      tl.from(".pl-word", { yPercent: 110, stagger: 0.12, duration: 0.8, ease: "expo.out" })
        .to(
          n,
          {
            v: 100,
            duration: 1.8,
            ease: "power2.inOut",
            onUpdate: () => {
              if (count.current) count.current.textContent = String(Math.round(n.v)).padStart(3, "0");
            },
          },
          0
        )
        .to(".pl-bar", { scaleX: 1, duration: 1.8, ease: "power2.inOut" }, 0)
        .to(".pl-word, .pl-count", { yPercent: -110, stagger: 0.05, duration: 0.6, ease: "power3.in" })
        .call(markReady)
        .to(".pl-panel", { yPercent: -100, stagger: 0.08, duration: 1.1, ease: "expo.inOut" }, "-=0.1")
        .set(root.current, { display: "none" });

      return () => {
        document.body.style.overflow = "";
      };
    },
    { scope: root }
  );

  return (
    <div ref={root} className="fixed inset-0 z-[100]" aria-hidden="true">
      {/* stacked panels give the curtain a layered wipe */}
      <div className="pl-panel absolute inset-0 bg-linear-to-r from-pink-100 via-violet to-blue-50" />
      <div className="pl-panel absolute inset-0 flex flex-col justify-between bg-ink p-6 md:p-12">
        <div className="flex gap-3 overflow-hidden md:gap-6">
          {words.map((w, i) => (
            <span
              key={w}
              className="pl-word block text-4xl font-bold uppercase text-white md:text-7xl"
            >
              {w}
              {i < words.length - 1 && <span className="text-pink-100">.</span>}
            </span>
          ))}
        </div>
        <div>
          <div className="flex items-end justify-between overflow-hidden">
            <span className="pl-count block font-serif text-2xl italic text-primary md:text-3xl">
              Rezaul Karim — Portfolio
            </span>
            <span
              ref={count}
              className="pl-count block font-mono text-6xl font-medium text-white md:text-[9rem] md:leading-none"
            >
              000
            </span>
          </div>
          <div className="mt-6 h-px w-full bg-white/10">
            <div className="pl-bar h-full w-full origin-left scale-x-0 bg-linear-to-r from-pink-100 via-violet to-blue-50" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
