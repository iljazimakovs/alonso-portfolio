const services = [
  {
    num: "01",
    title: "Firmware Architecture",
    description:
      "Scalable bare-metal and RTOS solutions built for longevity. From hardware abstraction layers to deterministic state machines, every line of code is production-tested and maintainable by the next engineer on the project.",
  },
  {
    num: "02",
    title: "Linux BSP Development",
    description:
      "Tailored Yocto and Buildroot distributions with custom kernel drivers, optimized boot sequences, and hardened security configurations. I've brought up BSPs for i.MX, AM3x, and Rockchip platforms for production systems.",
  },
  {
    num: "03",
    title: "Wireless & Connectivity",
    description:
      "End-to-end wireless integration across BLE, Wi-Fi 6, LoRaWAN, and cellular LTE/5G. Secure protocol stacks, OTA update pipelines, and fleet management tooling are standard deliverables, not afterthoughts.",
  },
  {
    num: "04",
    title: "PCB Engineering",
    description:
      "Multi-layer board design from schematic through manufacturing release. Signal integrity analysis, power integrity simulation, thermal management, and DFM optimization so the board you design is the board that ships.",
  },
  {
    num: "05",
    title: "System Integration & Bring-Up",
    description:
      "Systematic validation from first power-on through full-system qualification. JTAG bring-up, protocol analyzer capture, automated test harnesses, and the documentation your CM needs to run production confidently.",
  },
  {
    num: "06",
    title: "Compliance & Manufacturing",
    description:
      "Pre-compliance RF testing, FCC/CE/UL certification support, and factory programming workflow design. I've shepherded a dozen products through regulatory approval and helped clients avoid the costly late-stage redesign trap.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 relative bg-card/15">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

          {/* Left - sticky heading block */}
          <div className="lg:w-60 shrink-0">
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] font-mono text-muted-foreground/40 tracking-widest">0x0002</span>
                <div className="h-px w-8 bg-border/40" />
                <span className="text-[10px] font-mono text-primary font-semibold tracking-widest uppercase">Services</span>
              </div>
              <h2 className="font-display font-bold text-foreground leading-snug mb-4">
                <span className="block text-lg font-medium text-muted-foreground">What I</span>
                <span className="block text-4xl">Build</span>
                <span className="block text-lg font-medium text-muted-foreground">For You</span>
              </h2>
              <p className="text-[13px] text-muted-foreground leading-relaxed">
                End-to-end embedded engineering - from concept validation to certified, volume-ready product.
              </p>
            </div>
          </div>

          {/* Right - vertical numbered service list */}
          <div className="flex-1 divide-y divide-border/35">
            {services.map((service) => (
              <div
                key={service.num}
                className="py-8 flex flex-col sm:flex-row gap-5 sm:gap-8 group"
              >
                <span className="text-5xl font-display font-extrabold text-muted-foreground/10 group-hover:text-primary/15 transition-colors duration-300 shrink-0 leading-none select-none">
                  {service.num}
                </span>
                <div className="flex-1 pt-1">
                  <h3 className="text-base font-display font-bold text-foreground mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-[13.5px] text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
