import { useCallback, useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Icon from "./Icons";
import { projects } from "../constants";

const AUTOPLAY_MS = 5000;

const Carosuel = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const wrap = useRef(null);
  const track = useRef(null);
  const drag = useRef(null);
  const dragged = useRef(false);
  const n = projects.length;

  const go = useCallback((dir) => setCurrent((c) => (c + dir + n) % n), [n]);

  // Centre the active slide in the viewport.
  const position = useCallback(
    (duration = 1.3) => {
      const slide = track.current?.children[current];
      if (!slide) return;
      const x = wrap.current.offsetWidth / 2 - (slide.offsetLeft + slide.offsetWidth / 2);
      gsap.to(track.current, { x, duration, ease: "expo.out" });
    },
    [current]
  );

  useGSAP(
    () => {
      position();
      const slides = gsap.utils.toArray(".c-slide");
      slides.forEach((s, i) => {
        const active = i === current;
        gsap.to(s, {
          scale: active ? 1 : 0.86,
          opacity: active ? 1 : 0.35,
          filter: active ? "grayscale(0)" : "grayscale(0.8)",
          duration: 1.3,
          ease: "expo.out",
        });
      });
      const activeSlide = slides[current];
      gsap.fromTo(activeSlide.querySelector("img"), { scale: 1.6 }, { scale: 1, duration: 1.8, ease: "power3.out" });
      gsap.fromTo(
        activeSlide.querySelectorAll(".c-info > *"),
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.9, delay: 0.25, ease: "power3.out" }
      );
      gsap.fromTo(".c-count", { yPercent: 100 }, { yPercent: 0, duration: 0.7, ease: "expo.out" });
    },
    { dependencies: [current], scope: wrap }
  );

  useEffect(() => {
    const onResize = () => position(0);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [position]);

  // Autoplay (pauses while hovered)
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(1), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [current, paused, go]);

  // Progress bar mirrors the autoplay timer (reset while hovered).
  useEffect(() => {
    const bar = wrap.current.querySelector(".c-progress");
    gsap.killTweensOf(bar);
    if (paused) gsap.to(bar, { scaleX: 0, duration: 0.4, ease: "power2.out" });
    else gsap.fromTo(bar, { scaleX: 0 }, { scaleX: 1, duration: AUTOPLAY_MS / 1000, ease: "none" });
  }, [paused, current]);

  // Swipe / drag
  const onPointerDown = (e) => (drag.current = e.clientX);
  const onPointerUp = (e) => {
    if (drag.current === null) return;
    const dx = e.clientX - drag.current;
    drag.current = null;
    dragged.current = Math.abs(dx) > 60;
    if (dragged.current) go(dx < 0 ? 1 : -1);
  };

  return (
    <div
      ref={wrap}
      className="relative select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(1);
        if (e.key === "ArrowLeft") go(-1);
      }}
      tabIndex={0}
      aria-roledescription="carousel"
    >
      <div
        className="overflow-hidden"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => (drag.current = null)}
      >
        <div ref={track} className="flex items-center gap-[3vw] py-4">
          {projects.map((p, i) => {
            const active = i === current;
            return (
              <div
                key={p.title + i}
                className="c-slide relative aspect-[4/5] w-[85vw] shrink-0 overflow-hidden rounded-2xl border border-white/10 sm:aspect-[4/3] sm:w-[75vw] md:rounded-3xl lg:aspect-[16/9] lg:w-[62vw] 2xl:w-[56vw]"
                data-cursor={active ? "View" : "Drag"}
                onClick={() => !active && !dragged.current && setCurrent(i)}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  draggable="false"
                  className="pointer-events-none size-full object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink/70 via-transparent to-transparent" />

                {/* bottom bar (previous style) */}
                <a
                  href={p.link}
                  target={p.link.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  tabIndex={active ? 0 : -1}
                  onClick={(e) => (!active || dragged.current) && e.preventDefault()}
                  className="group absolute inset-x-0 bottom-0 h-20 bg-black-200/90 px-5 backdrop-blur-md md:h-24 md:px-8"
                >
                  <div className="c-info flex h-full items-center justify-between gap-4">
                    <div className="flex min-w-0 items-center gap-3 md:gap-5">
                      <p className="font-mono text-sm text-pink-100">
                        {String(i + 1).padStart(2, "0")}.
                      </p>
                      <p className="truncate text-xl font-medium text-white md:text-3xl">{p.title}</p>
                      <div className="hidden gap-2 lg:flex">
                        {p.tags.map((t) => (
                          <span key={t} className="chip py-1 font-mono text-xs">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex shrink-0 items-center gap-3 text-white md:gap-5">
                      <p className="hidden sm:block">Preview Project</p>
                      <span className="flex-center size-10 rounded-full bg-white text-ink transition-transform duration-500 group-hover:rotate-45 md:size-12">
                        <Icon name="arrowUpRight" className="size-5" />
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>

      {/* controls */}
      <div className="wrap mt-10 flex items-center justify-between gap-6 md:mt-14">
        <div className="flex items-center gap-4 font-mono text-white">
          <span className="inline-block overflow-hidden">
            <span className="c-count inline-block text-3xl md:text-4xl">
              {String(current + 1).padStart(2, "0")}
            </span>
          </span>
          <span className="text-primary">/ {String(n).padStart(2, "0")}</span>
        </div>
        <div className="h-px flex-1 bg-white/10">
          <div className="c-progress h-full origin-left bg-linear-to-r from-pink-100 via-violet to-blue-50" />
        </div>
        <div className="flex gap-3">
          {[
            { dir: -1, label: "Previous project", rot: "rotate-180" },
            { dir: 1, label: "Next project", rot: "" },
          ].map((b) => (
            <button
              key={b.dir}
              onClick={() => go(b.dir)}
              aria-label={b.label}
              className="flex-center size-12 rounded-full border border-white/20 bg-black-200 text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-ink md:size-14"
            >
              <svg viewBox="0 0 24 24" className={`size-5 ${b.rot}`} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carosuel;
