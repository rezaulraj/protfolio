import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { onReady } from "../lib/ready";
import { navItems, personal } from "../constants";
import Icon from "./Icons";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const progressRef = useRef(null);
  const headerRef = useRef(null);

  // Drop the bar in once the intro finishes.
  useGSAP(() => {
    gsap.set(headerRef.current, { yPercent: -120, opacity: 0 });
    return onReady(() =>
      gsap.to(headerRef.current, { yPercent: 0, opacity: 1, duration: 1.2, delay: 0.6, ease: "expo.out" })
    );
  });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navItems.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // Close the mobile menu if the window is resized to desktop width.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e) => e.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-50">
      <div
        ref={progressRef}
        className="absolute left-0 top-0 h-[2px] w-full origin-left bg-linear-to-r from-pink-100 via-violet to-blue-50"
        style={{ transform: "scaleX(0)" }}
      />
      <nav
        className={`wrap mt-3 flex items-center justify-between rounded-full transition-all duration-500 ${
          scrolled
            ? "border border-transparent py-2.5 md:max-w-5xl md:border-white/10 md:bg-ink/60 md:backdrop-blur-xl"
            : "border border-transparent py-4"
        }`}
      >
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map(({ name, href }) => {
            const isActive = active === href.slice(1);
            return (
              <li key={name}>
                <a
                  href={href}
                  className={`relative rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                    isActive ? "bg-white/10 text-white" : "text-primary hover:text-white"
                  }`}
                >
                  {name}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="ml-auto flex items-center gap-3">
          <a
            href={`mailto:${personal.email}`}
            className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5 md:inline-flex"
          >
            Hire me
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="flex-center size-11 rounded-full border border-white/15 bg-ink/60 text-white backdrop-blur-xl md:hidden"
            aria-label="Toggle menu"
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      <div
        className={`fixed inset-0 -z-10 bg-ink/95 backdrop-blur-xl transition-all duration-500 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="wrap flex h-full flex-col justify-center gap-2">
          {navItems.map(({ name, href }, i) => (
            <li
              key={name}
              className="transition-all duration-500"
              style={{
                transitionDelay: open ? `${i * 60}ms` : "0ms",
                transform: open ? "none" : "translateY(20px)",
                opacity: open ? 1 : 0,
              }}
            >
              <a
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 py-2 text-5xl font-bold text-white"
              >
                <span className="font-mono text-sm text-pink-100">0{i + 1}</span>
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
