import React from "react";

const TestimoialCard = ({ testimonial }) => {
  return (
    <div className="col-span-1 bg-black-200 group testmonial-card rounded-xl">
      <div className="group-hover:bg-pink-200 transition-all duration-700 p-6 rounded-xl">
        <div className="flex items-center justify-between">
          <img
            src={testimonial.imgPath}
            alt="cover"
            className="md:w-36 md:h-36 h-24 w-24 border border-transparent group-hover:border-white rounded-full group-hover:-translate-y-2 group-hover:-translate-x-2 transition-all duration-700 "
          />
          <img
            src="/images/quote.png"
            alt="quote"
            className="md:w-20 md:h-28 w-14 h-14 group-hover:mix-blend-screen transition-all duration-700"
          />
        </div>
        <div className="mt-10">
          <p className="md:text-2xl font-light group-hover:text-black-200">{testimonial.review}</p>
        </div>
        <div className="flex md:flex-row flex-col md:items-center justify-between md:mt-20 mt-10">
          <div className="">
            <h1 className="text-blue-50 md:text-3xl text-lg font-medium group-hover:text-black-100">
              {testimonial.name}
            </h1>
            <p className="md:text-xl text-sm opacity-70 font-light group-hover:text-black-200">
              {testimonial.pos}
            </p>
          </div>
          <div className="flex items-center gap-3 md:mt-0 mt-5">
            <img src="/images/x.svg" alt="x" className="md:size-12 size-5 group-hover:mix-blend-luminosity" />
            <img src="/images/fb.svg" alt="fb" className="md:size-12 size-5 group-hover:mix-blend-luminosity" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimoialCard;
