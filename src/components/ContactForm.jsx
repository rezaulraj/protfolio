import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Icon from "./Icons";
import { personal } from "../constants";

const contactFormSchema = Z.object({
  name: Z.string().trim().min(1, "Name is required"),
  email: Z.string().trim().min(1, "Email is required").email("Invalid email"),
  subject: Z.string().trim().min(1, "Subject is required"),
  message: Z.string().trim().min(10, "Message should be at least 10 characters"),
});

const fields = [
  { id: "name", label: "Your name", placeholder: "John Doe", type: "text", half: true },
  { id: "email", label: "Email", placeholder: "john@company.com", type: "email", half: true },
  { id: "subject", label: "Subject", placeholder: "Project, job offer, collaboration…", type: "text" },
];

const ContactForm = () => {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: { name: "", email: "", subject: "", message: "" },
    resolver: zodResolver(contactFormSchema),
  });

  // No backend yet: open the visitor's email app with everything pre-filled.
  const onSubmit = async ({ name, email, subject, message }) => {
    const body = `${message}\n\n— ${name} (${email})`;
    window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid grid-cols-2 gap-5">
      {fields.map((f) => (
        <div key={f.id} className={f.half ? "col-span-2 sm:col-span-1" : "col-span-2"}>
          <label htmlFor={f.id} className="label">
            {f.label}
          </label>
          <input
            {...register(f.id)}
            id={f.id}
            type={f.type}
            placeholder={f.placeholder}
            className="input"
            aria-invalid={!!errors[f.id]}
          />
          {errors[f.id] && <p className="mt-1.5 text-sm text-pink-100">{errors[f.id].message}</p>}
        </div>
      ))}
      <div className="col-span-2">
        <label htmlFor="message" className="label">
          Message
        </label>
        <textarea
          {...register("message")}
          id="message"
          rows={5}
          placeholder="Tell me a little about what you have in mind…"
          className="input resize-none"
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className="mt-1.5 text-sm text-pink-100">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary col-span-2 justify-center py-4 disabled:opacity-60"
      >
        <span>{isSubmitting ? "Sending…" : "Send message"}</span>
        <Icon name="send" className="size-4" />
      </button>
      {sent && (
        <p className="col-span-2 text-center text-sm text-emerald-300">
          Your email app should open now — thanks for reaching out!
        </p>
      )}
    </form>
  );
};

export default ContactForm;
