import React, { useState } from "react";
import { slides } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Carosuel = () => {
  const [currentSlide, SetCurrentSilde] = useState(0);
  const prevSilder = () => {
    SetCurrentSilde(
      (prev) => (prev - 1 + (slides.length - 1)) % (slides.length - 1)
    );
  };
  const nextSilder = () => {
    SetCurrentSilde((prev) => (prev + 1) % (slides.length - 1));
  };
  useGSAP(() => {
    gsap.to(".slider-item", {
      x: `-${currentSlide * 63}vw`,
      opacity: 1,
      duration: 1.2,
      ease: "expo.out",
    });
    gsap.fromTo(
      `.slider-item:nth-child(${currentSlide + 2}) img`,
      { scale: 2 },
      { scale: 1, duration: 1.5, ease: "power2.out" }
    );
  }, [currentSlide]);
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
      <div className="mt-10 md:mt-40 text-white-50 flex justify-end gap-5 md:-translate-x-32 -translate-x-5">
        <div onClick={prevSilder} className="border rounded-full bg-black-200">
          <img src="/images/CaretLeft.svg" alt="left" className="w-10 h-10" />
        </div>
        <div onClick={nextSilder} className="border rounded-full bg-black-200">
          <img src="/images/CaretRight.svg" alt="left" className="w-10 h-10" />
        </div>
      </div>
    </div>
  );
};

export default Carosuel;
