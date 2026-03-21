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
    <section className="relative min-h-screen flex flex-col pt-20 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-grid-pattern-lg pointer-events-none opacity-35" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="relative z-10 flex-1 flex flex-col max-w-7xl mx-auto px-6 w-full">

        {/* Top status bar */}
        <div className="flex items-center justify-between py-7 border-b border-border/25">
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

        {/* Main headline — large staggered typography */}
        <div className="flex-1 flex flex-col justify-center py-10 lg:py-0">
          <h1 className="font-display font-extrabold leading-[0.9] tracking-tight mb-12">
            <span className="block text-foreground" style={{ fontSize: "clamp(3.2rem, 9.5vw, 7.5rem)" }}>
              Firmware.
            </span>
            <span className="block text-foreground pl-[10vw] lg:pl-48" style={{ fontSize: "clamp(3.2rem, 9.5vw, 7.5rem)" }}>
              Hardware.
            </span>
            <span className="block text-primary" style={{ fontSize: "clamp(3.2rem, 9.5vw, 7.5rem)" }}>
              Delivered.
            </span>
          </h1>

          {/* Bottom content row */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end gap-10 lg:gap-16 pt-8 border-t border-border/25">

            {/* Description */}
            <div className="flex-1 max-w-lg">
              <p className="text-[15px] text-muted-foreground leading-relaxed">
                Ten years turning complex requirements into certified, shippable embedded systems —
                from bare-metal firmware and multi-layer PCBs to factory-ready production handoffs.
              </p>
            </div>

            {/* Boot console */}
            <div className="hidden lg:block w-[390px] shrink-0">
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

      </div>
    </section>
  );
}
