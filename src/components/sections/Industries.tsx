const industries = [
  {
    name: "Industrial Manufacturing",
    description: "Factory floor automation, PLC integration, and ruggedized sensor nodes operating in high-vibration, high-EMI environments.",
    protocols: "Modbus · RS-485 · EtherCAT",
  },
  {
    name: "Healthcare & Medical",
    description: "FDA Class II device support, IEC 62304 documentation, biomedical sensor integration, and BLE data pipelines to clinical apps.",
    protocols: "BLE · ISO 13485 · IEC 62304",
  },
  {
    name: "Automotive & EV",
    description: "Body control modules, battery management systems, and powertrain interfaces designed to AEC-Q100 component grades.",
    protocols: "CAN-FD · LIN · ISO 26262",
  },
  {
    name: "Consumer Electronics",
    description: "High-volume hardware with aggressive cost targets, tight DFM constraints, and CE / FCC regulatory paths I've navigated before.",
    protocols: "USB-C · SPI · I²C · BLE",
  },
  {
    name: "Defense & Aerospace",
    description: "COTS board design for SWAP-constrained platforms with MIL-spec component selection and environmental stress screening.",
    protocols: "MIL-STD-461 · ARINC 429",
  },
];

export function Industries() {
  return (
    <section id="industries" className="py-12 lg:py-24 relative bg-card/15">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-center gap-5 mb-16">
          <span className="text-[10px] font-mono text-muted-foreground/40 tracking-widest">0x0005</span>
          <span className="text-[10px] font-mono text-primary font-semibold tracking-widest uppercase">Sectors</span>
          <div className="h-px flex-1 bg-border/35" />
          <h2 className="text-base font-display font-bold text-foreground whitespace-nowrap">
            Industry Experience
          </h2>
        </div>

        {/* Asymmetric industry grid — 2-col left wide, 3-col right narrower */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-border/30 rounded-lg overflow-hidden border border-border/30">
          {industries.map((ind, i) => (
            <div
              key={ind.name}
              className={`bg-background px-6 py-7 flex flex-col gap-3 hover:bg-card/40 transition-colors duration-200 ${
                i === industries.length - 1 && industries.length % 3 !== 0 ? "md:col-span-1" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-[13px] font-display font-bold text-foreground leading-snug">
                  {ind.name}
                </h3>
              </div>
              <p className="text-[12px] text-muted-foreground/70 leading-relaxed flex-1">
                {ind.description}
              </p>
              <p className="text-[10px] font-mono text-primary/70 tracking-wider mt-1">
                {ind.protocols}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
