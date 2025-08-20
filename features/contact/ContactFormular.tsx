"use client";

import { startTransition, useActionState } from "react";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/TextArea";
import { FormData } from "@/types";
import { contactSchema } from "@/types/formular";
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
      <form
        onSubmit={onSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-1.5 w-full"
      >
        <Input
          type="text"
          placeholder="Name & Surname*"
          register={register("name")}
          error={errors.name}
        />

        <Input
          type="text"
          placeholder="Company Name"
          register={register("company")}
          error={errors.company}
        />

        <Input
          type="email"
          placeholder="Email address*"
          register={register("email")}
          error={errors.email}
        />

        <Input
          type="phone"
          placeholder="Phone number"
          register={register("phone")}
          error={errors.phone}
        />

        <Textarea
          placeholder="Your message*"
          className="md:col-span-2"
          register={register("message")}
          error={errors.message}
          rows={8}
        />

        <Button
          disabled={isSubmitting || isPending}
          className="w-full lg:col-span-2 xl:col-span-1"
        >
          {isPending ? "Sending..." : "SEND A MESSAGE"}
        </Button>
      </form>

      {state.message && (
        <div
          className={`text-sm ${
            state.success ? "bg-primary text-secondary" : "bg-accent text-white"
          } mt-2 px-1.5 py-1`}
        >
          {state.message}
        </div>
      )}
    </div>
  );
}
