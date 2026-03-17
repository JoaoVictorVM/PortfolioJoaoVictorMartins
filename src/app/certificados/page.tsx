"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { CERTIFICATE_DETAILS, Certificate } from "@/data/certificateDetails";
import { cn } from "@/lib/utils";

export default function Certificados() {
  const [hoveredCertificate, setHoveredCertificate] = useState<string | null>(
    null,
  );

  const groupedCertificates = useMemo(() => {
    const grouped = CERTIFICATE_DETAILS.reduce<
      Record<string, { institution: string; certificates: Certificate[] }>
    >((groups, certificate) => {
      if (!groups[certificate.institutionId]) {
        groups[certificate.institutionId] = {
          institution: certificate.institution,
          certificates: [],
        };
      }

      groups[certificate.institutionId].certificates.push(certificate);
      return groups;
    }, {});

    return Object.values(grouped);
  }, []);

  const handleMouseEnter = (id: string) => {
    setHoveredCertificate(id);
  };

  const handleMouseLeave = () => {
    setHoveredCertificate(null);
  };

  return (
    <main className="min-h-screen bg-[var(--bg-color)] text-[var(--text-color)]">
      <section className="py-24">
        <div className="mx-auto max-w-2xl px-4">
          <div className="relative mb-8">
            <Link
              href="/"
              className="home-link block text-sm font-normal text-[var(--detail-color)] no-underline transition hover:text-[var(--text-color)] mb-4 md:mb-0 md:absolute md:left-0 md:-translate-x-[150px] italic"
            >
              ← Index
            </Link>
            <div className="space-y-10">
              <div>
                <h1 className="text-lg text-[var(--text-color)]">
                  Certificados
                </h1>
                <p className="text-sm text-[var(--detail-color)]">
                  Organizados por instituicao
                </p>
              </div>

              <div className="space-y-0">
                {groupedCertificates.map((group) => (
                  <div key={group.institution} className="space-y-0">
                    {group.certificates.map((certificate, certIndex) => {
                      const shouldDimTitle =
                        hoveredCertificate !== null &&
                        hoveredCertificate !== certificate.id;
                      const isFirstOfGroup = certIndex === 0;
                      const isLastOfGroup =
                        certIndex === group.certificates.length - 1;

                      return (
                        <div key={certificate.id}>
                          <div
                            onMouseEnter={() =>
                              handleMouseEnter(certificate.id)
                            }
                            onMouseLeave={handleMouseLeave}
                            className={cn(
                              "grid w-full grid-cols-[140px_1fr_auto] items-center gap-3 text-[var(--detail-color)] py-4 transition hover:text-[var(--text-color)]/80",
                              isFirstOfGroup &&
                                "border-t border-[var(--line-color)]",
                            )}
                          >
                            <span
                              className={cn(
                                "text-sm transition-opacity duration-150",
                                isFirstOfGroup
                                  ? "opacity-100 text-[var(--detail-color)]"
                                  : "opacity-0",
                              )}
                            >
                              {group.institution}
                            </span>
                            <span
                              className={cn(
                                "text-sm font-normal transition-colors duration-150",
                                shouldDimTitle
                                  ? "text-[var(--detail-color)]"
                                  : "text-[var(--text-color)]",
                              )}
                            >
                              {certificate.title}
                            </span>
                            <span className="text-sm text-[var(--detail-color)] text-right">
                              {certificate.date}
                            </span>
                          </div>
                          {!isLastOfGroup && (
                            <div className="h-px bg-[var(--line-color)] ml-[140px]" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
