import { Github } from "lucide-react";

const bootLines = [
  { ts: "0.000", text: "firmware_init: HAL v3.2.1 loaded", highlight: false },
  { ts: "0.012", text: "clock_config: PLL locked @ 168MHz", highlight: false },
  { ts: "0.024", text: "gpio_init: 48 pins configured", highlight: false },
  { ts: "0.031", text: "spi_init: flash detected (W25Q128)", highlight: false },
  { ts: "0.048", text: "rtos_start: FreeRTOS v10.5.1", highlight: false },
  { ts: "0.063", text: "net_stack: lwIP initialized", highlight: false },
  { ts: "0.088", text: "ble_init: nRF52840 stack ready", highlight: false },
  { ts: "0.102", text: "watchdog: 8s timeout armed", highlight: false },
  { ts: "0.118", text: "self_test: PASS (all subsystems)", highlight: true },
  { ts: "0.155", text: "system: ready – awaiting commands", highlight: true },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Grid pattern — scoped to Hero only, larger cells */}
      <div className="absolute inset-0 bg-grid-pattern-lg pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/40 to-background pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left column */}
          <div className="flex-1 flex flex-col items-start">
            {/* Badge */}
            <div className="flex items-center gap-2 mb-8 border border-border/60 rounded-full px-4 py-1.5 bg-card/40 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-mono text-muted-foreground tracking-[0.18em] uppercase">
                Senior Embedded Engineer
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold leading-[1.05] mb-6">
              <span className="text-foreground block">Precision-Engineered</span>
              <span className="text-primary block">Embedded Systems</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-md leading-relaxed mb-8">
              From bare-metal firmware to certified hardware, I turn complex
              requirements into robust, shippable systems ready for the factory
              floor.
            </p>

            {/* GitHub CTA */}
            <a
              href="https://github.com/alonsoo-rodriguez"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View GitHub Profile"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg border border-border/60 bg-card/50 hover:bg-card hover:border-primary/40 text-sm font-mono text-muted-foreground hover:text-foreground transition-all duration-200 backdrop-blur-sm"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Right column — Boot console */}
          <div className="hidden lg:block flex-shrink-0 w-[420px]">
            <div className="rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm overflow-hidden shadow-2xl shadow-black/40">
              {/* Console title bar */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/50 bg-muted/20">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                    Boot Console
                  </span>
                </div>
                <span className="text-[10px] font-mono text-muted-foreground/50">
                  uart0 @ 115200
                </span>
              </div>

              {/* Console output */}
              <div className="p-4 font-mono text-[11px] leading-relaxed space-y-0.5">
                {bootLines.map((line) => (
                  <div key={line.ts} className="flex items-start gap-3">
                    <span className="text-muted-foreground/40 shrink-0 w-12 text-right">
                      [{line.ts}]
                    </span>
                    <span className={line.highlight ? "text-primary font-medium" : "text-muted-foreground/70"}>
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
