import { FooterLogo } from "./footerLogo";
import { FooterLinks } from "./footerLinks";
import { FooterSocial } from "./footerSocial";
import { FooterCopyright } from "./footerCopyright";

const linksUteis = [
  { label: "Projetos", href: "/projetos" },
  { label: "Certificados", href: "/certificados" },
  { label: "Links", href: "https://linksjoaovictormartins.vercel.app/" },
  { label: "Saiba Mais", href: "https://sobrejoaovictormartins.vercel.app/" },
];

const secoes = [
  { label: "Início ", href: "/#inicio" },
  { label: "Seção Sobre Mim", href: "/#sobre-mim" },
  { label: "Seção Projetos", href: "/#projetos" },
  { label: "Seção Serviços", href: "/#servicos" },
  { label: "Seção Certificados", href: "/#certificados" },
];

export function Footer() {
  return (
    <footer className="px-4">
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-[var(--cor-escuro-6)] via-[var(--cor-escuro-1)] to-[var(--cor-escuro-6)] rounded-t-3xl border-t border-[var(--cor-escuro-7)] p-4">
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
              <FooterLinks title="Seções" links={secoes} />
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
