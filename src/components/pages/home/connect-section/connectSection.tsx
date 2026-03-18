'use client';
import { usePreference } from "@/context/preferences/PreferenceProvider";

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

  return (
    <section className="pb-32">
      <div className="mx-auto max-w-2xl px-4 space-y-4 text-[var(--detail-color)]">
        <h2 className="text-lg text-[var(--text-color)]">{texts.title}</h2>
        <p className="text-[var(--text-color)]">
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
