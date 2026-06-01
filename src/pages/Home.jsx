import { ThemeToggle } from "../component/ThemeToggle.jsx";
import { StarBackground } from "../component/StarBackground.jsx";
import { Navbar } from "../component/Navbar.jsx";
import { Hero } from "../component/HeroSection.jsx";
import { About } from "../component/About.jsx";
import { Skills } from "../component/Skill.jsx";  


export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme */}
      <ThemeToggle/>
       {/* Background */}
        <StarBackground />
        {/* Navbar*/} 
        <Navbar />
         {/* Main */}
         <Hero />
          <About />
          <Skills />
         {/* footer */}
    </div>
  )
}