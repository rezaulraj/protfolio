import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleHeader from "../components/TitleHeader";
import Icon from "../components/Icons";
import { education } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  // Big background years drift upward while scrolling.
  useGSAP(() => {
    gsap.fromTo(
      ".edu-year",
      { yPercent: 40 },
      {
        yPercent: -30,
        ease: "none",
        scrollTrigger: { trigger: "#education", start: "top bottom", end: "bottom top", scrub: true },
      }
    );
  });

  return (
    <section id="education" className="relative py-24 md:py-36">
      <div className="wrap">
        <TitleHeader title="Education" text="Where I learned" number="05" />

        <div className="mt-14 grid gap-5 md:mt-20 md:grid-cols-2">
          {education.map((e) => (
            <div key={e.degree} className="reveal card p-7 md:p-10">
              <span
                aria-hidden="true"
                className="edu-year text-outline pointer-events-none absolute -bottom-6 -right-2 -z-10 text-[5.5rem] sm:text-[9rem] font-bold leading-none opacity-[0.12]"
              >
                {e.year}
              </span>
              <div className="flex items-center justify-between">
                <span className="flex-center size-12 rounded-2xl bg-linear-to-br from-pink-100/20 to-blue-50/20 text-white">
                  <Icon name="cap" className="size-6" />
                </span>
                <span className="font-mono text-sm">{e.period}</span>
              </div>
              <h3 className="mt-8 text-2xl font-medium leading-snug text-white md:text-3xl">
                {e.degree}
              </h3>
              <p className="mt-3 text-lg">{e.school}</p>
              <p className="text-sm">{e.place}</p>
              <span className="chip mt-8 font-mono text-xs">{e.grade}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
