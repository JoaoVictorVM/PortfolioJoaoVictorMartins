import { CompanyCertifications } from '@/lib/certifications-data';
import { CertificationListItem } from './CertificationListItem';

interface Props {
  company: CompanyCertifications;
}

export function CertificationCard({ company }: Props) {
  return (
    <article className="rounded-lg border border-white/6 bg-[var(--cor-escuro-5)] h-full flex flex-col">
      {/* colored top stripe */}
      <div
        className="h-1 rounded-t-md"
        style={{ backgroundColor: company.accentColor ?? '#444' }}
      />

      <div className="p-4 flex-1 flex flex-col">
        <div className="mb-4 flex items-center justify-center">
          <img src={company.logo} alt={company.name} className="h-8" />
        </div>

        <div className="w-full h-px bg-white/10 mb-4 rounded" aria-hidden="true" />

        <ul className="flex-1 space-y-3 overflow-visible">
          {company.items.map((it) => (
            <CertificationListItem key={it.title} title={it.title} />
          ))}
        </ul>
      </div>
    </article>
  );
}
