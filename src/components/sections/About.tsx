import profilePhoto from "/images/photo.png";

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

      {/* Photo + bio side by side */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-14">

          {/* Left - profile photo */}
          <div className="relative shrink-0">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-primary/40 ring-4 ring-primary/10 shadow-xl shadow-black/40">
              <img
                src={profilePhoto}
                alt="Alonso Fernandez"
                className="w-full h-full object-cover object-top"
                data-testid="img-profile"
              />
            </div>
            <span
              className="absolute bottom-3 right-3 w-3.5 h-3.5 rounded-full bg-primary border-2 border-background shadow"
              title="Available"
            />
          </div>

          {/* Right - name + bio */}
          <div className="flex-1 min-w-0 text-center md:text-left">
            <h2
              className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight"
              data-testid="text-name"
            >
              Alonso Fernandez
            </h2>
            <p className="text-[13px] font-mono text-primary tracking-widest uppercase mt-3 mb-7">
              Senior Embedded Systems Engineer
            </p>

            <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-[1.75]">
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
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
