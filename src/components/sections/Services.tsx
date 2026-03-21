const services = [
  {
    num: "01",
    title: "Firmware Architecture",
    description:
      "Scalable bare-metal and RTOS solutions built for longevity. From hardware abstraction layers to deterministic state machines, every line of code is production-tested.",
  },
  {
    num: "02",
    title: "Linux BSP Development",
    description:
      "Tailored Yocto and Buildroot distributions with custom kernel drivers, optimized boot sequences, and hardened security configurations for embedded platforms.",
  },
  {
    num: "03",
    title: "Wireless & Connectivity",
    description:
      "End-to-end wireless solutions across BLE, Wi-Fi, LoRa, and cellular. Implementing secure protocols with OTA update frameworks for fleet management.",
  },
  {
    num: "04",
    title: "PCB Engineering",
    description:
      "Multi-layer board design from schematic through manufacturing. Signal integrity analysis, thermal management, and DFM optimization for volume production.",
  },
  {
    num: "05",
    title: "System Integration",
    description:
      "Bridging hardware and software from first power-on. Systematic validation using JTAG, protocol analyzers, and automated test frameworks.",
  },
  {
    num: "06",
    title: "Compliance & Manufacturing",
    description:
      "Navigating regulatory certification (FCC, CE, UL) and establishing factory programming workflows for reliable scale production.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono text-muted-foreground/50 tracking-widest">0x0002</span>
          <span className="text-xs font-mono text-primary font-semibold tracking-widest uppercase">What I Do</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-12">
          Engineering Services
        </h2>

        {/* 3×2 bordered grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-t border-border/50">
          {services.map((service) => (
            <div
              key={service.num}
              className="border-r border-b border-border/50 p-8 flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono text-muted-foreground/40 leading-none">
                  {service.num}
                </span>
                <h3 className="text-base font-display font-bold text-foreground leading-snug">
                  {service.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
