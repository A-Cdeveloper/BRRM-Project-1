"use client";

import { startTransition, useActionState } from "react";

import { Button, Input, TextArea } from "@/components/ui";
import { FormData, contactSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { sendEmail } from "./actions/sendEmail";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendEmail, {
    success: false,
    message: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = handleSubmit((data) => {
    startTransition(() => {
      formAction(data);
      if (state.success) reset();
    });
  });

  return (
    <div className="w-full">
      <h2 id="contact-title" className="sr-only">
        Contact Us
      </h2>
      <form
        onSubmit={onSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-1.5 w-full"
        role="form"
        aria-labelledby="contact-title"
      >
        <Input
          type="text"
          placeholder="Name & Surname*"
          register={register("name")}
          error={errors.name}
          aria-label="Your name and surname"
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />

        <Input
          type="text"
          placeholder="Company Name"
          register={register("company")}
          error={errors.company}
          aria-label="Your company name"
          aria-describedby={errors.company ? "company-error" : undefined}
        />

        <Input
          type="email"
          placeholder="Email address*"
          register={register("email")}
          error={errors.email}
          aria-label="Your email address"
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />

        <Input
          type="phone"
          placeholder="Phone number"
          register={register("phone")}
          error={errors.phone}
          aria-label="Your phone number"
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />

        <TextArea
          placeholder="Your message*"
          className="md:col-span-2"
          register={register("message")}
          error={errors.message}
          rows={8}
          aria-label="Your message"
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />

        <Button
          disabled={isSubmitting || isPending}
          className="w-full lg:col-span-2 xl:col-span-1"
          aria-label="Send your message"
          aria-describedby="submit-help"
        >
          {isPending ? "Sending..." : "SEND A MESSAGE"}
        </Button>

        <div id="submit-help" className="sr-only">
          Click to submit your contact form
        </div>
      </form>

      {state.message && (
        <div
          className={`text-sm ${
            state.success ? "bg-primary text-secondary" : "bg-accent text-white"
          } mt-2 px-1.5 py-1`}
          role="alert"
          aria-live="polite"
        >
          {state.message}
        </div>
      )}
    </div>
  );
}
