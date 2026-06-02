import { useEffect, useState } from "react";
import { cn } from "@/lib/utility";
import { Menu, X } from "lucide-react";

const NavItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-sm shadow-xs"
          : "py-5",
      )}
    >
      <div className="container flex justify-between items-center">
        <a
          className="text-2xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10 opacity-0 animate-fade-in-delay-2">
            <span className="text-glow text-foreground opacity-0 animate-fade-in-delay-2">Daff</span>
            Portfolio
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 animate-fade-in-delay-2">
          {NavItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* { MOBILE MENU} */}

        <button onClick={() => setIsMenuOpen((prev) => !prev)} 
        className="md:hidden p-2 text-foreground z-50"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
            {''}
            {isMenuOpen ? <X size={24} className="text-foreground" /> : <Menu size={24} className="text-foreground" />}
        </button>
        <div
          className={cn(
            'fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center',
            'transition-transform duration-300 md:hidden',
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
          )}
        >
          <div className="flex flex-col items-center space-y-8 text-2xl animate-fade-in-delay-2">
            {NavItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
