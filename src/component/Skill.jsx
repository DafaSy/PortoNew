import { useEffect, useState } from "react";

const SKILLS = [
    { name: "HTML", level: "Intermediate", category: "Web Development" },
    { name: "CSS", level: "Intermediate", category: "Web Development" },
    { name: "JavaScript", level: "Intermediate", category: "Web Development" },
    { name: "React", level: "Beginner", category: "Web Development" },
    { name: "Node.js", level: "Intermediate", category: "Backend Development" },
    { name: "Python", level: "Intermediate", category: "Backend Development" },
    { name: "Research", level: "Intermediate to Advanced", category: "Research" },
    { name: "Microsoft Office", level: "Intermediate", category: "Productivity" },
    { name: "Google Workspace", level: "Intermediate", category: "Productivity" },
    { name: "AI Agent", level: "Intermediate", category: "AI" },
    { name: "Git", level: "Intermediate", category: "Version Control" },
    { name: "PHP", level: "Beginner", category: "Backend Development" },

];

const levelToPercent = (level) => {
    const key = String(level).toLowerCase();
    if (key.includes("intermediate to advance") || key.includes("intermediate to advanced")) {
        return 80;
    }
    if (key.includes("advanced")) return 95;
    if (key.includes("intermediate")) return 65;
    if (key.includes("beginner")) return 40;
    return 50;
};

export const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState(null);

    useEffect(() => {
        if (!selectedSkill) return undefined;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setSelectedSkill(null);
            }
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedSkill]);

    return (
        <section id="skills" className="relative px-4 py-24">
            <div className="container mx-auto max-w-5xl">
                <h2 className="mb-12 text-center text-4xl font-bold text-primary">
                    <span className="text-glow text-foreground opacity-0 animate-fade-in-delay-2">
                        Skills
                    </span>
                </h2>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {SKILLS.map((skill, index) => {
                        const percent = levelToPercent(skill.level);

                        return (
                            <button
                                key={index}
                                type="button"
                                onClick={() => setSelectedSkill({ ...skill, percent })}
                                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card/75 p-6 text-left shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-[0_14px_36px_rgba(139,92,246,0.28)]"
                            >
                                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/20 blur-2xl transition-transform duration-300 group-hover:scale-125" />

                                <div className="relative z-10">
                                    <div className="mb-2 flex items-start justify-between gap-3">
                                        <h3 className="text-lg font-semibold">{skill.name}</h3>
                                        <span className="rounded-full border border-primary/35 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                                            {percent}%
                                        </span>
                                    </div>

                                    <p className="text-muted-foreground">{skill.level}</p>
                                    <p className="text-sm text-muted-foreground/90">{skill.category}</p>

                                    <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-secondary/30">
                                        <div
                                            className="h-2 origin-left rounded-full bg-primary transition-all duration-700"
                                            style={{ width: `${percent}%` }}
                                        />
                                    </div>

                                    <p className="mt-3 text-xs tracking-wide text-primary/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        Click for detail
                                    </p>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            <div
                className={`fixed inset-0 z-60 flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-md transition-all duration-300 ${
                    selectedSkill
                        ? "pointer-events-auto opacity-100"
                        : "pointer-events-none opacity-0"
                }`}
                onClick={() => setSelectedSkill(null)}
                aria-hidden={!selectedSkill}
            >
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="skill-popup-title"
                    className={`relative w-full max-w-[92vw] overflow-hidden rounded-4xl border border-white/10 bg-[#0f1118] p-6 text-left shadow-[0_30px_120px_rgba(0,0,0,0.55)] transition-transform duration-300 sm:max-w-xl md:max-w-2xl ${
                        selectedSkill ? "scale-100" : "scale-95"
                    }`}
                    onClick={(event) => event.stopPropagation()}
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.2),transparent_45%)]" />

                    <div className="relative z-10">
                        <button
                            type="button"
                            onClick={() => setSelectedSkill(null)}
                            className="absolute right-0 top-0 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                            aria-label="Close skill popup"
                        >
                            <svg
                                className="h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        <p className="text-sm uppercase tracking-[0.35em] text-primary/90">
                            Skill detail
                        </p>

                        <h3 id="skill-popup-title" className="mt-3 text-3xl font-bold text-white md:text-4xl">
                            {selectedSkill?.name}
                        </h3>

                        <div className="mt-6 grid gap-3 rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-white/80 sm:grid-cols-3">
                            <div>
                                <span className="mb-2 block text-xs uppercase tracking-[0.3em] text-white/45">
                                    Level
                                </span>
                                {selectedSkill?.level}
                            </div>
                            <div>
                                <span className="mb-2 block text-xs uppercase tracking-[0.3em] text-white/45">
                                    Category
                                </span>
                                {selectedSkill?.category}
                            </div>
                            <div>
                                <span className="mb-2 block text-xs uppercase tracking-[0.3em] text-white/45">
                                    Approximate Proficiency
                                </span>
                                {selectedSkill?.percent}%
                            </div>
                        </div>

                        <div className="mt-6 h-2.5 w-full overflow-hidden rounded-full bg-white/15">
                            <div
                                className="h-2.5 rounded-full bg-primary transition-all duration-700"
                                style={{ width: `${selectedSkill?.percent ?? 0}%` }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};