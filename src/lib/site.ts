/** Single source of truth for site-wide metadata and contact details. */
export const site = {
  name: "Solus",
  tagline: "Support for your mental well-being",
  description:
    "Solus connects you with licensed therapists, counselors and wellness coaches — plus simple tools like guided breathing and a private mood check-in.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  author: {
    name: "Atef Fawzy",
    github: "https://github.com/AtefFawz",
    linkedin: "https://www.linkedin.com/in/atef-fawzy-b664b630a",
  },
  contact: {
    email: "ateffawzy.dev@gmail.com",
    location: "Alexandria, Egypt",
    responseTime: "12 hours",
  },
} as const;
