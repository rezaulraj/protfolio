import Icon from "../components/Icons";
import { navItems, personal, socials } from "../constants";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 pt-16">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div>
            <p className="eyebrow">Navigation</p>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              {navItems.map((n) => (
                <li key={n.name}>
                  <a href={n.href} className="text-white-50 transition-colors hover:text-pink-100">
                    {n.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Elsewhere</p>
            <div className="mt-4 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="flex-center size-11 rounded-full border border-white/10 text-white-50 transition-all hover:-translate-y-1 hover:border-white/40"
                >
                  <Icon name={s.icon} className="size-5" />
                </a>
              ))}
              <a
                href="#home"
                aria-label="Back to top"
                className="flex-center size-11 rounded-full bg-white text-ink transition-transform hover:-translate-y-1"
              >
                <Icon name="arrowUp" className="size-5" />
              </a>
            </div>
          </div>
        </div>

        <p
          aria-hidden="true"
          className="text-outline mt-16 select-none whitespace-nowrap text-center text-[13vw] font-bold uppercase leading-[0.8] tracking-tight opacity-30"
        >
          {personal.firstName} {personal.lastName}
        </p>

        <div className="flex flex-col items-center justify-between gap-2 border-t border-white/10 py-6 text-sm md:flex-row">
          <p>
            © {new Date().getFullYear()} {personal.firstName} {personal.lastName}. All rights
            reserved.
          </p>
          <p>Built with React, Three.js & GSAP</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
