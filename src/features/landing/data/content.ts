export const supportOptions = [
  {
    number: "01",
    title: "Mindfulness & reflection",
    description:
      "Explore gentle practices that make room for a pause, self-awareness, and a little more intention in your day.",
    tone: "lavender",
    tag: "Everyday practice",
  },
  {
    number: "02",
    title: "Professional support",
    description:
      "Learn about different forms of support and the questions you may want to ask when choosing a qualified professional.",
    tone: "peach",
    tag: "Explore your options",
  },
  {
    number: "03",
    title: "Wellbeing habits",
    description:
      "Find approachable ideas for building routines around rest, connection, boundaries, and balance.",
    tone: "blue",
    tag: "Small steps",
  },
] as const;

export const approachSteps = [
  {
    number: "01",
    title: "Start with what matters to you",
    description:
      "Take a moment to understand what kind of information or support you are looking for. There is no single right starting point.",
  },
  {
    number: "02",
    title: "Explore at your own pace",
    description:
      "Browse the educational resources and learn about different support options without pressure to make a decision straight away.",
  },
  {
    number: "03",
    title: "Choose a next step",
    description:
      "Use what you learn to decide whether a personal wellbeing practice or a conversation with a qualified professional is right for you.",
  },
] as const;

export const resources = [
  {
    number: "A",
    category: "Pause",
    title: "Make space for a reset",
    description:
      "A short invitation to step away from the rush, notice your surroundings, and give yourself a moment before moving on.",
    details:
      "Try choosing one small pause in your day: put your phone aside, relax your shoulders, and notice three things around you. Keep it simple and adapt it to what feels comfortable.",
    tone: "lavender",
  },
  {
    number: "B",
    category: "Reflect",
    title: "Put thoughts into words",
    description:
      "A gentle journaling prompt can help you organise what is on your mind without needing to solve everything at once.",
    details:
      "Start with one sentence: “Something I would like to give attention to today is…” Write privately, skip anything that does not feel useful, and stop whenever you want.",
    tone: "peach",
  },
  {
    number: "C",
    category: "Connect",
    title: "Reach out to someone you trust",
    description:
      "A small, honest conversation can be a meaningful way to feel less alone with a difficult day.",
    details:
      "You could send a simple message such as “Could we talk for a few minutes when you have time?” Choose someone who respects your boundaries and makes you feel safe.",
    tone: "blue",
  },
] as const;

export const faqs = [
  {
    question: "What is Solus?",
    answer:
      "Solus is a student-built educational website concept. It brings together introductory information about wellbeing, professional support options, and everyday reflection resources.",
  },
  {
    question: "Can I book a therapy session through this website?",
    answer:
      "Not currently. This version is a front-end project and does not include a booking system, therapist directory, or connected clinical service.",
  },
  {
    question: "Does Solus provide diagnosis or treatment?",
    answer:
      "No. Solus does not diagnose conditions, provide treatment, or replace advice from a qualified healthcare professional. The content is general educational information only.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "No account is required to explore this project. It does not ask visitors to submit personal health information.",
  },
  {
    question: "What should I do if I need urgent help?",
    answer:
      "This website is not monitored and cannot provide emergency assistance. Contact local emergency services or a trusted person who can help you access immediate, in-person support.",
  },
] as const;
