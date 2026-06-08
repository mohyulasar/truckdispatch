"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import {
  EQUIPMENT_OPTIONS,
  HEARD_ABOUT_OPTIONS,
  SITE,
} from "@/lib/constants";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";

const TRUCK_COUNT_OPTIONS = ["1", "2-3", "4-10", "11-20", "20+"];

export function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(data: ContactFormData) {
    setSubmitStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error ?? "Something went wrong. Please try again.");
      }

      setSubmitStatus("success");
      reset();
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
    }
  }

  if (submitStatus === "success") {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-center sm:p-8">
        <h3 className="text-xl font-bold text-green-800">Thank You!</h3>
        <p className="mt-2 text-base text-green-700">
          We received your quote request and will reach out within 24 hours.
        </p>
        <p className="mt-4 text-sm text-green-600">
          Need immediate help? Call us at{" "}
          <a href={SITE.phoneHref} className="font-semibold underline">
            {SITE.phone}
          </a>
        </p>
        <Button
          className="mt-6"
          variant="secondary"
          onClick={() => setSubmitStatus("idle")}
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          label="Full Name"
          required
          {...register("name")}
          error={errors.name?.message}
          autoComplete="name"
        />
        <Input
          label="Company Name"
          required
          {...register("companyName")}
          error={errors.companyName?.message}
          autoComplete="organization"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          label="Email"
          type="email"
          required
          {...register("email")}
          error={errors.email?.message}
          autoComplete="email"
        />
        <Input
          label="Phone"
          type="tel"
          required
          {...register("phone")}
          error={errors.phone?.message}
          autoComplete="tel"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Select
          label="Number of Trucks"
          required
          options={TRUCK_COUNT_OPTIONS}
          placeholder="Select fleet size"
          {...register("truckCount")}
          error={errors.truckCount?.message}
        />
        <Select
          label="Equipment Type"
          required
          options={[...EQUIPMENT_OPTIONS]}
          placeholder="Select equipment"
          {...register("equipmentType")}
          error={errors.equipmentType?.message}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          label="MC Number (optional)"
          {...register("mcNumber")}
          error={errors.mcNumber?.message}
          placeholder="MC-123456"
        />
        <Select
          label="How did you hear about us?"
          options={[...HEARD_ABOUT_OPTIONS]}
          placeholder="Select an option"
          {...register("heardAbout")}
          error={errors.heardAbout?.message}
        />
      </div>

      <Input
        label="Operating Region / Preferred Lanes"
        required
        {...register("operatingRegion")}
        error={errors.operatingRegion?.message}
        placeholder="e.g., Southeast regional, TX-CA, Midwest OTR"
      />

      <Textarea
        label="Tell us about your dispatch needs"
        required
        rows={4}
        {...register("message")}
        error={errors.message?.message}
        placeholder="Current challenges, weekly load volume, rate expectations..."
      />

      {/* Honeypot spam field */}
      <input
        type="text"
        {...register("website")}
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      {submitStatus === "error" && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMessage}
        </p>
      )}

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={submitStatus === "loading"}>
        {submitStatus === "loading" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Submitting...
          </>
        ) : (
          "Request Free Quote"
        )}
      </Button>
    </form>
  );
}
