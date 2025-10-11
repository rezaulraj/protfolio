import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as Z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const ContactForm = () => {
  const initalValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const contactFormSchema = Z.object({
    name: Z.string().nonempty("Name is Required"),
    email: Z.string().email("Invalid Email").nonempty("Email is Required"),
    subject: Z.string().nonempty("Subject is Required"),
    message: Z.string().nonempty("Message is Required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initalValues,
    resolver: zodResolver(contactFormSchema),
  });

  const [loading,setLoading]=useState(false)
  
  const onSubmit = async (data) => {
    console.log(data);
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);
  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full text-[#a7a7a7] flex flex-col gap-7"
      >
        <div className="">
          <label htmlFor="name" className="label">
            Name
          </label>
          <input
            {...register("name")}
            type="text"
            id="name"
            placeholder="Jone Deo"
            className="input"
          />
          {errors?.name && (
            <span className="text-red-500">{errors?.name?.message}</span>
          )}
        </div>
        <div className="">
          <label htmlFor="email" className="label">
            Email Address
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            placeholder="hi@gmail.com"
            className="input"
          />
          {errors?.email && (
            <span className="text-red-500">{errors?.email?.message}</span>
          )}
        </div>
        <div className="">
          <label htmlFor="subject" className="label">
            Subject
          </label>
          <input
            {...register("subject")}
            type="text"
            id="subject"
            placeholder="Why Contact Me"
            className="input"
          />
          {errors?.subject && (
            <span className="text-red-500">{errors?.subject?.message}</span>
          )}
        </div>
        <div className="">
          <label htmlFor="message" className="label">
            Message
          </label>
          <textarea
            {...register("message")}
            type="text"
            id="message"
            placeholder="Say Hello"
            rows={"5"}
            className="input"
          />
          {errors?.message && (
            <span className="text-red-500">{errors?.message?.message}</span>
          )}
        </div>
        <button
          type="submit"
          className="w-full py-4 bg-blue-50 text-white-50 font-semibold rounded-md hover:bg-blue-600 transition-all duration-300 cursor-pointer"
        >
          Send Inquiry
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
