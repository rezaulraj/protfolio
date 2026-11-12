import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Alien } from "../../public/models/Alien";
import TitleHeader from "../components/TitleHeader";
import Icon from "../components/Icons";
import {
  hobbies,
  languages,
  motivation,
  personal,
  socials,
  yearsOfExperience,
} from "../constants";

const LocalClock = () => {
  const fmt = () =>
    new Intl.DateTimeFormat("en-GB", {
      timeZone: personal.timeZone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(new Date());
  const [time, setTime] = useState(fmt);
  useEffect(() => {
    const id = setInterval(() => setTime(fmt()), 1000);
    return () => clearInterval(id);
  }, []);
  return <span className="tabular-nums">{time}</span>;
};

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-36">
      <div className="wrap relative z-10">
        <TitleHeader title="About" accent="me" text="Who I am" number="01" />

        <div className="mt-14 grid grid-cols-12 gap-4 md:mt-20 md:gap-5">
          {/* intro */}
          <div className="reveal card col-span-12 flex flex-col justify-between p-7 md:p-10 lg:col-span-7">
            <div>
              <p className="eyebrow">Hello there 👋</p>
              <h3 className="mt-5 text-3xl font-medium leading-tight text-white md:text-[2.6rem]">
                I'm <span className="text-gradient">Rezaul Karim</span>, a full stack
                developer who turns ideas into{" "}
                <span className="font-serif italic">reliable, fast</span> web products.
              </h3>
            </div>
            <div className="mt-8 space-y-4 text-base leading-relaxed md:text-lg">
              <p>
                I've spent {yearsOfExperience}+ years writing software professionally. Today
                I work as a Full Stack Web Developer at{" "}
                <span className="text-white">Alternative Recruitment</span>, and before that I
                spent over two years as a Software Developer at{" "}
                <span className="text-white">Merinasoft</span>.
              </p>
              <p>
                I like owning the whole stack — data models, APIs and auth on the back end,
                polished React / Next.js interfaces on the front, and Docker-based deploys to
                production. I hold a B.Sc. in Computer Science & Engineering from Daffodil
                International University.
              </p>
            </div>
          </div>

          {/* 3D alien */}
          <div className="reveal col-span-12 h-72 cursor-grab overflow-hidden rounded-3xl bg-lime sm:h-96 lg:col-span-5 lg:h-auto lg:min-h-[420px]">
            <div className="relative h-full w-full">
              <p className="absolute left-6 top-6 z-10 font-mono text-xs uppercase tracking-[0.25em] text-ink/70">
                Drag me ↻
              </p>
              <Canvas>
                <OrbitControls enableZoom={false} />
                <Alien scale={2} position={[0, -5.5, 0]} rotation={[0, -0.5, 0]} />
              </Canvas>
            </div>
          </div>

          {/* location + time */}
          <div className="reveal card col-span-12 p-7 sm:col-span-6 lg:col-span-4">
            <div className="flex items-center justify-between">
              <p className="eyebrow">Based in</p>
              <Icon name="pin" className="size-5 text-pink-100" />
            </div>
            <p className="mt-6 text-3xl font-medium text-white">Dhaka,</p>
            <p className="text-3xl font-medium text-white">{personal.country}</p>
            <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
              <Icon name="clock" className="size-4" />
              <span>Local time</span>
              <span className="text-white">
                <LocalClock />
              </span>
              <span>(GMT+6)</span>
            </div>
          </div>

          {/* currently */}
          <div className="reveal card col-span-12 p-7 sm:col-span-6 lg:col-span-4">
            <div className="flex items-center justify-between">
              <p className="eyebrow">Currently</p>
              <Icon name="briefcase" className="size-5 text-blue-50" />
            </div>
            <p className="mt-6 text-2xl font-medium text-white md:text-3xl">{personal.role}</p>
            <p className="mt-2 text-lg">@ {personal.currentCompany}</p>
            <p className="mt-6 text-sm">Since January 2025</p>
          </div>

          {/* languages */}
          <div className="reveal card col-span-12 p-7 lg:col-span-4">
            <p className="eyebrow">Languages</p>
            <div className="mt-6 space-y-6">
              {languages.map((l) => (
                <div key={l.name}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                    <span className="text-xl font-medium text-white">{l.name}</span>
                    <span className="text-sm">{l.level}</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-linear-to-r from-pink-100 via-violet to-blue-50"
                      style={{ width: `${l.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* motivation */}
          <div className="reveal card col-span-12 p-7 md:p-10 lg:col-span-7">
            <p className="eyebrow">What drives me</p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {motivation.map((m, i) => (
                <li key={m} className="flex gap-4">
                  <span className="font-mono text-sm text-pink-100">0{i + 1}</span>
                  <span className="text-lg text-white-50">{m}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* hobbies */}
          <div className="reveal card col-span-12 p-7 md:p-10 lg:col-span-5">
            <p className="eyebrow">Off the keyboard</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {hobbies.map((h) => (
                <span key={h.name} className="chip px-4 py-2.5 text-base">
                  <span className="text-xl">{h.emoji}</span>
                  {h.name}
                </span>
              ))}
            </div>
          </div>

          {/* socials */}
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="reveal card group col-span-12 flex items-center justify-between gap-3 p-6 sm:col-span-6 sm:last:col-span-12 md:p-7 lg:col-span-4 lg:last:col-span-4"
            >
              <div className="flex min-w-0 items-center gap-4">
                <span className="flex-center size-12 shrink-0 rounded-2xl bg-white/5 text-white">
                  <Icon name={s.icon} className="size-6" />
                </span>
                <div className="min-w-0">
                  <p className="text-xl font-medium text-white">{s.name}</p>
                  <p className="truncate text-sm">{s.handle}</p>
                </div>
              </div>
              <Icon
                name="arrowUpRight"
                className="size-6 shrink-0 text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
