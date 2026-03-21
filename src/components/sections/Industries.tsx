const industries = [
  {
    name: "Industrial Manufacturing",
    protocols: "Modbus / RS-485",
  },
  {
    name: "Healthcare & Medical Devices",
    protocols: "BLE / ISO 13485",
  },
  {
    name: "Automotive & EVs",
    protocols: "CAN / LIN",
  },
  {
    name: "Consumer Electronics",
    protocols: "USB / SPI",
  },
  {
    name: "Defense & Aerospace",
    protocols: "MIL-STD / ARINC",
  },
];

export function Industries() {
  return (
    <section id="industries" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono text-muted-foreground/50 tracking-widest">0x0005</span>
          <span className="text-xs font-mono text-primary font-semibold tracking-widest uppercase">Sectors</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-12">
          Industry Experience
        </h2>

        {/* 5-card horizontal row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="rounded-lg border border-border/60 bg-card/50 p-5 flex flex-col gap-3"
            >
              <h3 className="text-sm font-display font-bold text-foreground leading-snug">
                {ind.name}
              </h3>
              <p className="text-xs font-mono text-muted-foreground/60">
                {ind.protocols}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
