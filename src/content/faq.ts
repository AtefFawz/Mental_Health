export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: readonly FaqItem[] = [
  {
    question: "How do I book a therapy session?",
    answer:
      "Browse the therapist directory, pick someone whose focus fits what you're going through, and send a session request. You'll hear back with available times.",
  },
  {
    question: "Are online sessions available?",
    answer:
      "Yes. Most professionals offer secure video sessions, and some also see clients in person. Each profile lists the formats on offer.",
  },
  {
    question: "What's the difference between therapy and coaching?",
    answer:
      "Therapy is delivered by licensed clinicians and addresses mental-health conditions and emotional pain. Coaching is goal-focused support for habits, routines and stress management — it isn't a replacement for clinical care.",
  },
  {
    question: "Do I need a subscription to access services?",
    answer:
      "The toolkit — breathing exercises and the mood check-in — is free and needs no account. Sessions with professionals are booked individually.",
  },
  {
    question: "Can I switch therapists if I don't feel the right connection?",
    answer:
      "Absolutely. A good fit matters, and changing therapist is completely normal. Just send a new request.",
  },
  {
    question: "Is my information and session history kept confidential?",
    answer:
      "Privacy comes first. The mood check-in is stored only on your own device, and nothing you enter in the toolkit is sent to a server.",
  },
];
