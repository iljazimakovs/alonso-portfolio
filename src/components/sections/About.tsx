const datasheetRows = [
  { label: "Experience",       value: "10+ years" },
  { label: "Projects Shipped", value: "50+ units" },
  { label: "MCU Platforms",    value: "STM32 · nRF · ESP · i.MX" },
  { label: "Certifications",   value: "FCC · CE · UL" },
  { label: "Protocols",        value: "BLE · Wi-Fi · LoRa · CAN" },
  { label: "Temp Range",       value: "−40 to +85 °C" },
];

export function About() {
  return (
    <section id="about" className="py-24 relative">

      {/* Full-width statement bar */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="flex items-center gap-5 mb-10">
          <span className="text-[10px] font-mono text-muted-foreground/40 tracking-widest">0x0001</span>
          <div className="h-px flex-1 bg-border/35" />
          <span className="text-[10px] font-mono text-primary font-semibold tracking-widest uppercase">About</span>
        </div>
        <blockquote className="text-2xl md:text-[2rem] lg:text-[2.4rem] font-display font-semibold text-foreground leading-[1.25] max-w-4xl">
          "I build things that work in the field —
          <span className="text-muted-foreground/70"> not just on the bench."</span>
        </blockquote>
      </div>

      {/* Asymmetric two-column layout */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0">

          {/* Left — narrow spec sheet column */}
          <div className="lg:w-64 shrink-0 lg:pr-12 lg:border-r lg:border-border/30">
            <p className="text-[10px] font-mono text-primary font-semibold tracking-widest uppercase mb-5">
              Technical Parameters
            </p>
            <div className="divide-y divide-border/25">
              {datasheetRows.map((row) => (
                <div key={row.label} className="py-3 flex flex-col gap-0.5">
                  <span className="text-[9px] font-mono text-muted-foreground/45 uppercase tracking-wider">
                    {row.label}
                  </span>
                  <span className="text-[12px] font-mono text-foreground/80">{row.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-border/25 space-y-2.5">
              <p className="text-[10px] font-mono text-primary font-semibold tracking-widest uppercase mb-4">
                Current Status
              </p>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shrink-0" />
                <span className="text-[11px] font-mono text-muted-foreground">Accepting new projects</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30 shrink-0" />
                <span className="text-[11px] font-mono text-muted-foreground">Response within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Right — wide bio column */}
          <div className="flex-1 lg:pl-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8 leading-tight">
              Alonso Rodriguez
            </h2>

            <div className="space-y-5 text-[15px] text-muted-foreground leading-[1.75]">
              <p>
                For over a decade I've been the engineer clients call when a design needs to work —
                not just prototype well, but survive production runs, compliance labs, and real-world
                operating conditions. My background spans the full embedded stack: schematic capture and
                multi-layer PCB layout, bare-metal C on resource-constrained MCUs, RTOS integration,
                Linux BSP, and everything in between.
              </p>
              <p>
                I've shipped BLE wearables, industrial IoT gateways, motor-control boards for robotics,
                and LoRa sensor networks — each with its own set of power, thermal, and certification
                constraints. For every project I take on, I own the deliverable from first bring-up all
                the way to factory handoff documentation.
              </p>
              <p>
                What separates my work is the discipline I bring after the design phase ends. Every
                driver I write has a test harness. Every board layout includes a programming jig plan.
                Every handoff package is complete enough for a contract manufacturer to run production
                without me in the room.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
