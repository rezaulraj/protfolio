import React from "react";
import GradientSpheres from "../components/GradientSpheres";
import TitleHeader from "../components/TitleHeader";
import { Canvas } from "@react-three/fiber";
import { Alien } from "../../public/models/Alien";
import { OrbitControls } from "@react-three/drei";
import { bentoSocialLinks } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const About = () => {
  useGSAP(() => {
    gsap.from("#card", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
        markers: false,
      },
    });
    gsap.from(".animated-text", {
      opacity: 0,
      y: 20,
      stagger: 0.15,
      duration: 0.6,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: "#about",
        start: "top top",
        markers: false,
      },
    });
  }, []);
  return (
    <section
      id="about"
      className="flex items-center justify-center relative md:p-0 px-5"
    >
      <GradientSpheres
        sphere1Class={"about-gradient-sphere about-sphere-1"}
        sphere2Class={"about-gradient-sphere about-sphere-12 "}
      />
      <div className="container w-full h-full md:my-40 my-20 relative z-10">
        <TitleHeader
          title={"About Me"}
          text={"Passionate Creator, Lifelong Learner"}
          number={"01"}
        />
        <div className="md:mt-20 mt-10">
          <div className="grid grid-cols-12 md:grid-cols-12 gap-5">
            <div className="md:col-span-7 col-span-12 row-span-5">
              <div className="bg-black-200 rounded-2xl p-7 w-full h-full">
                <div>
                  <img src="/images/flower.svg" alt="flower" />
                </div>
                <div className="mt-5">
                  <h1 className="text-blue-50 md:text-5xl text-3xl animated-text">
                    Rezaul Karim
                  </h1>
                  <p className="md:text-xl text-base mt-2 animated-text">
                    Full Stack JavaScript Developer | Focused on building
                    scalable back-ends and intuitive, pixel-perfect front-ends.
                  </p>
                </div>
              </div>
            </div>
            {/* 3d cute alien */}
            <div className="md:col-span-5 col-span-12 row-span-5">
              <div className="bg-[#c8d751] hover:cursor-grab rounded-2xl w-full md:h-full h-60">
                <div className="w-full h-full">
                  <Canvas>
                    <OrbitControls enableZoom={false} />
                    <Alien
                      scale={2}
                      position={[0, -5.5, 0]}
                      rotation={[0, -0.5, 0]}
                    />
                  </Canvas>
                </div>
              </div>
            </div>

            {/* web desgin card */}
            <div id="card" className="md:col-span-6 col-span-12 row-span-3">
              <div className="bg-black-200 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col h-full justify-center gap-2">
                  <h1 className="gradient-title md:text-3xl text-2xl font-medium animated-text">
                    Web Design & Dev
                  </h1>
                  <p className="md:text-2xl max-w-96 animated-text">
                    Cleanly Designed, Conversion-focused, and build for easy
                    updates.
                  </p>
                </div>
              </div>
            </div>

            {/* UI/UX design card */}
            <div id="card" className="md:col-span-6 col-span-12 row-span-3">
              <div className="bg-black-200 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col h-full justify-center gap-2">
                  <h1 className="gradient-title md:text-3xl text-2xl font-medium animated-text">
                    UX UI Desgin
                  </h1>
                  <p className="md:text-2xl max-w-96 animated-text">
                    Seamless web or mobile app design to wow your users.
                  </p>
                </div>
              </div>
            </div>
            {/* motivation card */}
            <div id="card" className="md:col-span-4 col-span-12 row-span-4">
              <div className="bg-black-200 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col justify-between gap-2">
                  {["BE YOURSELF!", "BE DIFFERENT!", "BUILD DIFFERENT"].map(
                    (text, indx) => (
                      <h1
                        className="gradient-title md:text-5xl text-3xl font-bold animated-text"
                        key={indx}
                      >
                        {text}
                      </h1>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* bento social links */}

            {bentoSocialLinks.map((item, indx) => (
              <div key={indx} className="md:col-span-4 col-span-12 row-span-2">
                <div className="bg-black-200 rounded-2xl p-7 w-full h-full group cursor-pointer">
                  <div className="flex items-center justify-between h-full">
                    <div className="flex flex-wrap items-center md:gap-5">
                      <img src={item.icon} alt="social" />
                      <h1 className="gradient-title md:text-3xl text-xl font-medium animated-text">
                        {item.name}
                      </h1>
                    </div>
                    <div className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300">
                      <img
                        src="/images/arrowupright.svg"
                        alt="arrow up"
                        className="lg:scale-100 scale-50"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
