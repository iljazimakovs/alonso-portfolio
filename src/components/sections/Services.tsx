const services = [
  {
    num: "01",
    title: "Embedded Firmware Development",
    description:
      "Reliable bare-metal and RTOS firmware in C/C++ for microcontroller-based products. Driver development, peripheral integration, low-power behavior, diagnostics, and maintainable architectures designed for long-term support.",
  },
  {
    num: "02",
    title: "Hardware & PCB Design",
    description:
      "Complete electronic hardware development from schematic capture through production-ready PCB release. Multi-layer boards, high-speed layouts, power design, mixed-signal systems, and manufacturable designs built for reliable deployment.",
  },
  {
    num: "03",
    title: "FPGA & Digital Systems",
    description:
      "FPGA and digital logic development for control, data acquisition, acceleration, and custom interfaces. Experience with Verilog, HLS workflows, AMD/Xilinx platforms, and mixed FPGA-embedded architectures.",
  },
  {
    num: "04",
    title: "Embedded Linux Systems",
    description:
      "Custom embedded Linux platforms using Yocto and Buildroot. Board bring-up, device tree configuration, peripheral enablement, boot optimization, and Linux integration for gateways, appliances, and edge devices.",
  },
  {
    num: "05",
    title: "Connectivity & IoT",
    description:
      "Connected product development across BLE, Wi-Fi, Ethernet, LoRa, CAN, and USB. Sensor gateways, remote monitoring devices, OTA update workflows, and secure field-connected systems.",
  },
  {
    num: "06",
    title: "Production & Bring-Up",
    description:
      "Hands-on support from first power-on through manufacturing release. Root-cause analysis, board rework guidance, validation, documentation, BOM review, and FCC / CE pre-compliance support.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 relative bg-card/15">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <div className="flex items-center gap-5 mb-8">
            <span className="text-[10px] font-mono text-muted-foreground/40 tracking-widest">0x0002</span>
            <div className="h-px flex-1 bg-border/35 max-w-[100px]" />
            <span className="text-[10px] font-mono text-primary font-semibold tracking-widest uppercase">Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6">
            What I build for you.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            End-to-end embedded engineering - from concept validation to certified, volume-ready product.
          </p>
        </div>

        {/* Vertical numbered service list */}
        <div className="divide-y divide-border/35 border-t border-border/35">
          {services.map((service) => (
            <div
              key={service.num}
              className="py-8 flex flex-col sm:flex-row gap-5 sm:gap-10 group"
              data-testid={`service-${service.num}`}
            >
              <span className="text-6xl font-display font-extrabold text-muted-foreground/15 group-hover:text-primary/30 transition-colors duration-300 shrink-0 leading-none select-none w-20">
                {service.num}
              </span>
              <div className="flex-1 pt-2">
                <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
