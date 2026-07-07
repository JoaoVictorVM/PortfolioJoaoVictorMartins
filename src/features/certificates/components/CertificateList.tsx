import { useState, type CSSProperties } from "react";
import { usePreference } from "@/shared/hooks/usePreference";
import { groupCertificates } from "@/features/certificates/data/certificates";
import { cn } from "@/shared/lib/cn";

const certificateGroups = groupCertificates();

const TYPE_CHAR = 55;
const CASCADE_OVERLAP = 0.55;
const CASCADE_GAP = 80;

export function CertificateList() {
  const { language } = usePreference();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const seqDelayById = new Map<string, number>();
  let cascadeDelay = 0;
  for (const group of certificateGroups) {
    for (const certificate of group.certificates) {
      seqDelayById.set(certificate.id, cascadeDelay);
      cascadeDelay +=
        certificate.title[language].length * TYPE_CHAR * CASCADE_OVERLAP +
        CASCADE_GAP;
    }
  }

  return (
    <div>
      {certificateGroups.map((group) => (
        <div key={group.institution} className="mt-4 md:mt-0">
          {group.certificates.map((certificate, index) => {
            const isFirst = index === 0;
            const isLast = index === group.certificates.length - 1;
            const isDimmed = hoveredId !== null && hoveredId !== certificate.id;

            return (
              <div
                key={certificate.id}
                style={
                  {
                    "--seq-delay": `${String(seqDelayById.get(certificate.id) ?? 0)}ms`,
                    "--title-chars": certificate.title[language].length,
                    "--date-chars": certificate.date[language].length,
                  } as CSSProperties
                }
              >
                {isFirst && (
                  <p className="text-detail mb-3 pl-2 text-sm md:hidden">
                    {group.institution}
                  </p>
                )}
                <div
                  onMouseEnter={() => {
                    setHoveredId(certificate.id);
                  }}
                  onMouseLeave={() => {
                    setHoveredId(null);
                  }}
                  className={cn(
                    "grid-certificate text-detail hover:text-text/80 grid items-center gap-3 px-2 py-4 transition-colors md:px-0",
                    isFirst && "border-line border-t",
                  )}
                >
                  <span
                    className={cn(
                      "hidden text-sm md:block",
                      isFirst ? "text-detail opacity-100" : "opacity-0",
                    )}
                  >
                    {group.institution}
                  </span>
                  <span
                    className={cn(
                      "project-title col-span-2 text-sm font-normal transition-colors duration-150 sm:col-span-1",
                      isDimmed ? "text-detail" : "text-text",
                    )}
                  >
                    {certificate.title[language]}
                  </span>
                  <span className="project-date text-detail hidden text-right text-sm sm:block">
                    {certificate.date[language]}
                  </span>
                </div>
                {!isLast && <div className="project-line ml-6 md:ml-35" />}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
