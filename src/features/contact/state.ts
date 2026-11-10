import type { ContactErrors, ContactInput } from "@/lib/validation";

export interface ContactState {
  status: "idle" | "success" | "error";
  message: string;
  errors: ContactErrors;
  values: ContactInput;
}

export const EMPTY_VALUES: ContactInput = { name: "", email: "", message: "" };

export const initialContactState: ContactState = {
  status: "idle",
  message: "",
  errors: {},
  values: EMPTY_VALUES,
};
