import "server-only";
import type { ContactInput } from "./validation";

/**
 * Delivers a contact-form message.
 *
 * - With CONTACT_WEBHOOK_URL set, the message is POSTed there as JSON (Formspree, n8n, Make…).
 * - In development without it, the message is logged so the flow can be tried locally.
 * - In production without it, this throws: a form that silently drops messages is worse
 *   than one that reports a problem.
 */
export async function deliverMessage(message: ContactInput): Promise<void> {
  const webhook = process.env.CONTACT_WEBHOOK_URL;

  if (!webhook) {
    if (process.env.NODE_ENV === "production") {
      throw new Error("CONTACT_WEBHOOK_URL is not configured");
    }
    console.info("[contact] message received (dev only):", message);
    return;
  }

  const response = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(message),
    signal: AbortSignal.timeout(8000),
  });
  if (!response.ok) {
    throw new Error(`Contact webhook responded with ${response.status}`);
  }
}
