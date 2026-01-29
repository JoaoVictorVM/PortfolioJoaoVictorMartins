import { Footer } from "@/components/layout/footer/footer";
import { Header } from "@/components/layout/header/header";
import { AboutSection } from "@/components/pages/home/about-section/aboutSection";
import { CertificationsSection } from "@/components/pages/home/certifications-section/certificationsSection";
import { CtaSection } from "@/components/pages/home/cta-section/ctaSection";
import { HeroSection } from "@/components/pages/home/hero-section/heroSection";
import { ProjectsSection } from "@/components/pages/home/projects-section/projectsSection";
import { ServicesSection } from "@/components/pages/home/services-section/servicesSection";
import { SectionDivider } from "@/components/ui/sectionDivider";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="h-screen flex flex-col items-center">
          <div className="flex-1 flex items-center justify-center">
            <HeroSection />
          </div>
          <SectionDivider text="SCROLL" />
        </section>
        <AboutSection />
        <SectionDivider text="PROJETOS" />
        <ProjectsSection />
        <ServicesSection />
        <CertificationsSection />
        <CtaSection />
        <Footer />
      </main>
    </>
  );
}