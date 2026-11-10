export interface ContactInput {
  name: string;
  email: string;
  message: string;
}

export type ContactErrors = Partial<Record<keyof ContactInput, string>>;

export interface ContactParseResult {
  ok: boolean;
  values: ContactInput;
  errors: ContactErrors;
}

export const CONTACT_LIMITS = {
  nameMin: 2,
  nameMax: 80,
  messageMin: 10,
  messageMax: 2000,
} as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function readText(source: FormData | Record<string, unknown>, key: string): string {
  const raw = source instanceof FormData ? source.get(key) : source[key];
  return typeof raw === "string" ? raw.trim() : "";
}

/** Validates the contact form. Shared by the client UI and the server action. */
export function parseContactForm(source: FormData | Record<string, unknown>): ContactParseResult {
  const values: ContactInput = {
    name: readText(source, "name"),
    email: readText(source, "email"),
    message: readText(source, "message"),
  };
  const errors: ContactErrors = {};

  if (values.name.length < CONTACT_LIMITS.nameMin) {
    errors.name = `Please enter your name (at least ${CONTACT_LIMITS.nameMin} characters).`;
  } else if (values.name.length > CONTACT_LIMITS.nameMax) {
    errors.name = `Name must be ${CONTACT_LIMITS.nameMax} characters or fewer.`;
  }

  if (!EMAIL_PATTERN.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (values.message.length < CONTACT_LIMITS.messageMin) {
    errors.message = `Tell us a little more (at least ${CONTACT_LIMITS.messageMin} characters).`;
  } else if (values.message.length > CONTACT_LIMITS.messageMax) {
    errors.message = `Message must be ${CONTACT_LIMITS.messageMax} characters or fewer.`;
  }

  return { ok: Object.keys(errors).length === 0, values, errors };
}
