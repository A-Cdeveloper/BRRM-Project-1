"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/TextArea";
import { FormData } from "@/types";
import { contactSchema } from "@/types/formular";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/app/actions/sendEmail";
import { useState } from "react";

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      setSubmitStatus({ type: null, message: "" });

      const result = await sendEmail(data);

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: result.message,
        });
        reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message,
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again.",
      });
    }
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
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
          disabled={isSubmitting}
          className="w-full lg:col-span-2 xl:col-span-1"
        >
          {isSubmitting ? "Sending..." : "SEND A MESSAGE"}
        </Button>
      </form>

      {/* Status Messages */}
      {submitStatus.type && (
        <div
          className={`mt-4 p-3 rounded-md ${
            submitStatus.type === "success"
              ? "bg-green-100 border border-green-400 text-green-700"
              : "bg-red-100 border border-red-400 text-red-700"
          }`}
        >
          {submitStatus.message}
        </div>
      )}
    </div>
  );
}
