import TitleHeader from "../components/TitleHeader";
import { marqueeSkills, skillGroups } from "../constants";

const SkillChip = ({ skill }) => (
  <span className="chip">
    {skill.icon && (
      <img
        src={skill.icon}
        alt=""
       
        className={`size-4 ${skill.invert ? "invert" : ""}`}
      />
    )}
    {skill.name}
  </span>
);

const MarqueeRow = ({ items, reverse }) => {
  const track = (hidden) => (
    <div className="marquee-track" aria-hidden={hidden}>
      {items.map((s) => (
        <div
          key={s.name}
          className="flex shrink-0 items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4"
        >
          <img
            src={s.icon}
            alt={hidden ? "" : s.name}
           
            className={`size-9 ${s.invert ? "invert" : ""}`}
          />
          <span className="text-lg font-medium text-white-50">{s.name}</span>
        </div>
      ))}
    </div>
  );
  return (
    <div className={`marquee ${reverse ? "marquee-reverse" : ""}`}>
      {track(false)}
      {track(true)}
    </div>
  );
};

const TechStack = () => {
  const half = Math.ceil(marqueeSkills.length / 2);

  return (
    <section id="skills" className="relative py-24 md:py-36">
      <div className="wrap">
        <TitleHeader title="Tech" accent="stack" text="My go-to toolbox" number="03" />

        <div className="mt-14 grid gap-4 md:mt-20 md:grid-cols-2 md:gap-5">
          {skillGroups.map((g, i) => (
            <div key={g.title} className="reveal card p-7 md:p-9">
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute -right-20 -top-20 -z-10 size-64 rounded-full bg-radial ${g.accent} to-transparent blur-2xl`}
              />
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-medium text-white md:text-3xl">{g.title}</h3>
                  <p className="mt-2">{g.blurb}</p>
                </div>
                <span className="font-mono text-sm text-white/30">0{i + 1}</span>
              </div>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {g.skills.map((s) => (
                  <SkillChip key={s.name} skill={s} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 space-y-4 md:mt-24">
        <MarqueeRow items={marqueeSkills.slice(0, half)} />
        <MarqueeRow items={marqueeSkills.slice(half)} reverse />
      </div>
    </section>
  );
};

export default TechStack;
