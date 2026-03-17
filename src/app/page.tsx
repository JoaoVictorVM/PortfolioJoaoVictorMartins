import { AboutSection } from "@/components/pages/home/about-section/aboutSection";
import { CertificationsSection } from "@/components/pages/home/certifications-section/certificationsSection";
import { CtaSection } from "@/components/pages/home/cta-section/ctaSection";
import { IntroSection } from "@/components/pages/home/intro-section/introSection";
import { ProjectsSection } from "@/components/pages/home/projects-section/projectsSection";
import { ServicesSection } from "@/components/pages/home/services-section/servicesSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <IntroSection />
    </main>
  );
}
