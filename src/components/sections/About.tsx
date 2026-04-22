import profilePhoto from "/images/photo.png";

const datasheetRows = [
  { label: "Core Domains", value: "Firmware · Hardware · PCB Design · FPGA · Embedded Linux · IoT" },
  { label: "RTOS", value: "FreeRTOS · Zephyr · ThreadX" },
  { label: "Toolchain", value: "GCC · IAR · LLVM · Keil" },
  { label: "Debug I/F", value: "JTAG · SWD · ETM Trace · Logic Analysis" },
  { label: "PCB Capability", value: "2 → 16-layer HDI · High-Speed Routing · SI / EMI Aware Design" },
  { label: "Platforms", value: "ARM Cortex-M · STM32 · ESP32 · NXP · AMD/Xilinx FPGA · Embedded Linux SoCs" },
  { label: "Protocols", value: "UART · SPI · I²C · USB · CAN · BLE · Ethernet · Wi-Fi" },
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
          "Most of the interesting problems in embedded work show up
          <span className="text-muted-foreground/70"> after the prototype passes."</span>
        </blockquote>
      </div>

      {/* Asymmetric two-column layout */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0">

          {/* Left - narrow spec sheet column */}
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

          {/* Right - wide bio column */}
          <div className="flex-1 lg:pl-16">

            {/* Profile header - photo + name */}
            <div className="flex items-center gap-8 mb-10">
              <div className="relative shrink-0">
                <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-primary/40 ring-4 ring-primary/10 shadow-xl shadow-black/40">
                  <img
                    src={profilePhoto}
                    alt="Alonso Fernandez"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <span className="absolute bottom-2 right-2 w-3.5 h-3.5 rounded-full bg-primary border-2 border-background shadow" title="Available" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight">
                  Alonso Fernandez
                </h2>
                <p className="text-[11px] font-mono text-primary tracking-widest uppercase mt-2">
                  Senior Embedded Systems Engineer
                </p>
              </div>
            </div>

            <div className="space-y-5 text-[15px] text-muted-foreground leading-[1.75]">
              <p>
                I'm a senior embedded systems engineer with over ten years of experience
                developing products from concept through production. My main areas are
                firmware development, hardware design, PCB design, FPGA / digital systems,
                embedded Linux, and system integration. I support projects across
                architecture, prototype bring-up, validation, and manufacturing handoff.
              </p>

              <p>
                I've worked across industrial electronics, IoT devices, connected sensors,
                control systems, battery powered products, consumer devices, and custom
                embedded platforms for startups, product companies, and engineering teams.
              </p>

              <div className="pt-1">
                <h4 className="text-foreground font-medium mb-3">Core Services</h4>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Embedded firmware development (C / C++)</li>
                  <li>Hardware design and schematic capture</li>
                  <li>Multi-layer PCB design and production files</li>
                  <li>FPGA / digital system development</li>
                  <li>Embedded Linux bring-up and integration</li>
                  <li>Prototype bring-up and debugging</li>
                  <li>Manufacturing handoff and documentation</li>
                  <li>FCC / CE pre-compliance support</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
