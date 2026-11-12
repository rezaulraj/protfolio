import TitleHeader from "../components/TitleHeader";
import Carosuel from "../components/Carosuel";
import Magnetic from "../components/Magnetic";
import Icon from "../components/Icons";
import { personal } from "../constants";

const Project = () => {
  return (
    <section id="projects" className="relative py-24 md:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/4 top-40 size-[500px] rounded-full bg-pink-100/10 blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/4 top-80 size-[500px] rounded-full bg-blue-50/10 blur-[150px]"
      />
      <div className="wrap relative">
        <TitleHeader title="My" accent="projects" text="Recent work" number="04" />
      </div>

      <div className="reveal relative mt-14 md:mt-20">
        <Carosuel />
      </div>

      <div className="reveal mt-14 flex justify-center">
        <Magnetic>
          <a href={personal.github} target="_blank" rel="noreferrer" className="btn-ghost">
            <Icon name="github" className="size-5" />
            See more on GitHub
          </a>
        </Magnetic>
      </div>
    </section>
  );
};

export default Project;
