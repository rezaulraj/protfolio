import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Preloader from "./components/Preloader";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Spotlight from "./components/Spotlight";
import ScrollText from "./components/ScrollText";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import TechStack from "./sections/TechStack";
import Project from "./sections/Project";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { prefersReducedMotion } from "./lib/ready";

gsap.registerPlugin(ScrollTrigger);

function App() {
  // Fade + rise (with a slight 3D tilt) every `.reveal` element as it enters.
  useGSAP(() => {
    if (prefersReducedMotion()) return;
    gsap.set(".reveal", { opacity: 0, y: 60, rotateX: -8, transformPerspective: 900 });
    ScrollTrigger.batch(".reveal", {
      start: "top 90%",
      once: true,
      onEnter: (els) =>
        gsap.to(els, {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1.1,
          stagger: 0.1,
          ease: "power3.out",
          overwrite: true,
          clearProps: "transform",
        }),
    });
  });

  return (
    <>
      <Preloader />
      <Cursor />
      <div className="grain" aria-hidden="true" />
      <Spotlight />
      <Navbar />
      <main className="relative z-10 overflow-x-clip">
        <Hero />
        <ScrollText items={["Full Stack", "Node.js", "React", "Next.js", "REST APIs"]} />
        <About />
        <Experience />
        <ScrollText
          variant="ribbon"
          reverse
          items={["Clean code", "Scalable APIs", "Fast UIs", "Docker deploys", "Databases"]}
        />
        <TechStack />
        <Project />
        <Education />
        <ScrollText items={["Let's work", "together"]} reverse />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
