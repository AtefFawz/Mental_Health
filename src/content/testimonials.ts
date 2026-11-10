export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  tone: "cream" | "ink";
}

/** Sample testimonials written for this demo. */
export const TESTIMONIALS: readonly Testimonial[] = [
  {
    id: "anna",
    quote:
      "Solus made it so easy to find the right therapist for me. The sessions have truly transformed my mindset, and I feel more in control of my emotions than ever before.",
    author: "Anna R., 32",
    tone: "cream",
  },
  {
    id: "mark",
    quote:
      "I was struggling with stress and anxiety, but the mindfulness programs on Solus have helped me regain balance. I finally feel like I'm prioritizing my mental well-being.",
    author: "Mark S., 41",
    tone: "ink",
  },
  {
    id: "salma",
    quote:
      "Trying the breathing exercise before booking anything made starting feel a lot less scary. It was a gentle first step.",
    author: "Salma M., 27",
    tone: "cream",
  },
];
