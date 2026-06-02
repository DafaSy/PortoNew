export const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center gap-4 flex-wrap ">
          <h1 className="text-5xl md:text-7xl font-bold  opacity-0 animate-fade-in-delay-3">
            Hi, I'm
          </h1>

          <h1 className="flex flex-wrap text-5xl md:text-7xl font-bold text-primary opacity-0 animate-fade-in-delay-3">
            Dafa
          </h1>

          <h1 className="flex flex-wrap text-5xl md:text-7xl font-bold  opacity-0 animate-fade-in-delay-3">
            Syachrullah
          </h1>
        </div>

        <p className="mt-4 text-xl md:text-3xl text-muted-foreground opacity-0 animate-fade-in-delay-4">
          Web Developer | Researcher | FreshGraduate
        </p>

        <p className="mt-4 text-lg md:text-md opacity-0 animate-fade-in-delay-4 max-w-2xl">
          International Relations 
          Fresh Graduate with a passion for web development, 
          eager to leverage my research skills and creativity for personal and professional growth.
        </p>

        <div>
          <a href="#projects" className="inline-block">
            <button  
            className="cosmic-button mt-6 pt-4 opacity-0 animate-fade-in-delay-4 hover:animate-pulse">
              Set to Desktop for Best Experience
            </button>
          </a>
        </div>
      </div>

      <div 
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce"> 
        <span className="text-2xl text-muted-foreground">Scroll Down</span>
        <svg className="w-6 h-6 text-muted-foreground mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};
