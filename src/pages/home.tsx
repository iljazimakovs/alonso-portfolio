import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";
import { Project } from "@/components/sections/Project";
import { Industries } from "@/components/sections/Industries";
import { Footer } from "@/components/sections/Footer";

export default function Home({ projectSlug, categorySlug, recommendedIds }: { projectSlug?: string; categorySlug?: string; recommendedIds?: string }) {
  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col overflow-x-hidden">

      <Navbar />

      <main className="relative flex-1">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Project initialSlug={projectSlug} initialCategory={categorySlug} initialRecommendedIds={recommendedIds} />
        <Industries />
      </main>

      <Footer />
    </div>
  );
}
