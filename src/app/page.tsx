import { Header } from "@/components/layout/header/header";
import { AboutSection } from "@/components/pages/home/about-section/aboutSection";
import { HeroSection } from "@/components/pages/home/hero-section/heroSection";
import { ProjectsSection } from "@/components/pages/home/projects-section/projectsSection";
import { ServicesSection } from "@/components/pages/home/services-section/servicesSection";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="h-screen flex flex-col items-center justify-center">
        <HeroSection />
      </section>
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
    </main>
  );
}