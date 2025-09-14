import React from "react";
import { slides } from "../constants";

const Carosuel = () => {
  return (
    <div className="relative">
      <div className="w-full relative lg:h-[40vh] h-[60vh]">
        <div className="absolute w-full -left-[43vw] top-0">
          <div className="flex w-full lg:h-[60vh] md:h-[40vh] h-[60vh] items-center gap-[3vw]">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="slider-item w-[60vw] h-full flex-none relative overflow-hidden "
              >
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute w-full h-20 bottom-0 left-0 bg-black-200 opacity-90 px-5">
                  <div className="flex h-full items-center justify-between">
                    <div className="flex items-center justify-center gap-2">
                      <p>{index + 1}.</p>
                      <p className="">{slide.title}</p>
                    </div>
                    <div className="flex items-center justify-center gap-5">
                      <p>Preview Project</p>
                      <img src="/images/arrowupright.svg" alt="arrowup" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 text-white-50 flex justify-end gap-5">
        <div className="border rounded-full ">
          <img src="/images/caretLeft.svg" alt="left" className="w-5 h-5" />
        </div>
        <div className="">
          <img src="/images/caretRight.svg" alt="left" className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default Carosuel;
