import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import GradientSpheres from "../components/GradientSpheres";
import HeroExpriences from "../components/HeroExpriences";
import Typewriter from "../components/Typewriter";
import Counter from "../components/Counter";
import Icon from "../components/Icons";
import Magnetic from "../components/Magnetic";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onReady } from "../lib/ready";
import { personal, stats } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useGSAP(() => {
    // Intro: waits for the preloader curtain, then reveals the name.
    const tl = gsap.timeline({ paused: true, defaults: { ease: "expo.out" } });
    tl.from(".hero-line", { yPercent: 110, rotate: 4, duration: 1.8, stagger: 0.14, delay: 0.35 })
      .from(".hero-3d", { opacity: 0, scale: 0.9, duration: 2 }, "<")
      .from(".hero-fade", { opacity: 0, y: 30, duration: 1.2, stagger: 0.08 }, "-=1.4");

    // Scroll parallax: content drifts up & fades, 3D model sinks slower.
    const st = { trigger: "#home", start: "top top", end: "bottom top", scrub: true };
    gsap.to(".hero-content", { yPercent: -18, opacity: 0.1, ease: "none", scrollTrigger: st });
    gsap.to(".hero-3d-wrap", { yPercent: 12, ease: "none", scrollTrigger: st });
    gsap.to(".hero-grid", { yPercent: 30, ease: "none", scrollTrigger: st });

    return onReady(() => tl.play());
  });

  return (
    <section id="home" className="relative min-h-dvh overflow-hidden text-white">
      <GradientSpheres
        sphere1Class="gradient-sphere sphere-1"
        sphere2Class="gradient-sphere sphere-2"
      />
      <div aria-hidden="true" className="hero-grid absolute inset-0" />

      {/* 3D character (follows your mouse) */}
      <div className="hero-3d-wrap pointer-events-none absolute inset-0 top-[30%] opacity-25 sm:top-0 sm:opacity-40 md:left-[38%] md:opacity-100">
        <div className="hero-3d size-full">
          <HeroExpriences />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-ink to-transparent" />

      <div className="hero-content wrap relative z-10 flex min-h-dvh flex-col justify-center pb-16 pt-32">
        <div className="hero-fade mb-8 inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-2 pr-4 text-sm backdrop-blur">
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex size-full rounded-full bg-emerald-400 [animation:ping-slow_1.6s_cubic-bezier(0,0,.2,1)_infinite]" />
            <span className="relative inline-flex size-2.5 rounded-full bg-emerald-400" />
          </span>
          Open to new opportunities
        </div>

        <p className="hero-fade font-mono text-sm uppercase tracking-[0.3em] text-primary">
          Hi, I'm
        </p>
        <h1 className="mt-3 text-[18vw] font-bold uppercase leading-[0.85] tracking-tight md:text-[9rem] lg:text-[10.5rem]">
          <span className="block overflow-hidden">
            <span className="hero-line block">{personal.firstName}</span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-line text-outline block">{personal.lastName}</span>
          </span>
        </h1>

        <p className="hero-fade mt-6 min-h-[1.2em] font-serif text-4xl italic md:text-6xl">
          <Typewriter words={personal.roles} />
        </p>

        <p className="hero-fade mt-6 max-w-xl text-lg leading-relaxed text-primary md:text-xl">
          {personal.intro}
        </p>

        <div className="hero-fade mt-10 flex flex-wrap items-center gap-4">
          <Magnetic>
            <a href="#projects" className="btn-primary">
              <span>View my work</span>
              <Icon name="arrowUpRight" className="size-4" />
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#contact" className="btn-ghost">
              Let's talk
            </a>
          </Magnetic>
          <div className="ml-1 flex items-center gap-2">
            {[
              { href: personal.github, icon: "github", label: "GitHub" },
              { href: personal.linkedin, icon: "linkedin", label: "LinkedIn" },
              { href: `mailto:${personal.email}`, icon: "mail", label: "Email" },
            ].map((s) => (
              <Magnetic key={s.label} strength={0.5}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex-center size-12 rounded-full border border-white/10 text-white-50 transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/10"
              >
                <Icon name={s.icon} className="size-5" />
              </a>
              </Magnetic>
            ))}
          </div>
        </div>

        <div className="hero-fade mt-16 grid max-w-2xl grid-cols-3 divide-x divide-white/10 border-y border-white/10">
          {stats.map((s) => (
            <div key={s.label} className="py-5 pl-4 first:pl-0 md:pl-6">
              <Counter
                value={s.value}
                suffix={s.suffix}
                className="block text-3xl font-bold text-white md:text-5xl"
              />
              <p className="mt-1 text-xs text-primary md:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 right-5 z-10 hidden items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-primary transition-colors hover:text-white md:right-10 md:flex"
      >
        Scroll
        <span className="flex-center size-10 rounded-full border border-white/15">
          <Icon name="arrowDown" className="size-4 animate-bounce" />
        </span>
      </a>
    </section>
  );
};

export default Hero;
