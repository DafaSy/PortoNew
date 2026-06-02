import * as Icons from "lucide-react";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="space-y-4 text-left">
          <a href="#hero" className="inline-flex items-center space-x-3">
            <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-bold">
              D
            </div>
            <div>
              <h3 className="text-lg font-semibold">DaffPortfolio</h3>
              <p className="text-sm text-muted-foreground">Modern portfolio by Dafa</p>
            </div>
          </a>

          <p className="text-sm text-muted-foreground">© {year} DaffPortfolio. All rights reserved.</p>
        </div>

        <nav className="flex flex-col md:items-center">
          <h4 className="font-medium mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#hero" className="hover:text-primary">Home</a></li>
            <li><a href="#about" className="hover:text-primary">About</a></li>
            <li><a href="#skills" className="hover:text-primary">Skills</a></li>
            <li><a href="#projects" className="hover:text-primary">Projects</a></li>
            <li><a href="#certifications" className="hover:text-primary">Certifications</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </nav>

        <div className="text-right md:text-left">
          <h4 className="font-medium mb-3">Contact</h4>
          <p className="text-sm text-muted-foreground">Email: dafadafa2211@gmail.com</p>
          <p className="text-sm text-muted-foreground">Phone: +6289635626892</p>

          <div className="flex items-center justify-end md:justify-start gap-3 mt-3">
            <a href="#contact" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
              <Icons.ArrowUp size={18} />
            </a>
            <a href="https://github.com/your-username" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-muted/5 hover:bg-muted/10">
              {Icons.Github ? <Icons.Github size={18} /> : <span>GH</span>}
            </a>
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-muted/5 hover:bg-muted/10">
              {Icons.Linkedin ? <Icons.Linkedin size={18} /> : <span>in</span>}
            </a>
          </div>

          <div className="mt-4 rounded-md overflow-hidden border">
            <iframe
              title="map-jakarta-selatan"
              src="https://www.google.com/maps?q=Jakarta%20Selatan&output=embed"
              className="w-full h-32"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};