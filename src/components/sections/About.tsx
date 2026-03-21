const datasheetRows = [
  { label: "Experience",       value: "10+ years" },
  { label: "Projects Shipped", value: "50+ units" },
  { label: "MCU Platforms",    value: "STM32, nRF, ESP, i.MX" },
  { label: "Certifications",   value: "FCC, CE, UL" },
  { label: "Protocols",        value: "BLE, Wi-Fi, LoRa, CAN" },
  { label: "Temp Range",       value: "-40 to +85 °C" },
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono text-muted-foreground/50 tracking-widest">0x0001</span>
          <span className="text-xs font-mono text-primary font-semibold tracking-widest uppercase">About</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-12">
          Who I Am
        </h2>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* Left — bio */}
          <div className="flex-1 space-y-6 text-muted-foreground leading-relaxed text-base">
            <p>
              I'm Alonso Rodriguez, a senior embedded engineer who has spent the last ten-plus years
              solving hard problems at the boundary of hardware and software. I've taken dozens of
              products from first schematic capture all the way through regulatory approval and factory line
              bring-up.
            </p>
            <p>
              My day-to-day ranges from writing tight C on resource-constrained MCUs to configuring
              Yocto layers for application-class processors. I've shipped BLE wearables, industrial IoT
              gateways, motor-control boards for robotics, and LoRa sensor networks, each with its own set
              of power, thermal, and compliance constraints.
            </p>
            <p>
              What sets my work apart is a deep respect for what happens after hand-off. Every driver I
              write has a test harness, every board I lay out has a programming jig plan, and every
              deliverable package includes the documentation a contract manufacturer needs to run without
              me in the room.
            </p>
          </div>

          {/* Right — datasheet + availability */}
          <div className="lg:w-80 flex-shrink-0 space-y-6">

            {/* Datasheet card */}
            <div className="rounded-lg border border-border/50 bg-card/60 overflow-hidden">
              {/* Card header */}
              <div className="px-5 py-3 border-b border-border/50">
                <span className="text-xs font-mono text-primary font-semibold tracking-widest uppercase">
                  Datasheet — Key Parameters
                </span>
              </div>

              {/* Rows */}
              <div className="divide-y divide-border/40">
                {datasheetRows.map((row) => (
                  <div key={row.label} className="flex items-center justify-between px-5 py-3">
                    <span className="text-xs font-mono text-muted-foreground/70">{row.label}</span>
                    <span className="text-xs font-mono text-foreground/90 text-right">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability — plain, no card */}
            <div className="space-y-3">
              <p className="text-xs font-mono text-primary font-semibold tracking-widest uppercase">
                Availability
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span className="text-sm font-mono text-muted-foreground">Accepting new projects</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span className="text-sm font-mono text-muted-foreground">Response within 24h</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
