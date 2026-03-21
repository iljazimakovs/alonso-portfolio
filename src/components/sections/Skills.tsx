const categories = [
  {
    name: "Firmware & RTOS",
    reg: "REG_FW",
    tags: [
      "C/C++", "FreeRTOS", "Zephyr RTOS",
      "HAL/BSP Drivers", "Bootloader Design",
      "OTA Frameworks", "Memory Optimization",
    ],
  },
  {
    name: "Linux Platforms",
    reg: "REG_LNX",
    tags: [
      "Yocto Project", "Buildroot",
      "Device Tree Overlays", "Kernel Development",
      "U-Boot Config", "Systemd Services",
      "Shell Automation",
    ],
  },
  {
    name: "Wireless Protocols",
    reg: "REG_RF",
    tags: [
      "Bluetooth LE", "Wi-Fi 6", "LoRaWAN", "MQTT/CoAP",
      "TLS/DTLS", "Protocol Buffers", "Cellular (LTE/5G)",
    ],
  },
  {
    name: "PCB & Hardware",
    reg: "REG_HW",
    tags: [
      "Altium Designer", "KiCad", "High-Speed Layout",
      "Power Integrity", "EMC Design", "DFM/DFA",
      "Component Engineering",
    ],
  },
  {
    name: "Validation & Test",
    reg: "REG_TST",
    tags: [
      "JTAG/SWD Debug", "Oscilloscope Analysis",
      "Protocol Analyzers", "Automated Test",
      "CI/CD Pipelines", "Environmental Testing",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono text-muted-foreground/50 tracking-widest">0x0004</span>
          <span className="text-xs font-mono text-primary font-semibold tracking-widest uppercase">Expertise</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-12">
          Technology Stack
        </h2>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="rounded-lg border border-border/60 bg-card/50 p-5 flex flex-col gap-4"
            >
              {/* Card header */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-primary font-semibold tracking-widest uppercase">
                  {cat.name}
                </span>
                <span className="text-[10px] font-mono text-muted-foreground/40 tracking-wider">
                  {cat.reg}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {cat.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center font-mono text-[11px] text-muted-foreground/80 border border-border/60 bg-background/40 rounded px-2.5 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
