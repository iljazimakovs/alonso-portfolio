const services = [
  {
    num: "02",
    title: "Embedded Firmware Development",
    description:
      "Reliable bare-metal and RTOS firmware in C/C++ for microcontroller-based products. Driver development, peripheral integration, low-power behavior, diagnostics, and maintainable architectures designed for long-term support.",
  },
  {
    num: "01",
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
