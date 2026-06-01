import { useEffect, useState } from "react";
import aboutPortrait from "../assets/Dafa.png";

const CONTACTS = {
  github: "https://github.com/your-username",
  linkedin: "https://www.linkedin.com/in/your-profile",
  whatsapp: "https://wa.me/your-number",
};

export const About = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    if (!isPopupOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsPopupOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPopupOpen]);

  return (
    <section id="about" className="px-4 py-24 relative">
      <div className="container mx-auto max-w-5xl flex flex-col items-center gap-12">
        <h2 className="text-3xl font-bold md:text-4xl text-center items-center mb-6 md:mb-0 opacity-0 animate-fade-in-delay-4">
          About
          <span className="text-primary m-2">Me</span>
        </h2>

        <div className="grid items-center md:grid-cols-2 gap-8 animate-fade-in-delay-4">
          <div className="space-y-4">
            <h3 className=" text-muted-foreground text-2xl font-semibold">
              I am a passionate web developer with a background in International
              Relations.
            </h3>
            <p className="text-muted-foreground">
              I specialize in creating responsive and user-friendly websites
              using modern technologies like React and Node.js.
            </p>

            <p className="text-muted-foreground">
              With a strong foundation in research and problem-solving, I am
              eager to contribute my skills to innovative projects and
              collaborate with
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
              <button
                type="button"
                onClick={() => setIsPopupOpen(true)}
                className="inline-block cosmic-button hover:animate-pulse"
              >
                Get in Touch
              </button>
              <a
                href="#contact"
                className="inline-block px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-background transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border rounded-2-lg p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M8.658 3h5.673M12 3v1m0 12v1m-7.335 4h14.673A2.998 2.998 0 0021 19.673V4.327A2.998 2.998 0 0018.673 2H5.327A2.998 2.998 0 002 4.327v15.346A2.998 2.998 0 004.327 22z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-semi-lg font-semibold">
                    Web Development
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Building responsive and dynamic websites using React,
                    Node.js, and other modern web technologies.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border rounded-lg p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-semi-lg font-semibold">Research</h4>
                  <p className="text-muted-foreground text-sm">
                    Conducting in-depth research and analysis to inform
                    development decisions and optimize user experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border rounded-lg p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 012-2h4a2 2 0 012 2v6m-3-3h.01M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-semi-lg font-semibold">Collaboration</h4>
                  <p className="text-muted-foreground text-sm">
                    Working effectively in team environments, communicating
                    ideas clearly, and contributing to shared goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-60 flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-md transition-all duration-300 ${
          isPopupOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsPopupOpen(false)}
        aria-hidden={!isPopupOpen}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-popup-title"
          className={`relative w-full max-w-[92vw] overflow-hidden rounded-4xl border border-white/10 bg-[#0f1118] text-left shadow-[0_30px_120px_rgba(0,0,0,0.55)] transition-transform duration-300 sm:max-w-136 md:max-w-[min(52vw,42rem)] ${
            isPopupOpen ? "scale-100" : "scale-95"
          }`}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.22),transparent_45%),linear-gradient(145deg,rgba(255,255,255,0.06),transparent_35%)]" />

          <div className="relative grid gap-0 md:grid-cols-[0.95fr_1.05fr]">
            <div className="relative flex items-end justify-center overflow-hidden bg-linear-to-br from-primary/25 via-transparent to-transparent px-4 pt-8 md:px-6 md:pt-6">
              <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/70">
                Contact panel
              </div>
              <img
                src={aboutPortrait}
                alt="Portrait of Dafa"
                className="h-auto w-full max-w-[16rem] drop-shadow-[0_18px_40px_rgba(0,0,0,0.45)] md:max-w-none md:translate-y-4"
              />
            </div>

            <div className="relative flex flex-col justify-between gap-6 p-6 sm:p-8 md:min-h-[50vh] md:p-10">
              <button
                type="button"
                onClick={() => setIsPopupOpen(false)}
                className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Close popup"
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

              <div className="space-y-4 pt-10 md:pt-4">
                <p className="text-sm uppercase tracking-[0.35em] text-primary/90">
                  Let&apos;s work together
                </p>
                <h3
                  id="contact-popup-title"
                  className="text-3xl font-bold text-white md:text-4xl"
                >
                  Need a quick contact card?
                </h3>
                <p className="max-w-md text-sm leading-6 text-white/70 sm:text-base">
                  I am open to new opportunities and collaborations. Whether you
                  have a project in mind or just want to say hello, feel free to
                  reach out!
                </p>
              </div>

              <div className="grid gap-3 rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-white/80 sm:grid-cols-2">
                <div>
                  <span className="block mb-2 text-xs uppercase tracking-[0.3em] text-white/45">
                    Status
                  </span>
                  Available
                </div>
                <div>
                  <span className="block mb-2 text-xs uppercase tracking-[0.3em] text-white/45">
                    If you Need
                  </span>
                  Fresh Graduates
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-transform duration-300 hover:scale-[1.02]"
                >
                  Contact Form
                </a>
                <button
                  type="button"
                  onClick={() => setIsPopupOpen(false)}
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 font-medium text-white/90 transition-colors duration-300 hover:bg-white/10"
                >
                  Close
                </button>
              </div>

              <div className="mt-4 flex items-center justify-center gap-3">
                <a
                  href={CONTACTS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white/6 p-2 text-white/90 transition-colors hover:bg-white/10"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.625-5.48 5.92.43.371.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .32.216.694.825.576C20.565 22.092 24 17.592 24 12.297 24 5.67 18.627.297 12 .297z" />
                  </svg>
                </a>

                <a
                  href={CONTACTS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white/6 p-2 text-white/90 transition-colors hover:bg-white/10"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M20.52 3.48A11.84 11.84 0 0012.01.5C6.03.5 1.1 5.43 1.1 11.41c0 2.01.53 3.97 1.53 5.7L.5 23.5l6.6-2.17c1.66.9 3.56 1.36 5.41 1.36 5.98 0 10.91-4.93 10.91-10.91 0-3.01-1.17-5.84-3.41-7.3zM12 21.5c-1.68 0-3.32-.46-4.74-1.33l-.34-.2-3.92 1.29 1.32-3.83-.21-.38A8.44 8.44 0 013.5 11.41c0-4.69 3.81-8.5 8.5-8.5 4.69 0 8.5 3.81 8.5 8.5S16.69 21.5 12 21.5zM16.2 14.9c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.09-.16.18-.31.2-.59.07-.28-.14-1.17-.43-2.22-1.37-.82-.73-1.37-1.63-1.53-1.91-.16-.28-.02-.43.12-.57.12-.12.28-.31.42-.47.14-.16.18-.28.28-.47.09-.18.05-.34-.02-.48-.07-.14-.61-1.46-.84-2.01-.22-.53-.45-.46-.62-.47l-.53-.01c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27 0 1.34.98 2.63 1.12 2.81.14.18 1.93 2.95 4.68 4.14 3.25 1.36 3.25.91 3.84.86.59-.05 1.85-.76 2.11-1.5.26-.74.26-1.37.18-1.5-.07-.12-.25-.18-.53-.31z" />
                  </svg>
                </a>

                <a
                  href={CONTACTS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white/6 p-2 text-white/90 transition-colors hover:bg-white/10"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.037-1.849-3.037-1.85 0-2.132 1.445-2.132 2.94v5.666H9.36V9h3.413v1.561h.049c.476-.9 1.637-1.849 3.369-1.849 3.604 0 4.27 2.372 4.27 5.456v6.284zM5.337 7.433c-1.144 0-2.07-.927-2.07-2.07 0-1.142.926-2.07 2.07-2.07 1.143 0 2.07.928 2.07 2.07 0 1.143-.927 2.07-2.07 2.07zM6.556 20.452H4.117V9h2.439v11.452z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
