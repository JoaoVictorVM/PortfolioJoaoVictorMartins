import { Footer } from "@/components/layout/footer/footer";
import { Header } from "@/components/layout/header/header";
import { AboutSection } from "@/components/pages/home/about-section/aboutSection";
import { CertificationsSection } from "@/components/pages/home/certifications-section/certificationsSection";
import { CtaSection } from "@/components/pages/home/cta-section/ctaSection";
import { HeroSection } from "@/components/pages/home/hero-section/heroSection";
import { ProjectsSection } from "@/components/pages/home/projects-section/projectsSection";
import { ServicesSection } from "@/components/pages/home/services-section/servicesSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="h-screen flex flex-col items-center justify-center">
          <HeroSection />
        </section>
        <AboutSection />
        <ProjectsSection />
        <ServicesSection />
        <CertificationsSection />
        <CtaSection />
        <Footer />
      </main>
    </>
  );
}