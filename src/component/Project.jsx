import { Bot, Briefcase, Coffee, Globe, Megaphone, Search } from "lucide-react";

const PROJECT_ICONS = {
  ai: Bot,
  portfolio: Globe,
  cafe: Coffee,
  campaign: Megaphone,
  research: Search,
  webinar: Briefcase,
};

const Projects = [
  {
    id: 1,
    name: "DocuAI - AI Agent for Students",
    description:
      "AI Agent that can perform tasks based on user input, especially for Students.",
    image: "../public/Projects/AiAgent.png",
    tags: ["JavaScript", "Python", "Flask", "Tailwind CSS", "Supabase", "n8n"],
    Url: "Available Soon ",
    Date: "Available Soon",
    icon: "ai",
    iconLabel: "AI Agent",
  },

  {
    id: 2,
    name: "Personal Portfolio",
    description:
      " A Personal Portfolio Website that was intended to showcase my skills, projects, and experiences in Many Field.",
    image: "../public/Projects/image.png",
    tags: ["JavaScript", "React", "Tailwind CSS", "Vite"],
    Url: "Not Available ",
    Date: "2026",
    icon: "portfolio",
    iconLabel: "Portfolio Website",
  },
  {
    id: 3,
    name: "Cafe Coding",
    description:
      "A Service Website that was intended to be a platform for courses and to build a Coding community to empower each student ",
    image: "../public/Projects/CafeCoding.jpg",
    tags: ["JavaScript", "Python", "Flask", "MongoDB"],
    Url: "Not Available ",
    Date: "2024",
    icon: "cafe",
    iconLabel: "Course Platform",
  },
  {
    id: 4,
    name: " Journal Publication, UNIDA, Volume 17 Issue 1  ",
    description:
      "International Collaboration and Coordination Vietnam’s Energy Transition: The Role of International Partners Through the Just Energy Transition Partnership ",
    image: "../public/Projects/Jurnal.jpg",
    tags: [
      "Research",
      " Policy Analysis ",
      "Qualitative Research",
      "Microsoft Office",
    ],
    Url: "Not Available ",
    Date: "2026",
    icon: "research",
    iconLabel: "Research Work",
  },

  {
    id: 5,
    name: "Amnesty Greeting Days - Chapter UPNVJ",
    description:
      " A Project that was intended to Greet the New Upcomers for Amnesty Chapter UPNVJ. ",
    image: "../public/Projects/PPTAmnesty.png",
    tags: [
      "Management",
      "Collaboration",
      "Leadership",
      "Canva",
      "Gdocs",
      "Google Workspace",
    ],
    Url: "Not Available ",
    Date: "2024",
    icon: "campaign",
    iconLabel: "Event Campaign",
  },
  {
    id: 6,
    name: "Research Project - IR Theory",
    description:
      "A research project that focused on Information in International Relations (IR) Theory, exploring the role of information in shaping global politics and decision-making.",
    image: "../public/Projects/Cover.jpg",
    tags: ["Research", "Canva", "Gdocs", "Google Workspace"],
    Url: "Not Available ",
    Date: "2024",
    icon: "research",
    iconLabel: "Research Work",
  },

  {
    id: 7,
    name: "Webinar Kewarganegaraan & Bela Negara",
    description:
      "Sebuah acara Webinar  tentang kewarganegaraan dan bela negara dikhususkan untuk mahasiswa dan generasi-generasi yang akan datang.",
    image: "../public/Projects/Webinar.png",
    tags: ["Management", "Design", "Canva", "Gdocs", "Google Workspace"],
    Url: "Not Available ",
    Date: "2024",
    icon: "webinar",
    iconLabel: "Webinar Program",
  },

  
];

export const Project = () => {
  return (
    <section id="projects" className="relative px-4 py-24">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My Projects & Experiences
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          <span className="text-primary font-semibold">Showcasing</span> a
          selection of my work, highlighting my skills and creativity Many
          Field. Each project reflects my dedication to delivering high-quality
          solutions and my passion for continuous learning and growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Projects.map((project, key) => {
            const Icon = PROJECT_ICONS[project.icon] ?? Briefcase;

            return (
              <div
                key={key}
                className="group bg-card rounded-lg shadow-xs overflow-hidden card-hover"
              >
                <div className="overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-secondary border font-semimedium text-white px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{project.name}</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {project.Date}
                    </span>
                    <a
                      href={project.Url}
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
                    <span className="font-medium">{project.iconLabel}</span>
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
