export const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "toolkit", label: "Toolkit" },
  { id: "therapists", label: "Therapists" },
  { id: "resources", label: "Resources" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof NAV_ITEMS)[number]["id"];

/** Stable reference so hooks depending on it don't re-subscribe on every render. */
export const SECTION_IDS: readonly string[] = NAV_ITEMS.map((item) => item.id);
