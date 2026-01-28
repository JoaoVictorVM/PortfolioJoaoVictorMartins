import { FooterLogo } from "./footerLogo";
import { FooterLinks } from "./footerLinks";
import { FooterSocial } from "./footerSocial";
import { FooterCopyright } from "./footerCopyright";

const linksUteis = [
  { label: "Projetos", href: "/projetos" },
  { label: "Certificados", href: "/termos" },
  { label: "Links", href: "/privacidade" },
  { label: "Saiba Mais", href: "/privacidade" },
];

const secoes = [
  { label: "Inicio", href: "/ferramentas/gerador-senhas" },
  { label: "Secao Sobre Mim", href: "/ferramentas/gerador-senhas" },
  { label: "Secao Projetos", href: "/ferramentas/gerador-senhas" },
  { label: "Secao Servicos", href: "/ferramentas/gerador-senhas" },
  { label: "Secao Certificados", href: "/ferramentas/gerador-senhas" },
];

export function Footer() {
  return (
    <footer className="px-4">
      <div className="max-w-7xl mx-auto bg-[var(--cor-escuro-5)] rounded-t-3xl border-t border-[var(--cor-escuro-4)] p-4">
        {/* Conteúdo Principal */}
        <div className="max-w-7xl mx-auto px-4 py-10 md:py-12">
          {/* Grid Desktop: 5 colunas | Mobile: 1 coluna */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {/* Logo e Descrição */}
            <div className="md:col-span-1">
              <FooterLogo />
            </div>

            {/* Links Úteis */}
            <div>
              <FooterLinks title="Links úteis" links={linksUteis} />
            </div>

            {/* Ferramentas */}
            <div>
              <FooterLinks title="Secoes" links={secoes} />
            </div>

            {/* Redes Sociais */}
            <div>
              <FooterSocial />
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-800/50" />

        {/* Copyright */}
        <div className="max-w-7xl mx-auto px-4 py-6">
          <FooterCopyright />
        </div>
      </div>
    </footer>
  );
}