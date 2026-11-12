import TitleHeader from "../components/TitleHeader";
import ContactForm from "../components/ContactForm";
import ContactExpriences from "../components/ContactExpriences";
import Icon from "../components/Icons";
import { personal } from "../constants";

const info = [
  { icon: "mail", label: "Email", value: personal.email, href: `mailto:${personal.email}` },
  { icon: "phone", label: "Phone", value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, "")}` },
  { icon: "pin", label: "Location", value: `${personal.location}, ${personal.country}` },
  { icon: "linkedin", label: "LinkedIn", value: "in/md-rezaul-karim", href: personal.linkedin },
];

const Contact = () => {
  return (
    <section id="contact" className="relative overflow-x-clip py-24 md:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 -z-0 size-[700px] -translate-x-1/2 rounded-full bg-violet/20 blur-[180px]"
      />
      <div className="wrap relative">
        <TitleHeader title="Let's" accent="talk" text="Get in touch" number="06" />

        <div className="mt-14 grid grid-cols-1 gap-5 md:mt-20 lg:grid-cols-12">
          <div className="flex flex-col gap-5 lg:col-span-5">
            <div className="reveal card p-7 md:p-9">
              <h3 className="text-3xl font-medium leading-tight text-white md:text-4xl">
                Have a project or a role in mind?{" "}
                <span className="font-serif italic text-gradient">Let's build it.</span>
              </h3>
              <p className="mt-4">
                I usually reply within a day. Send a message and tell me what you're working on.
              </p>
              <ul className="mt-8 divide-y divide-white/10">
                {info.map((i) => {
                  const Tag = i.href ? "a" : "div";
                  return (
                    <li key={i.label}>
                      <Tag
                        {...(i.href && {
                          href: i.href,
                          target: i.href.startsWith("http") ? "_blank" : undefined,
                          rel: "noreferrer",
                        })}
                        className="group flex items-center gap-4 py-4"
                      >
                        <span className="flex-center size-11 shrink-0 rounded-xl bg-white/5 text-white">
                          <Icon name={i.icon} className="size-5" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block font-mono text-xs uppercase tracking-widest">
                            {i.label}
                          </span>
                          <span className="block truncate text-white-50 transition-colors group-hover:text-white">
                            {i.value}
                          </span>
                        </span>
                        {i.href && (
                          <Icon
                            name="arrowUpRight"
                            className="size-5 shrink-0 text-white/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                          />
                        )}
                      </Tag>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="reveal card h-80 w-full sm:h-96 lg:h-auto lg:min-h-80 lg:flex-1">
              <ContactExpriences />
            </div>
          </div>

          <div className="reveal card p-7 md:p-9 lg:col-span-7">
            <p className="eyebrow mb-8">Send a message</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
