import React from "react";
import GradientSpheres from "../components/GradientSpheres";
import TitleHeader from "../components/TitleHeader";
import Carosuel from "../components/Carosuel";

const Project = () => {
  return (
    <section
      className="w-full h-full relative"
      id="projects"
    >
      <GradientSpheres
        sphere1Class={"projects-gradient-sphere projects-sphere-1"}
        sphere2Class={"projects-gradient-sphere projects-sphere-2"}
      />
      <div className="w-full md:my-20 my-10 relative z-10">
        <div className="container mx-auto md:p-0 px-5">
          <TitleHeader
            title={"My Projects"}
            number={"03"}
            text={"Check my recent project below for your Goal"}
          />
        </div>
      </div>
      <div className="md:mt-20 mt-10">
        <Carosuel />
      </div>
    </section>
  );
};

export default Project;
