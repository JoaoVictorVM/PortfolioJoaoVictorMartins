import { companies } from '@/lib/certifications-data';
import { CertificationCard } from './CertificationCard';

export function CertificationsSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-[var(--cor-escuro-1)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {companies.map((company) => (
            <div key={company.name} className="h-full">
              <CertificationCard company={company} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
