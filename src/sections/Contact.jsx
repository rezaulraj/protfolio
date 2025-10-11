import React from "react";
import TitleHeader from "../components/TitleHeader";
import ContactForm from "../components/ContactForm";
import ContactExpriences from "../components/ContactExpriences";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex items-center justify-center relative md:p-0 px-5"
    >
      <div className="w-full h-full container md:my-40 my-20">
        <TitleHeader
          title={"Contact Me"}
          text={"Let's collaborate on tailored, sustainable solutions"}
          number={"05"}
        />
        <div className="mt-10">
          <div className="grid grid-cols-12">
            <div className="md:col-span-5 col-span-12">
              <ContactForm />
            </div>
            <div className="md:col-span-7 col-span-12">
              <div className="w-full h-full md:m-0 -mt-32">
                <ContactExpriences />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
