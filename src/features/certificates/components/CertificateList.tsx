import { useState } from "react";
import { usePreference } from "@/shared/hooks/usePreference";
import { groupCertificates } from "@/features/certificates/data/certificates";
import { cn } from "@/shared/lib/cn";

const certificateGroups = groupCertificates();

export function CertificateList() {
  const { language } = usePreference();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div>
      {certificateGroups.map((group) => (
        <div key={group.institution} className="mt-4 md:mt-0">
          {group.certificates.map((certificate, index) => {
            const isFirst = index === 0;
            const isLast = index === group.certificates.length - 1;
            const isDimmed = hoveredId !== null && hoveredId !== certificate.id;

            return (
              <div key={certificate.id}>
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
                  <span className="text-detail hidden text-right text-sm sm:block">
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
