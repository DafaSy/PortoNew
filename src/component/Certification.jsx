import {
  Bot,
  Brain,
  Code,
  Database,
  Briefcase,
  Globe,
  Languages,
  Server,
} from "lucide-react";

const CERTIFICATION_ICONS = {
  software: Code,
  javascript: Globe,
  ai: Bot,
  agent: Brain,
  web: Globe,
  backend: Server,
  english: Languages,
  Database: Database,
  briefcase: Briefcase,
};

const Certifications = [
  {
    id: 1,
    name: "Intro to Software Engineering - RevoU",
    description:
      "Learned fundamental software engineering concepts including software development lifecycle, system design, teamwork, and modern development practices.",
    image:
      "/Certifications/secc-certificate.jpg",
    tags: [
      "Software Engineering",
      "SDLC",
      "System Design",
      "Problem Solving",
      "Collaboration",
    ],
    Url: "Available Soon",
    Date: "2025",
    icon: "software",
    iconLabel: "Software Engineering",
  },

  {
    id: 2,
    name: "Belajar Dasar Pemrograman JavaScript - Dicoding",
    description:
      "Completed foundational JavaScript training covering programming logic, variables, functions, objects, arrays, and modern JavaScript concepts.",
    image: "/Certifications/DasarDicoding.jpg",
    tags: [
      "JavaScript",
      "Fundamentals",
      "DOM Manipulation",
      "ES6",
      "Problem Solving",
    ],
    Url: "Available Soon",
    Date: "2026",
    icon: "javascript",
    iconLabel: "JavaScript",
  },

  {
    id: 3,
    name: "AI for Work & Career Readiness with Google AI Products - Hacktiv8",
    description:
      "Explored practical applications of AI tools for productivity, communication, research, and professional workflows.",
    image:
      "/Certifications/1778811676638-a72632db-78a4-46fe-8c7f-ce8b040ba6a4_page-0001.jpg",
    tags: [
      "Artificial Intelligence",
      "Prompt Engineering",
      "Research",
      "Productivity",
      "Google AI",
    ],
    Url: "Available Soon",
    Date: "2026",
    icon: "ai",
    iconLabel: "Artificial Intelligence",
  },

  {
    id: 4,
    name: "Build an AI Agent - IBM",
    description:
      "Developed AI agents using modern AI workflows, automation tools, prompting techniques, and agent orchestration concepts.",
    image:
      "/Certifications/BuildanAIAgent_Badge20260511-32-inia9b_page-0001.jpg",
    tags: [
      "AI Agents",
      "Automation",
      "Prompt Engineering",
      "Workflow Design",
      "n8n",
    ],
    Url: "Available Soon",
    Date: "2026",
    icon: "agent",
    iconLabel: "AI Agent Development",
  },

  {
    id: 5,
    name: "Belajar Backend Dasar Pemrograman Web dengan JavaScript - Dicoding",
    description:
      "Learned the fundamentals of web development including HTML, CSS, responsive design, and website structure.",
    image: "/Certifications/beDicoding.jpg",
    tags: [
      "Backend Development",
      "Node.js",
      "REST API",
      "Web Development",
      "Database",
    ],
    Url: "Available Soon",
    Date: "2026",
    icon: "web",
    iconLabel: "Web Development",
  },

  {
    id: 6,
    name: "Belajar Front-End Pemula dengan JavaScript - Dicoding",
    description:
      "Learned frontend development concepts including HTML, CSS, responsive design, and JavaScript.",
    image: "/Certifications/beDicoding.jpg",
    tags: [
      "HTML",
      "CSS",
      "REST API",
      "Frontend Development",
      "JavaScript",
      "Object-Oriented Programming",
    ],
    Url: "Available Soon",
    Date: "2026",
    icon: "web",
    iconLabel: "Frontend Development",
  },

  {
    id: 7,
    name: "TOEFL Prediction Certification - UPNVJ",
    description:
      "Demonstrated English proficiency in reading, listening, and grammar through TOEFL prediction assessment.",
    image: "/Certifications/ELPT.jpg",
    tags: ["English", "grammar", "Writing", "Reading", "Listening"],
    Url: "Available Soon",
    Date: "2024",
    icon: "english",
    iconLabel: "English Proficiency",
  },

  {
    id: 8,
    name: "Intro to Data Analysis - UPNVJ",
    description:
      "Learned the fundamentals of data analysis including data collection, cleaning, visualization, and interpretation.",
    image:
      "/Certifications/damc-sertif.jpg",
    tags: [
      "Data Analysis",
      "Data Visualization",
      "Data Cleaning",
      "Data Interpretation",
      "Microsoft Excel",
    ],
    Url: "Available Soon",
    Date: "2026",
    icon: "briefcase",
    iconLabel: "Data Analysis",
  },

  {
    id: 9,
    name: "Intermediate English Program - Language Center ",
    description:
      "Enhanced English language skills in grammar, writing, reading, and listening.",
    image:
      "/Certifications/EngCer.jpg",
    tags: [
      "English",
      "grammar",
      "Writing",
      "Reading",
      "Listening",
    ],
    Url: "Available Soon",
    Date: "2024",
    icon: "briefcase",
    iconLabel: "English Proficiency",
  },

  {
    id: 10,
    name: "Fullstack Web Development Beginner & Intermediate - LearningX",
    description:
      "Learned fullstack development concepts including HTML, CSS, responsive design, JavaScript, and backend technologies.",
    image: "/Certifications/SerLX.jpg",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Frontend Development",
      "Backend Development",
      "Flask",
      "MongoDB",
    ],
    Url: "Available Soon",
    Date: "2026",
    icon: "web",
    iconLabel: "Fullstack Development",
  },
];

export const Certification = () => {
  return (
    <section id="certifications" className="relative px-4 py-24">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My Certifications
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          <span className="text-primary font-semibold">Showcasing</span> a
          selection of certifications that demonstrate my commitment to
          continuous learning and professional development in the field of
          software engineering, data analysis, AI, and more.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Certifications.map((certification, key) => {
            const Icon = CERTIFICATION_ICONS[certification.icon] ?? Briefcase;

            return (
              <div
                key={key}
                className="group bg-card rounded-lg shadow-xs overflow-hidden card-hover"
              >
                <div className="overflow-hidden h-48">
                  <img
                    src={certification.image}
                    alt={certification.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    {certification.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-secondary border font-semimedium text-white px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold mb-1">
                    {certification.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {certification.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {certification.Date}
                    </span>
                    <a
                      href={certification.Url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      View Project
                    </a>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-sm text-primary/90">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                      <Icon size={16} aria-hidden="true" />
                    </span>
                    <span className="font-medium">
                      {certification.iconLabel}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
