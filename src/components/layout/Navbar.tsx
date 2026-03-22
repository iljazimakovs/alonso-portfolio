import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

function ChipLogo({ className = "" }: { className?: string }) {
  return (
    <svg width="50" height="30" viewBox="0 0 50 30" fill="none" className={`shrink-0 text-primary ${className}`}>
      {/* Left pins — 3 leads */}
      <line x1="0" y1="8"  x2="9" y2="8"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.65"/>
      <line x1="0" y1="15" x2="9" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.65"/>
      <line x1="0" y1="22" x2="9" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.65"/>
      {/* Right pins — 3 leads */}
      <line x1="41" y1="8"  x2="50" y2="8"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.65"/>
      <line x1="41" y1="15" x2="50" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.65"/>
      <line x1="41" y1="22" x2="50" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.65"/>
      {/* Chip body */}
      <rect x="9" y="2" width="32" height="26" rx="2" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" opacity="0.7"/>
      {/* Index notch at top */}
      <path d="M20 2 A5 5 0 0 1 30 2" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.65"/>
      {/* AR label */}
      <text
        x="25" y="17"
        style={{ fontFamily: "'Courier New', Courier, monospace", fontWeight: 800, fontSize: "10px" }}
        fill="currentColor"
        textAnchor="middle"
        dominantBaseline="middle"
        letterSpacing="1"
      >
        AR
      </text>
    </svg>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "What I Offer", href: "#services" },
    { name: "Projects", href: "#portfolio" },
    { name: "Technical Skills", href: "#skills" },
    { name: "Industries", href: "#industries" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/85 backdrop-blur-md border-b border-border/50 py-3" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo: chip icon + name */}
        <a href="#" className="flex items-center gap-3 group">
          <ChipLogo className="group-hover:opacity-100 opacity-75 transition-opacity" />
          <span className="font-display font-semibold text-base text-foreground group-hover:text-primary transition-colors tracking-tight">
            Alonso Rodriguez
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-foreground hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/50 p-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
