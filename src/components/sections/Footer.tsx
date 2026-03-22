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

function ChipBadge() {
  return (
    <svg width="38" height="22" viewBox="0 0 38 22" fill="none" className="shrink-0 text-primary opacity-70">
      {/* Left pins */}
      <line x1="0" y1="6"  x2="7" y2="6"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.65"/>
      <line x1="0" y1="11" x2="7" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.65"/>
      <line x1="0" y1="16" x2="7" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.65"/>
      {/* Right pins */}
      <line x1="31" y1="6"  x2="38" y2="6"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.65"/>
      <line x1="31" y1="11" x2="38" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.65"/>
      <line x1="31" y1="16" x2="38" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.65"/>
      {/* Chip body */}
      <rect x="7" y="1" width="24" height="20" rx="2" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" opacity="0.7"/>
      {/* Index notch */}
      <path d="M14 1 A4 4 0 0 1 24 1" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6"/>
      {/* AR label */}
      <text
        x="19" y="13"
        style={{ fontFamily: "'Courier New', Courier, monospace", fontWeight: 800, fontSize: "7px" }}
        fill="currentColor"
        textAnchor="middle"
        dominantBaseline="middle"
        letterSpacing="0.5"
      >
        AR
      </text>
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  const uptime = useUptime();

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "What I Offer", href: "#services" },
    { name: "Projects", href: "#portfolio" },
    { name: "Technical Skills", href: "#skills" },
    { name: "Industries", href: "#industries" },
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

        {/* Left — chip badge + copyright */}
        <div className="flex items-center gap-3">
          <ChipBadge />
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
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
        </nav>

      </div>
    </footer>
  );
}
