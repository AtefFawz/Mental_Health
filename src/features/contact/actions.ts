"use server";

import { deliverMessage } from "@/lib/mailer";
import { parseContactForm } from "@/lib/validation";
import { EMPTY_VALUES, type ContactState } from "./state";

export async function sendMessage(
  _previous: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot: real people never see this field, bots fill it. Pretend success, deliver nothing.
  if (formData.get("company")) {
    return { status: "success", message: "Thanks — your message is on its way.", errors: {}, values: EMPTY_VALUES };
  }

  const { ok, values, errors } = parseContactForm(formData);
  if (!ok) {
    return { status: "error", message: "Please fix the highlighted fields.", errors, values };
  }

  try {
    await deliverMessage(values);
  } catch (error) {
    console.error("[contact] delivery failed:", error);
    return {
      status: "error",
      message: "We couldn't send your message just now. Please try again in a moment.",
      errors: {},
      values,
    };
  }

  return {
    status: "success",
    message: "Thanks — your message is on its way. We'll get back to you soon.",
    errors: {},
    values: EMPTY_VALUES,
  };
}
