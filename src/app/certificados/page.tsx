"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { CERTIFICATE_DETAILS, Certificate } from "@/data/certificateDetails";
import { cn } from "@/lib/utils";
import { usePreference } from "@/context/preferences/PreferenceProvider";
import { useReveal } from "@/hooks/useReveal";

const CERTIFICATE_COPY = {
  pt: {
    title: "Certificados",
    subtitle: "Qualidade e excelência comprovadas",
  },
  en: {
    title: "Certificates",
    subtitle: "Proven quality and excellence",
  },
} as const;

export default function Certificados() {
  const { language } = usePreference();
  const [hoveredCertificate, setHoveredCertificate] = useState<string | null>(
    null,
  );
  const isVisible = useReveal(language);
  const texts = CERTIFICATE_COPY[language];

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
          <div
            key={`certificates-top-${language}`}
            className={`relative mb-8 fast-fade-up delay-100 ${
              isVisible ? "visible" : ""
            }`}
          >
            <Link
              href="/"
              className={`home-link block text-sm font-normal text-[var(--detail-color)] no-underline transition hover:text-[var(--text-color)] mb-4 md:mb-0 md:absolute md:left-0 md:-translate-x-[150px] italic fast-fade-up delay-150 ${
                isVisible ? "visible" : ""
              }`}
            >
              ← Index
            </Link>
            <div className="space-y-10">
              <div>
                <h1
                  className={`text-lg text-[var(--text-color)] fast-fade-up delay-200 ${
                    isVisible ? "visible" : ""
                  }`}
                >
                  {texts.title}
                </h1>
                <p
                  className={`text-sm text-[var(--detail-color)] fast-fade-up delay-250 ${
                    isVisible ? "visible" : ""
                  }`}
                >
                  {texts.subtitle}
                </p>
              </div>

              <div className="space-y-0">
                {(() => {
                  let animationIndex = 0;
                  return groupedCertificates.map((group) => (
                    <div
                      key={group.institution}
                      className="md:space-y-0 mt-4 md:mt-0"
                    >
                      {group.certificates.map((certificate, certIndex) => {
                        const shouldDimTitle =
                          hoveredCertificate !== null &&
                          hoveredCertificate !== certificate.id;
                        const isFirstOfGroup = certIndex === 0;
                        const isLastOfGroup =
                          certIndex === group.certificates.length - 1;
                        const currentAnimation = animationIndex++;
                        const titleDelay = 0.15 + currentAnimation * 0.08;
                        const lineDelay = titleDelay + 0.1;

                        return (
                          <div key={certificate.id}>
                            {isFirstOfGroup && (
                              <p className="md:hidden text-sm text-[var(--detail-color)] pl-2 mb-3">
                                {group.institution}
                              </p>
                            )}
                            <div
                              onMouseEnter={() =>
                                handleMouseEnter(certificate.id)
                              }
                              onMouseLeave={handleMouseLeave}
                              className={cn(
                                "grid w-full grid-cols-[140px_1fr_auto] items-center gap-3 text-[var(--detail-color)] py-4 transition hover:text-[var(--text-color)]/80",
                                isFirstOfGroup &&
                                  "border-t border-[var(--line-color)]",
                                "px-2 md:px-0",
                              )}
                            >
                              <span
                                className={cn(
                                  "text-sm transition-opacity duration-150",
                                  "hidden md:block",
                                  isFirstOfGroup
                                    ? "opacity-100 text-[var(--detail-color)]"
                                    : "opacity-0",
                                )}
                              >
                                {group.institution}
                              </span>
                              <span
                                className={cn(
                                  "text-sm font-normal transition-colors duration-150 project-title col-span-2 sm:col-span-1",
                                  shouldDimTitle
                                    ? "text-[var(--detail-color)]"
                                    : "text-[var(--text-color)]",
                                )}
                                style={{ animationDelay: `${titleDelay}s` }}
                              >
                                {certificate.title[language]}
                              </span>
                              <span className="text-sm text-[var(--detail-color)] text-right hidden sm:block">
                                {certificate.date[language]}
                              </span>
                            </div>
                            {!isLastOfGroup && (
                              <div
                                className="project-line ml-6 md:ml-[140px]"
                                style={{ animationDelay: `${lineDelay}s` }}
                              />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ));
                })()}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
