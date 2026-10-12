export interface ProfileData {
  name: string;
  wordmark: string;
  role: string;
  headlinePrefix: string;
  headlineEmphasis: string;
  bioIntro: string;
  location: string;
  discipline: string;
  currentFocus: string;
  availability: {
    status: string;
    label: string;
  };
  about: {
    headline: string;
    narrative: string[];
    technologies: string[];
    principles: {
      title: string;
      desc: string;
    }[];
  };
  focusSection: {
    headline: string;
    copy: string;
    areas: string[];
  };
  contact: {
    headlinePrefix: string;
    headlineEmphasis: string;
    copy: string;
    email: string;
    github: string;
    linkedin: string;
    resumeUrl: string;
    note: string;
  };
}

export const profileData: ProfileData = {
  name: "Uttamraj Singh",
  wordmark: "uttam.",
  role: "COMPUTER SCIENCE • AI/ML & FULL-STACK SYSTEMS",
  headlinePrefix: "Making ideas feel",
  headlineEmphasis: "real.",
  bioIntro:
    "I'm Uttamraj Singh. I build software and AI-powered products — from the first rough idea to the details that make them useful.",
  location: "India / Available Globally",
  discipline: "Computer Science Engineering",
  currentFocus: "Agentic Workflows, Voice AI & Production Systems",
  availability: {
    status: "Available",
    label: "Available for Summer 2026 Internships & Select Projects",
  },
  about: {
    headline: "Curious by nature. Builder by choice.",
    narrative: [
      "I'm a computer science student focused on AI/ML and full-stack engineering. I like working across the whole stack — interfaces, APIs, databases, deployment, and the small decisions that make a product feel right.",
      "The interesting part isn't adding AI to everything. It's finding where it genuinely helps, then doing the engineering to make it work.",
      "I believe software is most powerful when theoretical intelligence is paired with rigorous backend systems and tactile, human-centered interfaces.",
    ],
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Prisma",
      "Applied AI",
      "Agent workflows",
    ],
    principles: [
      {
        title: "First-Principles Engineering",
        desc: "Designing system architectures from fundamental requirements rather than piling hype frameworks.",
      },
      {
        title: "Tactile Craft & Interaction",
        desc: "User experiences should feel crisp, responsive, and natural without unnecessary decorative noise.",
      },
      {
        title: "Production Resilience",
        desc: "Handling edge cases, validation boundaries, and latency budgets before proclaiming a feature done.",
      },
    ],
  },
  focusSection: {
    headline: "Less demo. More dependable software.",
    copy: "Currently exploring AI agents, voice workflows, and product systems that are genuinely useful beyond the first impressive prototype.",
    areas: [
      "Bidirectional voice streaming pipelines (<600ms latency)",
      "Multi-agent task decomposition & deterministic structured outputs",
      "Stateful civic and healthcare workflow automation",
      "End-to-end full-stack architectures with tight database contracts",
    ],
  },
  contact: {
    headlinePrefix: "Have a good",
    headlineEmphasis: "one.",
    copy: "Whether you have an ambitious product idea, a challenging engineering problem in AI/ML systems, or an internship opportunity — my inbox is always open.",
    // NOTE FOR USER: Configurable placeholders below. Replace with your actual credentials.
    email: "uttamrajsingh423@gmail.com",
    github: "https://github.com/codexuttam",
    linkedin: "https://linkedin.com/in/uttamraj-singh-placeholder",
    resumeUrl: "/resume.pdf",
    note: "Values above are configured in src/data/profile.ts. Replace placeholder email, LinkedIn, and resume with your actual links.",
  },
};
