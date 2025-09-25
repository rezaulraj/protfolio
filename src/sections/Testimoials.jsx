import React from "react";
import GradientSpheres from "../components/GradientSpheres";
import TitleHeader from "../components/TitleHeader";
import { testimonials } from "../constants";
import TestimoialCard from "../components/TestimoialCard";

const Testimoials = () => {
  return (
    <div
      id="tesimoinals"
      className="flex items-center justify-center relative h-full w-full md:p-0 px-5"
    >
      <GradientSpheres
        sphere1Class={"testimonial-gradient-sphere testimonial-sphere-1"}
        sphere2Class={"testimonial-gradient-sphere testimonial-sphere-2"}
      />
      <div className="w-full h-full container md:my-20 my-10 relative z-10">
        <div className="container mx-auto md:p-0 px-5">
          <TitleHeader
            title={"Testimoials"}
            number={"04"}
            text={"Watch our Clients are saying about us"}
          />

          <div className="mt-20">
            <div className="grid md:grid-cols-2 gap-5">
              {testimonials.map((testimonial, index) => (
                <TestimoialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimoials;
