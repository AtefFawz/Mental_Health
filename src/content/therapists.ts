export const SPECIALTIES = [
  "Anxiety",
  "Depression",
  "Stress & burnout",
  "Relationships",
  "Sleep",
] as const;

export type Specialty = (typeof SPECIALTIES)[number];
export type SessionFormat = "Online" | "In person";
export type Accent = "sun" | "mint" | "blush" | "cream";

export interface Therapist {
  id: string;
  name: string;
  role: string;
  bio: string;
  specialties: readonly Specialty[];
  languages: readonly string[];
  formats: readonly SessionFormat[];
  accent: Accent;
}

/** Illustrative profiles only — Solus is a portfolio project and lists no real clinicians. */
export const THERAPISTS: readonly Therapist[] = [
  {
    id: "layla-hassan",
    name: "Dr. Layla Hassan",
    role: "Clinical psychologist",
    bio: "Helps adults untangle persistent worry with practical, evidence-based techniques.",
    specialties: ["Anxiety", "Stress & burnout"],
    languages: ["Arabic", "English"],
    formats: ["Online", "In person"],
    accent: "mint",
  },
  {
    id: "omar-khalil",
    name: "Omar Khalil",
    role: "Licensed counselor",
    bio: "A warm, steady space to talk through low mood, big changes and difficult seasons.",
    specialties: ["Depression", "Relationships"],
    languages: ["Arabic", "English"],
    formats: ["Online"],
    accent: "sun",
  },
  {
    id: "nour-adel",
    name: "Nour Adel",
    role: "Wellness coach",
    bio: "Builds sustainable routines for sleep, energy and healthier boundaries at work.",
    specialties: ["Sleep", "Stress & burnout"],
    languages: ["Arabic", "English", "French"],
    formats: ["Online"],
    accent: "blush",
  },
  {
    id: "karim-mansour",
    name: "Dr. Karim Mansour",
    role: "Psychotherapist",
    bio: "Supports individuals and couples in communicating clearly and rebuilding trust.",
    specialties: ["Relationships", "Anxiety", "Depression"],
    languages: ["Arabic", "English"],
    formats: ["In person", "Online"],
    accent: "cream",
  },
];
