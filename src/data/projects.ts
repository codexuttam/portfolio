export interface ProjectCaseStudySection {
  title: string;
  content: string;
  bulletPoints?: string[];
}

export interface ProjectItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: string;
  shortDescription: string;
  heroImage: string;
  imageAlt: string;
  accentColor: string;
  accentColorSoft: string;
  technologies: string[];
  caseStudyUrl: string;
  status: "Case Study Available" | "In Active Development" | "Lab Preview";
  year: string;
  role: string;
  liveUrl?: string;
  githubUrl?: string;
  isFlagship?: boolean;
  keyContributions?: string[];
  caseStudy?: {
    overview: string;
    problem: string;
    solution: string;
    architectureNotes: string;
    sections: ProjectCaseStudySection[];
    keyTakeaways: string[];
  };
}

export const projectsData: ProjectItem[] = [
  {
    id: "upchaar-360",
    slug: "upchaar-360",
    number: "01",
    title: "Upchaar 360",
    category: "HealthTech | AI | Full-Stack Engineering",
    shortDescription:
      "Architecting an intelligent healthcare platform that simplifies patient journeys through AI-powered clinical navigation, verified specialist discovery, and seamless healthcare coordination.",
    heroImage: "/images/projects/upchar360.jpg",
    imageAlt: "Upchaar 360 intelligent clinical triage and doctor discovery platform screenshot",
    accentColor: "#C2410C", // Terracotta amber
    accentColorSoft: "rgba(194, 65, 12, 0.12)",
    technologies: [
      "AI Clinical Navigation",
      "Full-Stack Architecture",
      "API Design",
      "PostgreSQL",
      "WebRTC",
      "Next.js",
    ],
    caseStudyUrl: "/work/upchaar-360",
    liveUrl: "https://www.upchar360.com/",
    status: "Case Study Available",
    year: "2026",
    role: "Founding CTO",
    isFlagship: true,
    keyContributions: [
      "End-to-end product and system architecture.",
      "AI-powered clinical triage and intelligent patient navigation.",
      "Patient journey and specialist discovery workflows.",
      "Backend engineering, API architecture and database design.",
      "Technical leadership and product engineering.",
    ],
    caseStudy: {
      overview:
        "Upchaar 360 is an intelligent healthcare platform architected to simplify patient journeys through AI-powered clinical navigation, verified specialist discovery, and seamless healthcare coordination.",
      problem:
        "Navigating modern healthcare is fragmented and complex: patients face high friction identifying the right specialists, navigating clinical triaging, and coordinating appointments and confidential records across disjointed health workflows.",
      solution:
        "Architected an end-to-end digital health platform combining AI-driven clinical navigation, structured patient triage, and verified specialist discovery workflows to streamline patient care from initial inquiry to specialist consultation.",
      architectureNotes:
        "Engineered with a robust backend architecture, scalable database schemas, high-throughput APIs, and strict data confidentiality protocols for real-time patient-provider coordination.",
      sections: [
        {
          title: "End-to-End Product & System Architecture",
          content:
            "Led the comprehensive technical architecture from zero to one as Founding CTO, establishing the platform foundation, data models, and service boundaries to support resilient healthcare workflows.",
          bulletPoints: [
            "Designed end-to-end platform architecture prioritizing reliability, data integrity, and low-latency interaction",
            "Structured modular API services connecting patient portals with specialist scheduling systems",
            "Established engineering standards, CI/CD delivery pipelines, and production infrastructure",
          ],
        },
        {
          title: "AI-Powered Clinical Triage & Intelligent Patient Navigation",
          content:
            "Implemented an intelligent navigation engine that guides patients through structured clinical inquiries and routes them to the appropriate medical domain.",
          bulletPoints: [
            "AI-assisted clinical triage assisting patients in articulating symptoms accurately",
            "Algorithmic specialist matching based on clinical domain, availability, and geographical relevance",
            "Reduced patient friction and administrative triage bottlenecks across outpatient care",
          ],
        },
        {
          title: "Patient Journey & Specialist Discovery Workflows",
          content:
            "Crafted seamless discovery experiences enabling patients to explore verified practitioner credentials, clinical specializations, and real-time scheduling slots.",
          bulletPoints: [
            "Intuitive specialist directory featuring verified credentials and practice domains",
            "Optimized booking and consultation handoff flows minimizing drop-off across patient journeys",
            "Integrated coordination mechanisms keeping patients informed at every stage of care",
          ],
        },
        {
          title: "Backend Engineering, API Architecture & Database Design",
          content:
            "Constructed secure API architectures and relational data schemas designed for transaction safety, auditability, and high concurrency.",
          bulletPoints: [
            "Scalable relational database schemas modeled for clinical records, auditability, and scheduling",
            "RESTful and real-time communication APIs delivering sub-100ms response times for slot availability",
            "Defensive validation and error handling across critical appointment lifecycles",
          ],
        },
        {
          title: "Technical Leadership & Product Engineering",
          content:
            "Directed engineering execution, translating clinical requirements into production-ready software while balancing speed, reliability, and code craft.",
          bulletPoints: [
            "Spearheaded technical roadmap, sprint planning, and architectural reviews across the development cycle",
            "Fostered a product-first engineering culture focused on user empathy, accessibility, and high visual craft",
            "Maintained continuous alignment between business objectives and technical deliverables",
          ],
        },
      ],
      keyTakeaways: [
        "Healthcare systems require extreme architectural clarity where reliability and simplicity directly impact patient outcomes.",
        "Effective clinical navigation pairs intelligent triage algorithms with frictionless patient discovery workflows.",
        "Founding CTO leadership requires balancing deep hands-on code craft with strategic platform scalability.",
      ],
    },
  },
  {
    id: "samadhan-setu",
    slug: "samadhan-setu",
    number: "02",
    title: "Samadhan Setu",
    category: "Civic grievance redressal platform",
    shortDescription:
      "AI-powered Civic Grievance Redressal Platform bridging the gap between citizens and authorities through automated department identification and transparent tracking.",
    heroImage: "/images/projects/samadhan-setu.jpg",
    imageAlt: "Samadhan Setu civic dashboard showing grievance tracking and departmental routing",
    accentColor: "#8C7355", // Warm earth
    accentColorSoft: "rgba(140, 115, 85, 0.12)",
    technologies: [
      "Next.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "PostGIS",
      "NLP",
    ],
    caseStudyUrl: "/work/samadhan-setu",
    liveUrl: "https://samadhan-setu-sandy.vercel.app/",
    status: "Case Study Available",
    year: "2026",
    role: "System Designer & Lead Developer",
    caseStudy: {
      overview:
        "Samadhan Setu AI is an AI-powered Civic Grievance Redressal Platform, designed to bridge the gap between citizens and government authorities.",
      problem:
        "Its central idea is simple: A citizen should not have to understand the government bureaucracy to get a public problem resolved.",
      solution:
        "Instead, they should be able to report a problem, let the platform identify the appropriate department, and track the resolution transparently.",
      architectureNotes:
        "PostgreSQL with PostGIS extensions handles geographic bounding queries. Transformer classification models extract department tags with confidence scoring.",
      sections: [
        {
          title: "Semantic Triage & Categorization",
          content:
            "Trained a lightweight classification pipeline capable of parsing colloquial descriptions, categorizing issues (water infrastructure, road repairs, sanitation, electrical hazards) and routing them to municipal departments.",
          bulletPoints: [
            "Automatic identification of responsible municipal authorities from natural language reports",
            "Geospatial clustering grouping duplicate localized reports into single work orders",
            "Transparent public ledger ensuring real-time auditability across departmental handoffs",
          ],
        },
        {
          title: "Citizen-Centric Interaction",
          content:
            "Designed a streamlined reporting interface that removes administrative jargon and provides immediate tracking identifiers.",
        },
      ],
      keyTakeaways: [
        "Citizens should report problems in plain language without needing to know bureaucratic divisions.",
        "Geospatial and semantic clustering reduces redundant complaints and accelerates resolution.",
      ],
    },
  },
  {
    id: "acad-x",
    slug: "acad-x",
    number: "03",
    title: "AcadX",
    category: "Academic knowledge ecosystem",
    shortDescription:
      "Academic knowledge ecosystem connecting students, faculty, and institutions beyond a conventional AI chatbot or productivity tool.",
    heroImage: "/images/projects/acad-x.png",
    imageAlt: "AcadX academic knowledge ecosystem and collaborative curriculum graph",
    accentColor: "#6F853B", // Muted olive
    accentColorSoft: "rgba(111, 133, 59, 0.12)",
    technologies: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Python",
      "Vector DB",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    caseStudyUrl: "/work/acad-x",
    liveUrl: "https://acad-x-kappa.vercel.app/",
    status: "Case Study Available",
    year: "2026",
    role: "Architect & Lead Full-Stack Engineer",
    caseStudy: {
      overview:
        "AcadX is an academic knowledge ecosystem that connects students, faculty and institutions, moving beyond conventional AI chatbots or student productivity applications.",
      problem:
        "Higher education workflows are disjointed: lecture materials, research repositories, and student-faculty discourse exist in separate silos, hindering deep conceptual learning.",
      solution:
        "Built a unified academic intelligence ecosystem that synthesizes course syllabi, indexes institutional materials, and powers structured academic collaboration.",
      architectureNotes:
        "Vector-indexed knowledge graph hosted alongside FastAPI reasoning microservices, with Next.js App Router providing low-latency document exploration.",
      sections: [
        {
          title: "Connected Knowledge Ecosystem",
          content:
            "Transforms static textbooks, syllabi, and lecture slide decks into an interactive conceptual map shared across academic departments.",
          bulletPoints: [
            "Entity extraction creating persistent conceptual ties between course subjects",
            "Verified faculty feedback channel keeping AI answers grounded in verified course materials",
            "Cross-institution research search and collaborative inquiry rooms",
          ],
        },
      ],
      keyTakeaways: [
        "Academic tools must elevate collaborative insight rather than just summarizing text.",
        "Grounding responses in verified institutional sources prevents hallucinated academic citations.",
      ],
    },
  },
  {
    id: "iona",
    slug: "iona",
    number: "04",
    title: "IONA",
    category: "Client side project",
    shortDescription:
      "Bespoke digital product and interactive client web experience engineered with high-craft frontend interactions and polished typography.",
    heroImage: "/images/projects/iona.jpg",
    imageAlt: "IONA client web experience visual design and interactive interface study",
    accentColor: "#8C7355", // Warm taupe
    accentColorSoft: "rgba(140, 115, 85, 0.12)",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],
    caseStudyUrl: "/work/iona",
    liveUrl: "https://ionaaaaaa.vercel.app/",
    status: "Case Study Available",
    year: "2026",
    role: "Frontend Engineer & UI Craft Specialist",
    caseStudy: {
      overview:
        "IONA is a bespoke side project engineered for a client, focusing on distinct aesthetic identity, responsive performance, and polished interaction design.",
      problem:
        "The client needed a digital presentation that felt elevated, memorable, and visually distinct from cookie-cutter corporate templates.",
      solution:
        "Created an editorial-driven layout utilizing custom typography, micro-interactions, and refined responsive layouts.",
      architectureNotes:
        "Next.js with Tailwind CSS and Framer Motion for smooth GPU-accelerated page transitions and crisp mobile responsiveness.",
      sections: [
        {
          title: "Visual Hierarchy & Micro-Interactions",
          content:
            "Implemented tactile hover dynamics, bespoke scroll animations, and optimized typography hierarchies.",
          bulletPoints: [
            "Tailored typographic rhythm utilizing variable serif and sans-serif pairings",
            "Sub-100ms interaction feedback across mobile touch and desktop cursor states",
            "Lightweight bundle delivery for near-instant first contentful paint",
          ],
        },
      ],
      keyTakeaways: [
        "Subtle motion and restrained typography deliver greater luxury appeal than heavy decorative graphics.",
        "Client requirements are best met by tight feedback cycles on real responsive devices.",
      ],
    },
  },
  {
    id: "aspirant-saathi",
    slug: "aspirant-saathi",
    number: "05",
    title: "Aspirant Saathi",
    category: "AI examination preparation and answer evaluation",
    shortDescription:
      "AI-powered examination preparation and answer evaluation platform delivering automated, examiner-style feedback on student written responses.",
    heroImage: "/images/projects/aspirant-saathi.jpg",
    imageAlt: "Aspirant Saathi answer evaluation rubric and examiner feedback dashboard",
    accentColor: "#5A7A77", // Slate teal
    accentColorSoft: "rgba(90, 122, 119, 0.12)",
    technologies: [
      "Python",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "LLM Evaluation",
      "PostgreSQL",
    ],
    caseStudyUrl: "/work/aspirant-saathi",
    liveUrl: "https://aspirant-saathi.vercel.app/",
    status: "Case Study Available",
    year: "2025",
    role: "Founder & AI Engineer",
    caseStudy: {
      overview:
        "Aspirant Saathi is an AI-powered examination preparation and answer evaluation platform. Its main purpose is to help competitive-exam aspirants improve their answer-writing skills through automated, examiner-style feedback.",
      problem:
        "Unlike a conventional AI chatbot that simply gives answers, Aspirant Saathi evaluates what the student has actually written. Aspirants preparing for high-stakes subjective examinations lack affordable, instant evaluation of their long-form descriptive essays and problem solutions.",
      solution:
        "Built a diagnostic answer evaluation pipeline that grades submitted student answers against official examiner marking rubrics, highlighting missing arguments, factual inaccuracies, and structure deficiencies.",
      architectureNotes:
        "Asynchronous evaluation worker queue with multi-dimensional rubric scoring across factual accuracy, structure, conciseness, and depth.",
      sections: [
        {
          title: "Examiner-Style Rubric Engine",
          content:
            "Constructed criteria-specific evaluation prompts that analyze answers through the lens of a strict human examiner rather than a conversational assistant.",
          bulletPoints: [
            "Granular marks breakdown by question criteria and official marking scheme",
            "Inline structural suggestions pointing out missing introductory frameworks or weak conclusions",
            "Personalized progress tracker recording answer improvement over successive drafts",
          ],
        },
      ],
      keyTakeaways: [
        "Students learn more from critical diagnostic feedback on their own writing than from passive model answers.",
        "Rigorous rubric anchoring prevents generative evaluation models from inflating scores.",
      ],
    },
  },
  {
    id: "quicklearn-ai",
    slug: "quicklearn-ai",
    number: "06",
    title: "Quick Learn AI",
    category: "Interactive LLM learning assistant",
    shortDescription:
      "Interactive LLM learning assistant designed to make technical learning faster, more personalized, and deeply engaging beyond simple chat wrappers.",
    heroImage: "/images/projects/quicklearn-ai.jpg",
    imageAlt: "Quick Learn AI concept graph synthesis and spaced repetition drill engine",
    accentColor: "#778A43", // Olive
    accentColorSoft: "rgba(119, 138, 67, 0.12)",
    technologies: [
      "React",
      "Next.js",
      "Vector DB",
      "Tailwind CSS",
      "Node.js",
      "FastAPI",
    ],
    caseStudyUrl: "/work/quicklearn-ai",
    liveUrl: "https://quicklearn-ai-three.vercel.app/",
    status: "Case Study Available",
    year: "2025",
    role: "Full-Stack AI Developer",
    caseStudy: {
      overview:
        "Quick Learn AI was built around a simple idea: make learning faster, more personalised and easier to understand using Large Language Models.",
      problem:
        "The interesting part is that you weren't just building a ChatGPT wrapper. You were exploring how AI could become an interactive learning assistant that actively tests understanding.",
      solution:
        "Constructed an adaptive educational system combining concept mapping, interactive self-testing, and dynamic difficulty scaling based on student mastery.",
      architectureNotes:
        "Node.js and Python backend with vector embedding index for syllabus concepts and dynamic quiz generation.",
      sections: [
        {
          title: "Interactive Learning Assistant",
          content:
            "Instead of passive answers, the assistant engages learners with Socratic prompts and spaced quizzes to cement conceptual retention.",
          bulletPoints: [
            "Hierarchical breakdown of complex subjects into bite-sized actionable milestones",
            "Adaptive drill generator synthesizing customized questions from technical documentation",
            "Retention progress dashboard visualizing conceptual strengths and revision schedules",
          ],
        },
      ],
      keyTakeaways: [
        "True educational AI requires interactive evaluation loops, not just text generation.",
        "Interactive LLM assistants dramatically accelerate technical onboarding when paired with structured drills.",
      ],
    },
  },
];
