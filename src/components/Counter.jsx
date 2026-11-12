import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Counter = ({ value, suffix = "", className = "" }) => {
  const ref = useRef(null);

  useGSAP(() => {
    const obj = { n: 0 };
    gsap.to(obj, {
      n: value,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: { trigger: ref.current, start: "top 90%", once: true },
      onUpdate: () => {
        if (ref.current) ref.current.textContent = `${Math.round(obj.n)}${suffix}`;
      },
    });
  }, [value]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
};

export default Counter;
