import profilePhoto from "/images/photo.png";

const datasheetRows = [
  { label: "Experience",       value: "10+ years" },
  { label: "Projects Shipped", value: "50+ units" },
  { label: "MCU Platforms",    value: "STM32 · nRF · ESP · i.MX" },
  { label: "Protocols",        value: "BLE · Wi-Fi · LoRa · CAN" },
  { label: "Temp Range",       value: "−40 to +85 °C" },
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
          "Most of the interesting problems in embedded work happen
          <span className="text-muted-foreground/70"> after the prototype passes."</span>
        </blockquote>
      </div>

      {/* Asymmetric two-column layout */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0">

          {/* Left — narrow spec sheet column */}
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

          {/* Right — wide bio column */}
          <div className="flex-1 lg:pl-16">

            {/* Profile header — photo + name */}
            <div className="flex items-center gap-8 mb-10">
              <div className="relative shrink-0">
                <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-primary/40 ring-4 ring-primary/10 shadow-xl shadow-black/40">
                  <img
                    src={profilePhoto}
                    alt="Alonso Rodriguez"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <span className="absolute bottom-2 right-2 w-3.5 h-3.5 rounded-full bg-primary border-2 border-background shadow" title="Available" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight">
                  Alonso Rodriguez
                </h2>
                <p className="text-[11px] font-mono text-primary tracking-widest uppercase mt-2">
                  Senior Embedded Systems Engineer
                </p>
              </div>
            </div>

            <div className="space-y-5 text-[15px] text-muted-foreground leading-[1.75]">
              <p>
                I've been working in embedded systems for about ten years, mostly on projects that
                reach production. Day-to-day that means writing firmware in C and C++ for Cortex-M
                targets — STM32, nRF52, ESP32 — bringing up embedded Linux on custom hardware using
                Yocto or Buildroot, and doing schematic capture and multi-layer PCB layout in KiCad
                myself rather than handing it off. Most clients come to me because they need one
                engineer who can work across both sides of the board.
              </p>
              <p>
                I've worked on BLE health monitors, industrial IoT gateways, LoRa sensor networks,
                and a few motor-control boards — mostly for startups and small engineering teams without
                an embedded specialist on staff. Projects usually involve first-article builds, which
                means dealing with bring-up issues, board rework, and the back-and-forth that comes
                before anything stabilises. I'm used to that part.
              </p>
              <p>
                On the firmware side I write layered code with a hardware abstraction layer so the
                application logic stays portable and testable. For PCB work I do my own DFM checks
                before sending files to fab and keep the CM in the loop early. If a project needs
                FCC or CE testing, I can write the test plan, coordinate with the lab, and handle
                remediation. Handoff packages include schematics, BOM, firmware build instructions,
                and programming jig specs — enough for a CM to run production independently.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
