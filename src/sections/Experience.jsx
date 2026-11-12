import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleHeader from "../components/TitleHeader";
import Icon from "../components/Icons";
import { experiences } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".timeline-progress",
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".timeline",
          start: "top 70%",
          end: "bottom 70%",
          scrub: true,
        },
      }
    );
  });

  return (
    <section id="experience" className="relative py-24 md:py-36">
      <div className="wrap">
        <TitleHeader title="Work" accent="experience" text="Where I've been" number="02" />

        <div className="timeline relative mt-16 md:mt-24">
          <div className="absolute bottom-0 left-[11px] top-2 w-px bg-white/10 md:left-[calc(33.333%+11px)]">
            <div className="timeline-progress h-full w-full origin-top bg-linear-to-b from-pink-100 via-violet to-blue-50" />
          </div>

          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="relative grid gap-4 pb-14 pl-12 last:pb-0 md:grid-cols-3 md:gap-0 md:pl-0"
            >
              {/* meta */}
              <div className="reveal md:pr-16 md:text-right">
                <p className="font-mono text-sm text-pink-100">{exp.period}</p>
                <p className="mt-2 text-2xl font-medium text-white">{exp.company}</p>
                <p className="mt-1 text-sm">{exp.location}</p>
                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-sm text-blue-50 hover:underline"
                  >
                    Website <Icon name="arrowUpRight" className="size-3.5" />
                  </a>
                )}
              </div>

              {/* dot */}
              <span className="absolute left-0 top-1 flex-center size-6 rounded-full border border-white/20 bg-ink md:left-[33.333%]">
                <span
                  className={`size-2.5 rounded-full ${
                    exp.current ? "bg-emerald-400 shadow-[0_0_14px_#34d399]" : "bg-violet"
                  }`}
                />
              </span>

              {/* card */}
              <div className="reveal card p-7 md:col-span-2 md:ml-16 md:p-9">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-medium text-white md:text-3xl">{exp.role}</h3>
                  {exp.current && (
                    <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-emerald-300">
                      Current
                    </span>
                  )}
                </div>
                <ul className="mt-6 space-y-3">
                  {exp.points.map((p) => (
                    <li key={p} className="flex gap-3 leading-relaxed">
                      <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-pink-100" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-2">
                  {exp.tags.map((t) => (
                    <span key={t} className="chip py-1 font-mono text-xs">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
