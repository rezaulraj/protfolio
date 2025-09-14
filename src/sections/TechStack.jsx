import React from "react";
import TitleHeader from "../components/TitleHeader";
import { iconsList } from "../constants";
import TechIcon from "../components/TechIcon";

const TechStack = () => {
  return (
    <section className="w-full h-full">
      <div className="">
        <div className="container mx-auto md:p-0 px-5">
          <TitleHeader
            title={"TECH STACK"}
            number={"02"}
            text={"My Go-To for Crafting Solutions"}
          />
        </div>
        <div className="md:mt-20 mt-10 relative">
          <div className="marquee h-52 border-red-500">
            <div className="marquee-box md:gap-12 gap-5">
              {iconsList.map((icon, indx) => (
                <TechIcon key={indx} icon={icon} />
              ))}
              {iconsList.map((icon, indx) => (
                <TechIcon key={indx} icon={icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
