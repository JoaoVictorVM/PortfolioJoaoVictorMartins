'use client';
import { usePreference } from "@/context/preferences/PreferenceProvider";
import { useReveal } from "@/hooks/useReveal";

const copy = {
  pt: {
    title: "Contato",
    prefix: "Me encontre em",
    orWord: "ou",
  },
  en: {
    title: "Connect",
    prefix: "Find me on",
    orWord: "or",
  },
};

const links = [
  { label: "Linkedin", href: "https://www.linkedin.com/in/jvvmartins/" },
  { label: "GitHub", href: "https://github.com/JoaoVictorVM" },
  { label: "Instagram", href: "https://www.instagram.com/jvvmartins.s/" },
  { label: "WhatsApp", href: "https://wa.me/5535998095841" },
  { label: "Email", href: "mailto:jvmartinscv@gmail.com" },
];

export function ConnectSection() {
  const { language } = usePreference();
  const texts = copy[language];
  const isVisible = useReveal(language);

  return (
    <section
      key={`connect-${language}`}
      className={`pb-32 section-fade diagonal-fade delay-250 ${
        isVisible ? "visible" : ""
      }`}
    >
      <div
        className={`mx-auto max-w-2xl px-4 space-y-4 text-[var(--detail-color)] text-appear diagonal-fade delay-300 ${
          isVisible ? "visible" : ""
        }`}
      >
        <h2 className="text-lg text-[var(--text-color)]">{texts.title}</h2>
        <p
          className={`text-[var(--text-color)] text-appear diagonal-fade delay-350 ${
            isVisible ? "visible" : ""
          }`}
        >
          {texts.prefix}&nbsp;
          {links.map((link, index) => {
            const isSecondLast = index === links.length - 2;
            const isLast = index === links.length - 1;

            return (
              <span key={link.href}>
                <a
                  className="underline underline-offset-4 decoration-[var(--text-color)]/30 hover:decoration-[var(--text-color)] transition"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
                {!isLast && (isSecondLast ? ` ${texts.orWord} ` : ", ")}
              </span>
            );
          })}
          .
        </p>
      </div>
    </section>
  );
}
