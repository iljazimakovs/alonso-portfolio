import { useState, useEffect } from "react";
import { Github } from "lucide-react";

function useUptime() {
  const [uptime, setUptime] = useState("00:00:00");
  useEffect(() => {
    const start = Date.now();
    const tick = () => {
      const elapsed = Math.floor((Date.now() - start) / 1000);
      const h = Math.floor(elapsed / 3600).toString().padStart(2, "0");
      const m = Math.floor((elapsed % 3600) / 60).toString().padStart(2, "0");
      const s = (elapsed % 60).toString().padStart(2, "0");
      setUptime(`${h}:${m}:${s}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return uptime;
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  const uptime = useUptime();

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#portfolio" },
    { name: "Expertise", href: "#skills" },
  ];

  return (
    <footer className="border-t border-border/50 bg-background">

      {/* Status bar */}
      <div className="border-b border-border/40 bg-card/30 px-6 py-2">
        <div className="max-w-7xl mx-auto flex items-center gap-6 font-mono text-[11px] text-muted-foreground/50">
          <span>FW v2.4.1</span>
          <span className="text-border/60">|</span>
          <span>BUILD 0x7EA41</span>
          <span className="text-border/60">|</span>
          <span>UPTIME {uptime}</span>
          <span className="text-border/60">|</span>
          <span className="flex items-center gap-1.5">
            SYS
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
            ON
          </span>
        </div>
      </div>

      {/* Main footer row */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left — AR badge + copyright */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-md bg-primary/15 border border-primary/40 flex items-center justify-center shrink-0">
            <span className="font-display font-bold text-xs text-primary tracking-tight">AR</span>
          </div>
          <span className="text-sm text-muted-foreground font-mono">
            © {currentYear} Alonso Rodriguez
          </span>
        </div>

        {/* Right — nav links + GitHub */}
        <nav className="flex items-center gap-6 flex-wrap justify-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://github.com/alonsoo-rodriguez"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
        </nav>

      </div>
    </footer>
  );
}
