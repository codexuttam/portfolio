export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  highlights: string[];
  link?: string;
  isCurrent?: boolean;
}

export interface AchievementItem {
  title: string;
  period: string;
  description: string;
  badge?: string;
}

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
  education: {
    institution: string;
    degree: string;
    period: string;
    cgpa: string;
  };
  availability: {
    status: string;
    label: string;
  };
  experiences: ExperienceItem[];
  achievements: AchievementItem[];
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
    phone: string;
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
  discipline: "Computer Science Engineering (AI/ML)",
  currentFocus: "Agentic Workflows, Voice AI & Production Systems",
  education: {
    institution: "Noida International University",
    degree: "B.Tech in Computer Science & Engineering (AI/ML)",
    period: "Aug. 2024 – Aug. 2028",
    cgpa: "CGPA: 8.5 / 10",
  },
  availability: {
    status: "Available",
    label: "Available for High-Impact Roles & Select Projects",
  },
  experiences: [
    {
      role: "CTO & Co-Founder",
      organization: "Upchaar 360",
      period: "Aug. 2026 – Ongoing",
      isCurrent: true,
      highlights: [
        "Architected and developed the end-to-end technical infrastructure for a patient-doctor platform, bridging patient requirements with healthcare providers through a centralized CRM.",
        "Designed an intelligent doctor-matching system recommending and assigning patients based on disease, availability, and doctor ratings.",
        "Built clinical workflows for patient intake, doctor profile calendars, and post-consultation reviews.",
      ],
    },
    {
      role: "AI Developer Intern",
      organization: "Bitlance Tech Hub",
      period: "June 2026 – Ongoing",
      isCurrent: true,
      highlights: [
        "Engineered autonomous AI agents and end-to-end AI pipelines to automate business workflows and improve operational efficiency.",
        "Built multimodal AI agents for graphic design, social media automation, and voice-based customer interactions.",
        "Developed AI-powered CRM workflows for automated lead management, engagement, and task dispatch.",
      ],
    },
    {
      role: "Full-Stack Developer Intern",
      organization: "QUANTA Innovation",
      period: "Aug. 2025 – Dec. 2025",
      highlights: [
        "Developed and deployed full-stack web applications using React, Node.js, Express, and MongoDB for African markets.",
        "Collaborated with an international engineering team to deliver scalable web platforms and responsive RESTful APIs.",
      ],
    },
  ],
  achievements: [
    {
      title: "2nd Prize — Campus Project Exhibition",
      period: "Feb. 2026",
      description:
        "Awarded 2nd prize for developing Samadhan Setu, an AI-powered civic grievance redressal platform.",
      badge: "Winner",
    },
    {
      title: "Google Campus Ambassador",
      period: "Oct. 2025 – Feb. 2026",
      description:
        "Engaged and mentored campus learners on real-world AI applications, technical communication, and community outreach.",
    },
    {
      title: "Campus Ambassador — HackWithIndia",
      period: "Oct. 2025 – Jan. 2026",
      description:
        "Organized hackathons and technical webinars fostering student innovation and collaborative problem-solving.",
    },
    {
      title: "Top 50 / 500 Finalist — Hackemon Hackathon",
      period: "2025",
      description:
        "Ranked in the top 10% of participants for rapid prototyping and algorithmic problem solving.",
    },
    {
      title: "Open Source Contributor — Social Summer of Code",
      period: "2025",
      description:
        "Collaborated on real-world open-source repositories improving feature development and code quality.",
    },
  ],
  about: {
    headline: "Curious by nature. Builder by choice.",
    narrative: [
      "I'm a computer science student at Noida International University specializing in AI/ML and full-stack engineering. I like working across the whole stack — interfaces, APIs, databases, deployment, and the small decisions that make a product feel right.",
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
      "MongoDB",
      "LangChain",
      "Three.js",
      "Docker",
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
    phone: "+91 8318768905",
    email: "uttamrajsingh423@gmail.com",
    github: "https://github.com/codexuttam",
    linkedin: "https://linkedin.com/in/contactuttamraj",
    resumeUrl: "/resume.pdf",
    note: "Official curriculum vitae synchronized with Uttam (2).pdf.",
  },
};
