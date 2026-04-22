const categories = [
    {
    name: "Embedded Firmware",
    reg: "REG_FW",
    tags: [
      "C / C++", "FreeRTOS", "Zephyr",
      "Bare-Metal Systems", "HAL / BSP Drivers",
      "Bootloader Design", "Low-Power Optimization",
    ],
  },
  {
    name: "Hardware & PCB",
    reg: "REG_HW",
    tags: [
      "Altium Designer", "KiCad", "Multi-Layer PCB",
      "High-Speed Layout", "Power Design",
      "EMI / EMC", "DFM / DFA",
    ],
  },
  {
    name: "Embedded Linux",
    reg: "REG_LNX",
    tags: [
      "Yocto Project", "Buildroot",
      "Device Tree", "Kernel Configuration",
      "U-Boot", "System Services",
      "Board Bring-Up",
    ],
  },
  {
    name: "Connectivity & IoT",
    reg: "REG_NET",
    tags: [
      "Bluetooth LE", "Wi-Fi", "Ethernet",
      "LoRa", "CAN Bus", "USB",
      "MQTT / Cloud Integration",
    ],
  },
  {
    name: "Bring-Up & Production",
    reg: "REG_PRD",
    tags: [
      "Prototype Debug", "JTAG / SWD",
      "Oscilloscope Analysis", "Board Rework",
      "Manufacturing Handoff", "Test Fixtures",
      "FCC / CE Support",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Inline section header */}
        <div className="flex items-center gap-5 mb-16">
          <span className="text-[10px] font-mono text-muted-foreground/40 tracking-widest">0x0004</span>
          <span className="text-[10px] font-mono text-primary font-semibold tracking-widest uppercase">Expertise</span>
          <div className="h-px flex-1 bg-border/35" />
          <h2 className="text-base font-display font-bold text-foreground whitespace-nowrap">
            Technology Stack
          </h2>
        </div>

        {/* Register-file style table — category left, tags right */}
        <div className="divide-y divide-border/30">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="flex flex-col sm:flex-row gap-5 sm:gap-10 py-7 group"
            >
              {/* Category label */}
              <div className="sm:w-44 shrink-0 pt-0.5">
                <p className="text-[11px] font-mono text-primary font-semibold tracking-widest uppercase">
                  {cat.name}
                </p>
                <p className="text-[9px] font-mono text-muted-foreground/35 mt-1 tracking-wider">
                  {cat.reg}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 flex-1">
                {cat.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center font-mono text-[11px] text-muted-foreground/75 border border-border/50 bg-background/50 rounded px-2.5 py-1 hover:border-primary/30 hover:text-foreground/80 transition-colors duration-150"
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
