"use client";

import { useActionState, type ReactNode } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { CONTACT_LIMITS } from "@/lib/validation";
import { sendMessage } from "./actions";
import { initialContactState } from "./state";

const fieldClass =
  "w-full rounded-2xl border bg-white px-4 py-3 text-base transition-colors placeholder:text-ink/40 focus:border-ink";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" disabled={pending} aria-busy={pending}>
      {pending ? "Sending…" : "Send message"}
    </Button>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block font-semibold">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-sm font-medium text-danger">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(sendMessage, initialContactState);
  const { errors, values } = state;

  const describe = (field: keyof typeof errors) => ({
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": errors[field] ? `contact-${field}-error` : undefined,
  });

  return (
    <form action={formAction} noValidate className="flex flex-col gap-5">
      <Field id="contact-name" label="Name" error={errors.name}>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          maxLength={CONTACT_LIMITS.nameMax}
          defaultValue={values.name}
          className={cn(fieldClass, errors.name ? "border-danger" : "border-ink/20")}
          {...describe("name")}
        />
      </Field>

      <Field id="contact-email" label="Email" error={errors.email}>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          defaultValue={values.email}
          className={cn(fieldClass, errors.email ? "border-danger" : "border-ink/20")}
          {...describe("email")}
        />
      </Field>

      <Field id="contact-message" label="Message" error={errors.message}>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          maxLength={CONTACT_LIMITS.messageMax}
          defaultValue={values.message}
          className={cn(fieldClass, "resize-y", errors.message ? "border-danger" : "border-ink/20")}
          {...describe("message")}
        />
      </Field>

      {/* Honeypot — hidden from people and assistive tech, tempting to bots. */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <SubmitButton />
        <p
          role={state.status === "error" ? "alert" : "status"}
          className={cn(
            "font-medium",
            state.status === "error" && "text-danger",
            state.status === "success" && "text-ink-700",
          )}
        >
          {state.message}
        </p>
      </div>
    </form>
  );
}
