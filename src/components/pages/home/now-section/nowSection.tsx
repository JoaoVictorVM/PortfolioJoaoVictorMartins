'use client';
import { usePreference } from "@/context/preferences/PreferenceProvider";

const text = {
  pt: [
    "Tenho direcionado meu foco para a parte mais arquitetural dos projetos, com maior atenção a System Design e à estruturação das aplicações. Busco construir soluções escaláveis e de fácil manutenção, reduzindo retrabalho e garantindo uma evolução consistente do código ao longo do tempo.",
    "Trabalho principalmente com React e Node.js utilizando TypeScript, além de Next.js para aplicações mais complexas. Atuo na integração com bancos de dados como PostgreSQL e SQLite. Também venho aprofundando meus estudos em .NET e possuo domínio de ferramentas como Git, GitHub, Figma, OpenCode e MCPs no fluxo de desenvolvimento.",
  ],
  en: [
    "I have been focusing on the architectural side of my projects, putting extra care into System Design and application structure. I aim to build scalable, maintainable setups that reduce rework and ensure consistent growth over time.",
    "I mainly build with React and Node.js using TypeScript, often leveraging Next.js for more sophisticated experiences. I integrate PostgreSQL and SQLite, and continue developing .NET expertise along with tools like Git, GitHub, Figma, OpenCode, and MCP workflows.",
  ],
};

export function NowSection() {
  const { language } = usePreference();

  return (
    <section className="py-20">
      <div className="mx-auto max-w-2xl px-4 space-y-6 text-[var(--detail-color)]">
        <h2 className="text-lg text-[var(--text-color)]">
          {language === "pt" ? "Atualmente" : "Now"}
        </h2>
        {text[language].map((paragraph) => (
          <p key={paragraph} className="text-[var(--text-color)]">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
