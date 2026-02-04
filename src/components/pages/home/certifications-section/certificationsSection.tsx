import { InfiniteMarquee } from "@/components/ui/infiniteMarquee";
import { TECHNOLOGIES } from "@/lib/tec-data";
import { FeaturesList } from "./featuresList";
import { CertificationsCard } from "./certificationCard";

export function CertificationsSection() {
  return (
    <section id="certificados" className="py-16 md:py-24 px-4 ">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-0">
            Domínio das{" "}
            <span className="bg-gradient-to-br from-[var(--cor-primaria-1)] via-[var(--cor-primaria-1)] to-[var(--cor-primaria-4)] bg-clip-text text-transparent">
              principais
            </span>{" "}
            tecnologias do mercado
          </h2>
        </div>
        <div className="mb-12">
          <InfiniteMarquee technologies={TECHNOLOGIES} speed="normal" />
        </div>

        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-50">
            <FeaturesList />

            <CertificationsCard />
          </div>
        </div>
      </div>
    </section>
  );
}
