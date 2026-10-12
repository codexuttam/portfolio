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
    id: "bitlance-ai",
    slug: "bitlance-ai",
    number: "01",
    title: "Bitlance AI",
    category: "AI content systems and automation",
    shortDescription:
      "Autonomous multi-agent orchestration engine delivering structured, brand-aligned creative workflows and verifiable publication pipelines.",
    heroImage: "/images/projects/bitlance-ai.svg",
    imageAlt: "Bitlance AI multi-agent orchestration architecture and editorial interface visual",
    accentColor: "#778A43", // Muted olive
    accentColorSoft: "rgba(119, 138, 67, 0.12)",
    technologies: [
      "Python",
      "FastAPI",
      "Next.js",
      "LangChain",
      "PostgreSQL",
      "Redis",
      "Tailwind CSS",
    ],
    caseStudyUrl: "/work/bitlance-ai",
    status: "Case Study Available",
    year: "2025 – 2026",
    role: "Full-Stack Engineer & AI Architect",
    caseStudy: {
      overview:
        "Bitlance AI is an agentic content infrastructure designed to bridge the gap between open-ended LLM capabilities and deterministic production standards. Instead of single-turn prompting, it utilizes a coordinated graph of specialized agents that draft, evaluate, verify citations, and format deliverables into structured schemas.",
      problem:
        "Generative tools frequently suffer from stylistic drift, hallucinated factual points, and unstructured output formats that break downstream publishing workflows. Engineering teams spend excessive time manually post-processing and validating outputs.",
      solution:
        "Implemented an asynchronous agent swarm where each node possesses strict validation contracts. An editorial critique agent benchmarks drafts against customized tone-of-voice embeddings before pushing validated JSON to the frontend drafting canvas.",
      architectureNotes:
        "FastAPI backend running stateful agent routines via Redis task queues. Frontend leverages Next.js App Router with real-time streaming tokens and collaborative editing interfaces.",
      sections: [
        {
          title: "Multi-Agent Coordination Pipeline",
          content:
            "Decomposed content synthesis into four discrete sub-agents: Research & Ingestion, Draft Synthesis, Fact-Checking & Citation Alignment, and JSON Structuring. Each agent communicates via strongly-typed Pydantic schemas.",
          bulletPoints: [
            "Deterministic JSON schema validation preventing downstream parser failures",
            "Embedding-based style alignment scoring against custom brand guidelines",
            "Streaming response architecture allowing real-time token inspections",
          ],
        },
        {
          title: "Frontend Interaction Design",
          content:
            "Engineered a distraction-free editorial interface with modular step-by-step reviews. Writers inspect which sub-agent made specific edits, inspecting revision histories with fine-grained control.",
        },
      ],
      keyTakeaways: [
        "LLMs achieve higher reliability when restricted to bounded sub-tasks with programmatic schema validation.",
        "Asynchronous task queues are essential for maintaining sub-second UI responsiveness during multi-stage agent workflows.",
      ],
    },
  },
  {
    id: "samadhan-setu",
    slug: "samadhan-setu",
    number: "02",
    title: "Samadhan Setu",
    category: "Civic technology and grievance workflows",
    shortDescription:
      "Intelligent civic grievance routing and triage platform connecting citizens with municipal departments via automated urgency classification.",
    heroImage: "/images/projects/samadhan-setu.svg",
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
      "Prisma",
    ],
    caseStudyUrl: "/work/samadhan-setu",
    status: "Case Study Available",
    year: "2025",
    role: "System Designer & Lead Developer",
    caseStudy: {
      overview:
        "Samadhan Setu ('Resolution Bridge') is a civic tech initiative designed to solve administrative triage bottlenecks in municipal public grievance redressal systems. It automates semantic categorization, geo-tags issues, and routes complaints directly to field engineers.",
      problem:
        "Citizens face opaque grievance portals where submissions sit unread for weeks due to manual triage backlogs, incorrect departmental tagging, and an inability to detect duplicate complaints across adjacent streets.",
      solution:
        "Engineered an NLP-driven triage engine that extracts semantic urgency, normalizes multilingual reports, matches spatial clusters with PostGIS, and delivers a transparent resolution audit trail to both citizen and officer.",
      architectureNotes:
        "PostgreSQL with PostGIS extensions handles geographic bounding queries. Transformer classification models extract department tags with confidence scoring.",
      sections: [
        {
          title: "Semantic Triage & Categorization",
          content:
            "Trained a lightweight classification pipeline capable of parsing colloquial descriptions, categorizing issues (water infrastructure, road repairs, sanitation, electrical hazards) and flagging hazardous situations for expedited review.",
          bulletPoints: [
            "Spatial clustering algorithm grouping duplicate localized reports into single administrative work-orders",
            "Multilingual transcript parsing supporting both local dialect input and standard official terminology",
            "Public status ledger ensuring timestamped accountability across departmental handoffs",
          ],
        },
        {
          title: "Administrative Dispatch Experience",
          content:
            "Built a high-density, keyboard-driven triage portal for municipal officers that sorts incoming queues by SLA deadlines and geographic proximity.",
        },
      ],
      keyTakeaways: [
        "In civic technology, clear status visibility and unambiguous accountability drive trust more than complex UI decoration.",
        "Geospatial clustering drastically reduces redundant field inspections by municipal teams.",
      ],
    },
  },
  {
    id: "quicklearn-ai",
    slug: "quicklearn-ai",
    number: "03",
    title: "QuickLearn AI",
    category: "AI-assisted learning",
    shortDescription:
      "Adaptive micro-learning platform that synthesizes technical lectures and documentation into interactive concept maps and spaced-repetition drills.",
    heroImage: "/images/projects/quicklearn-ai.svg",
    imageAlt: "QuickLearn AI concept graph synthesis and spaced repetition drill engine",
    accentColor: "#5A7A77", // Muted slate teal
    accentColorSoft: "rgba(90, 122, 119, 0.12)",
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Vector DB",
      "Tailwind CSS",
      "Web Audio API",
    ],
    caseStudyUrl: "/work/quicklearn-ai",
    status: "Case Study Available",
    year: "2024 – 2025",
    role: "Full-Stack Engineer",
    caseStudy: {
      overview:
        "QuickLearn AI transforms dense technical lectures, documentation sets, and textbooks into structured learning journeys. It dynamically builds conceptual knowledge graphs and generates interactive spaced-repetition exercises tailored to individual student weaknesses.",
      problem:
        "Passive consumption of long-form video lectures and documentation leads to the illusion of competence, leaving students unprepared for real synthesis and practical problem-solving.",
      solution:
        "Built a retrieval-augmented synthesis pipeline that decomposes transcripts into hierarchical knowledge nodes, formulating contextual test questions that adapt in real time to learner responses.",
      architectureNotes:
        "Node.js orchestration layer with vector embeddings stored in a lightweight vector store. Frontend renders dynamic SVG conceptual directed acyclic graphs (DAGs).",
      sections: [
        {
          title: "Knowledge Graph Generation",
          content:
            "Extracts key concepts, prerequisites, and relationships from ingested material, presenting them as an interactive visual map of understanding.",
          bulletPoints: [
            "Prerequisite dependency mapping highlighting conceptual bottlenecks",
            "SM-2 modified spaced repetition scheduler optimizing retention intervals",
            "Audio snippet alignment syncing practice drills with original lecture timestamps",
          ],
        },
      ],
      keyTakeaways: [
        "Visual knowledge representations help students orient themselves within complex domains much faster than linear flashcards.",
        "Precision in chunking and embedding retrieval directly determines the factual accuracy of AI-generated drills.",
      ],
    },
  },
  {
    id: "upchar360",
    slug: "upchar360",
    number: "04",
    title: "Upchar360",
    category: "Digital product and platform development",
    shortDescription:
      "Comprehensive healthcare operations portal streamlining outpatient scheduling, digital diagnostic records, and tele-consultation coordination.",
    heroImage: "/images/projects/upchar360.svg",
    imageAlt: "Upchar360 medical practice management and clinical schedule interface",
    accentColor: "#6F7E50", // Olive sage
    accentColorSoft: "rgba(111, 126, 80, 0.12)",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "WebRTC",
      "Docker",
    ],
    caseStudyUrl: "/work/upchar360",
    status: "Case Study Available",
    year: "2024",
    role: "Full-Stack Product Engineer",
    caseStudy: {
      overview:
        "Upchar360 is an integrated clinical management platform crafted for independent clinics and outpatient diagnostic centers. It consolidates appointment scheduling, encrypted prescription histories, and secure tele-consultations into a unified, responsive interface.",
      problem:
        "Many regional healthcare facilities juggle disparate tools for patient appointments, physical paper prescriptions, and external messaging channels, causing booking friction and lost patient history.",
      solution:
        "Engineered an all-in-one web application emphasizing clinical clarity, accessible font hierarchy, rapid search across patient records, and end-to-end encrypted medical attachments.",
      architectureNotes:
        "Relational schema modeled in Prisma ORM with strict access control. Real-time slot management using optimistic locking prevents double bookings.",
      sections: [
        {
          title: "Streamlined Clinical Workflow",
          content:
            "Designed the doctor dashboard for minimal click-depth: medical records, past prescriptions, and consultation notes are accessible within two keyboard shortcuts.",
          bulletPoints: [
            "Optimistic UI updates for high-volume outpatient morning queues",
            "Strict role-based access control protecting confidential patient health data",
            "Integrated WebRTC peer-to-peer room for remote patient follow-ups",
          ],
        },
      ],
      keyTakeaways: [
        "In healthcare software, user interfaces must reduce cognitive burden and eliminate ambiguity above all else.",
        "Database transaction safety around scheduling prevents chaotic reception desk conflicts.",
      ],
    },
  },
  {
    id: "voice-agent-systems",
    slug: "voice-agent-systems",
    number: "05",
    title: "Voice Agent Systems",
    category: "Voice AI, CRM integrations, and automation",
    shortDescription:
      "Ultra-low-latency conversational voice agent pipeline handling inbound support queries, calendar bookings, and CRM synchronization.",
    heroImage: "/images/projects/voice-agent-systems.svg",
    imageAlt: "Voice agent system waveform visualization and real-time streaming pipeline diagram",
    accentColor: "#7E886B", // Muted moss
    accentColorSoft: "rgba(126, 136, 107, 0.12)",
    technologies: [
      "Python",
      "WebSockets",
      "FastAPI",
      "Deepgram",
      "Redis",
      "CRM APIs",
      "Asyncio",
    ],
    caseStudyUrl: "/work/voice-agent-systems",
    status: "Case Study Available",
    year: "2025 – 2026",
    role: "AI & Systems Engineer",
    caseStudy: {
      overview:
        "A full-duplex conversational voice pipeline engineered for ultra-low latency voice workflows. The system transcribes inbound speech streams, performs contextual intent analysis, queries backend CRM tools via function calling, and synthesizes natural audio output.",
      problem:
        "Traditional voice bots feel robotic and cumbersome because their turn-around latency exceeds 2 seconds, and they fail to gracefully handle user interruptions (barge-in).",
      solution:
        "Architected an event-driven streaming pipeline utilizing persistent WebSockets, audio chunk buffering, zero-shot interruption detection, and sub-600ms latency execution.",
      architectureNotes:
        "Python asyncio event loop coordinating WebSocket connections with transcription providers, streaming LLM inference, and audio synthesizer chunks concurrently.",
      sections: [
        {
          title: "Sub-Second Latency Architecture",
          content:
            "Pipelined the speech-to-text, reasoning, and text-to-speech stages so output audio begins streaming before the entire LLM response has completed generating.",
          bulletPoints: [
            "Barge-in detection immediately canceling current audio playback upon caller voice activity",
            "Dynamic tool execution invoking CRM booking APIs with confirmation callbacks",
            "Continuous session state preservation across call handoffs",
          ],
        },
      ],
      keyTakeaways: [
        "Natural conversational flow in voice systems depends far more on latency reduction and barge-in handling than model parameter count.",
        "Asynchronous stream pipelining cuts perceived latency by over 60% compared to sequential request models.",
      ],
    },
  },
];
