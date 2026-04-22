import { Github } from "lucide-react";

const bootLines = [
  { ts: "0.000", text: "boot: power-on sequence start", highlight: false },
  { ts: "0.012", text: "power_init: rails stable, reset released", highlight: false },
  { ts: "0.025", text: "clock_init: system clocks locked", highlight: false },
  { ts: "0.039", text: "hw_detect: core peripherals enumerated", highlight: false },
  { ts: "0.055", text: "storage_init: flash / eMMC online", highlight: false },
  { ts: "0.071", text: "firmware_init: drivers + RTOS ready", highlight: false },
  { ts: "0.088", text: "linux_init: BSP handoff complete", highlight: false },
  { ts: "0.104", text: "io_init: USB / CAN / ETH active", highlight: false },
  { ts: "0.121", text: "self_test: PASS (system validated)", highlight: true },
  { ts: "0.146", text: "system: ready for operation", highlight: true },
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "30+", label: "Boards Delivered" },
  { value: "8+", label: "MCU / FPGA Platforms" },
  { value: "CE/FCC", label: "Compliance Support" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col pt-20 overflow-x-hidden bg-background">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(60, 200, 100, 0.18) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(60, 200, 100, 0.18) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 70% 80% at 50% 15%, black 25%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 80% at 50% 15%, black 25%, transparent 100%)",
        }}
      />

      <div className="relative z-10 flex-1 flex flex-col max-w-7xl mx-auto px-6 w-full">

        {/* Top status bar */}
        <div className="flex items-center justify-between py-6 border-b border-border/25">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[11px] font-mono text-muted-foreground/70 tracking-[0.2em] uppercase">
              AR_SYS · Senior Embedded Engineer
            </span>
          </div>
          <a
            href="https://github.com/alonsoo-rodriguez"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View GitHub Profile"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-primary/40 bg-primary/10 text-[11px] font-mono text-primary hover:bg-primary/20 hover:border-primary/70 transition-all duration-200"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </div>

        {/* Main content - two-column on desktop, stacked on mobile */}
        <div className="flex-1 flex flex-col lg:flex-row gap-10 lg:gap-14 py-10 lg:py-12">

          {/* Left column - headline · description · stats */}
          <div className="flex flex-col justify-between gap-8 flex-1 min-w-0">

            {/* Headline */}
            <h1 className="font-display font-extrabold leading-[1.05] tracking-tight">
              <span className="block text-foreground" style={{ fontSize: "clamp(2.6rem, 7vw, 7rem)" }}>
                Firmware.
              </span>
              <span className="block text-foreground pl-[8vw] lg:pl-32" style={{ fontSize: "clamp(2.6rem, 7vw, 7rem)" }}>
                Hardware.
              </span>
              <span className="block text-primary" style={{ fontSize: "clamp(2.6rem, 7vw, 7rem)" }}>
                Delivered.
              </span>
            </h1>

            {/* Description */}
            <div>
              <p className="text-[15px] text-muted-foreground leading-[2] max-w-lg">
                Firmware, hardware & PCB design, FPGA systems, embedded Linux, and connected devices. Ten years of hands-on embedded work from first bring-up through compliance testing and CM handoff. I cover the full hardware and software stack on the same project.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-2 lg:gap-3 pt-6 border-t border-border/25">
              {stats.map((s) => (
                <div
                  key={s.value}
                  className="flex flex-col items-center justify-center py-3 rounded-lg border border-border/35 bg-card/40 backdrop-blur-sm text-center gap-0.5"
                >
                  <span className="font-mono font-bold text-primary text-sm lg:text-base leading-none">
                    {s.value}
                  </span>
                  <span className="font-mono text-[9px] lg:text-[10px] text-muted-foreground/60 uppercase tracking-wide leading-tight">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right column - boot console, visible on all screens */}
          <div className="lg:w-[380px] shrink-0 flex flex-col justify-center">
            <div className="rounded-lg border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden shadow-xl shadow-black/20">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/35 bg-muted/15">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-widest">
                    uart0 · boot console
                  </span>
                </div>
                <span className="text-[10px] font-mono text-muted-foreground/35">115200 baud</span>
              </div>
              <div className="p-4 font-mono text-[10.5px] leading-relaxed space-y-0.5">
                {bootLines.map((line) => (
                  <div key={line.ts} className="flex items-start gap-3">
                    <span className="text-muted-foreground/40 shrink-0 w-11 text-right">[{line.ts}]</span>
                    <span className={line.highlight ? "text-primary" : "text-muted-foreground/75"}>
                      {line.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
