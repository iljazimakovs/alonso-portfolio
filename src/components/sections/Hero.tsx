import { ArrowRight, Cpu, CircuitBoard, Boxes, Terminal, Radio, Wrench, Github } from "lucide-react";

const services = [
  { icon: Cpu, title: "Embedded Firmware" },
  { icon: CircuitBoard, title: "Hardware & PCB Design" },
  { icon: Boxes, title: "FPGA & Digital Systems" },
  { icon: Terminal, title: "Embedded Linux" },
  { icon: Radio, title: "Connectivity & IoT" },
  { icon: Wrench, title: "Production & Bring-Up" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-background">
      {/* PCB-style background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{
          maskImage: "radial-gradient(ellipse 80% 75% at 70% 50%, black 5%, transparent 90%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 75% at 70% 50%, black 5%, transparent 90%)",
        }}
      >
        <defs>
          <pattern id="pcb-pattern" x="0" y="0" width="240" height="240" patternUnits="userSpaceOnUse">
            {/* Base traces - horizontal and vertical */}
            <g stroke="rgba(60, 200, 100, 0.13)" strokeWidth="1" fill="none" strokeLinecap="round">
              <path d="M 0 40 L 80 40 L 100 60 L 200 60 L 220 40 L 240 40" />
              <path d="M 0 120 L 60 120 L 80 100 L 160 100 L 180 120 L 240 120" />
              <path d="M 0 180 L 100 180 L 120 200 L 200 200 L 220 180 L 240 180" />
              <path d="M 40 0 L 40 80 L 60 100 L 60 160 L 40 180 L 40 240" />
              <path d="M 140 0 L 140 60 L 160 80 L 160 140 L 180 160 L 180 240" />
              <path d="M 200 0 L 200 40 L 220 60 L 220 140 L 200 160 L 200 240" />
            </g>
            {/* Thinner secondary traces */}
            <g stroke="rgba(60, 200, 100, 0.04)" strokeWidth="0.6" fill="none" strokeLinecap="round">
              <path d="M 20 20 L 40 20 L 60 40 L 100 40" />
              <path d="M 120 140 L 140 140 L 160 160 L 200 160" />
              <path d="M 60 200 L 80 200 L 100 220 L 140 220" />
              <path d="M 80 60 L 80 100" />
              <path d="M 180 180 L 220 180 L 220 220" />
            </g>
            {/* Pads (filled circles) */}
            <g fill="rgba(60, 200, 100, 0.14)">
              <circle cx="40" cy="40" r="2.5" />
              <circle cx="140" cy="60" r="2.5" />
              <circle cx="200" cy="40" r="2.5" />
              <circle cx="60" cy="120" r="2.5" />
              <circle cx="180" cy="100" r="2.5" />
              <circle cx="200" cy="160" r="2.5" />
              <circle cx="100" cy="180" r="2.5" />
              <circle cx="180" cy="200" r="2.5" />
            </g>
            {/* Vias (rings) */}
            <g stroke="rgba(60, 200, 100, 0.12)" strokeWidth="1" fill="rgba(0,0,0,0.6)">
              <circle cx="80" cy="40" r="3.5" />
              <circle cx="220" cy="120" r="3.5" />
              <circle cx="40" cy="180" r="3.5" />
              <circle cx="160" cy="140" r="3.5" />
            </g>
            {/* IC chip outline */}
            <g stroke="rgba(60, 200, 100, 0.10)" strokeWidth="0.8" fill="rgba(60, 200, 100, 0.02)">
              <rect x="100" y="130" width="40" height="50" rx="2" />
            </g>
            {/* IC pins */}
            <g stroke="rgba(60, 200, 100, 0.10)" strokeWidth="0.8" strokeLinecap="round">
              <line x1="95" y1="140" x2="100" y2="140" />
              <line x1="95" y1="150" x2="100" y2="150" />
              <line x1="95" y1="160" x2="100" y2="160" />
              <line x1="95" y1="170" x2="100" y2="170" />
              <line x1="140" y1="140" x2="145" y2="140" />
              <line x1="140" y1="150" x2="145" y2="150" />
              <line x1="140" y1="160" x2="145" y2="160" />
              <line x1="140" y1="170" x2="145" y2="170" />
            </g>
            {/* IC pin 1 dot */}
            <circle cx="105" cy="135" r="1" fill="rgba(60, 200, 100, 0.2)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pcb-pattern)" />
      </svg>

      {/* Soft green glow accent */}
      <div className="absolute top-1/4 -left-1/4 w-[55vw] h-[55vw] bg-primary/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 -right-1/4 w-[45vw] h-[45vw] bg-primary/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left column - identity, headline, CTAs */}
          <div className="lg:col-span-7">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-7">
              <span className="w-8 h-px bg-primary/60" />
              <span className="text-[11px] font-mono text-primary tracking-[0.25em] uppercase font-semibold">
                Alonso Fernandez
              </span>
            </div>

            <h1
              className="font-display font-bold leading-[1.15] tracking-tight mb-7"
              style={{ fontSize: "clamp(2.25rem, 4.6vw, 4.5rem)" }}
              data-testid="text-headline"
            >
              <span className="block text-foreground whitespace-nowrap mb-3">Senior Embedded</span>
              <span className="block text-primary whitespace-nowrap">Systems Engineer.</span>
            </h1>

            {/* Lead paragraph */}
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mb-10">
              I design, build, and certify embedded products end-to-end -
              from firmware and PCB to FPGA, Linux, and production bring-up.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#project"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-primary text-background font-mono text-sm font-bold uppercase tracking-wider hover:bg-primary/90 transition-all"
                data-testid="link-projects"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/alonsoo-rodriguez"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded border border-border/50 text-foreground font-mono text-sm font-bold uppercase tracking-wider hover:bg-card/40 transition-all"
                data-testid="link-github"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>

            {/* Credibility strip */}
            <div className="mt-12 pt-8 border-t border-border/30 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] font-mono uppercase tracking-[0.18em] text-muted-foreground/70">
              <div className="flex items-center gap-2" data-testid="stat-experience">
                <span className="text-primary font-semibold">10+ yrs</span>
                <span>experience</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-border/60" />
              <div className="flex items-center gap-2" data-testid="stat-boards">
                <span className="text-primary font-semibold">30+</span>
                <span>boards delivered</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-border/60" />
              <div className="flex items-center gap-2" data-testid="stat-compliance">
                <span className="text-primary font-semibold">FCC / CE</span>
                <span>compliance</span>
              </div>
            </div>

          </div>

          {/* Right column - service capabilities card */}
          <div className="lg:col-span-5">
            <div className="rounded-lg border border-border/40 bg-card/50 backdrop-blur-sm overflow-hidden shadow-xl shadow-black/20">

              <div className="flex items-center justify-between px-5 py-3 border-b border-border/35 bg-muted/15">
                <span className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-[0.2em]">
                  Capabilities
                </span>
                <span className="text-[10px] font-mono text-primary/80 uppercase tracking-widest">
                  v.10y
                </span>
              </div>

              <ul className="divide-y divide-border/25">
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <li
                      key={service.title}
                      className="flex items-center gap-4 px-5 py-4 hover:bg-primary/[0.03] transition-colors"
                      data-testid={`service-${service.title.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                    >
                      <span className="flex items-center justify-center w-9 h-9 rounded border border-border/40 bg-background/50 shrink-0">
                        <Icon className="w-4 h-4 text-primary" />
                      </span>
                      <div className="flex-1 min-w-0 text-[14px] font-medium text-foreground leading-tight">
                        {service.title}
                      </div>
                    </li>
                  );
                })}
              </ul>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
