import { describe, expect, it } from "vitest";
import { parseContactForm } from "./validation";

const valid = {
  name: "Atef Fawzy",
  email: "atef@example.com",
  message: "I would like to book a first session.",
};

describe("parseContactForm", () => {
  it("accepts a valid submission and trims whitespace", () => {
    const result = parseContactForm({ ...valid, name: "  Atef Fawzy  " });
    expect(result.ok).toBe(true);
    expect(result.values.name).toBe("Atef Fawzy");
    expect(result.errors).toEqual({});
  });

  it("reports every invalid field at once", () => {
    const result = parseContactForm({ name: "A", email: "nope", message: "short" });
    expect(result.ok).toBe(false);
    expect(Object.keys(result.errors).sort()).toEqual(["email", "message", "name"]);
  });

  it.each(["", "a@b", "a b@c.com", "@c.com"])("rejects invalid email %j", (email) => {
    expect(parseContactForm({ ...valid, email }).errors.email).toBeDefined();
  });

  it("enforces the maximum message length", () => {
    const result = parseContactForm({ ...valid, message: "x".repeat(2001) });
    expect(result.errors.message).toMatch(/2000/);
  });

  it("works with FormData and ignores non-string entries", () => {
    const form = new FormData();
    form.set("name", valid.name);
    form.set("email", valid.email);
    form.set("message", valid.message);
    expect(parseContactForm(form).ok).toBe(true);
    expect(parseContactForm({ name: 42, email: null, message: undefined }).ok).toBe(false);
  });
});
