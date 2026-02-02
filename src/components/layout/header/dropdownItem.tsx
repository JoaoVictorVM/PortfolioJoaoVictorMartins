'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";

const linkClassName = `
  block rounded-lg px-4 py-3
  text-sm hover:bg-white/5
  transition
`;

export function DropdownItem({ item, onClick }: { item: { label: string; href: string }; onClick?: () => void }) {
  const isAnchor = item.href.startsWith("#");
  const router = useRouter();

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    const targetId = item.href.substring(1); // Remove o #
    
    // Função para fazer scroll
    const performScroll = () => {
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const headerOffset = 100;
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = Math.max(0, elementPosition - headerOffset);
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        return true;
      }
      console.warn(`Elemento com id "${targetId}" não encontrado`);
      return false;
    };
    
    // Fecha o dropdown primeiro para não interferir
    if (onClick) onClick();
    
    // Aguarda um pouco e então faz o scroll
    setTimeout(() => {
      if (!performScroll()) {
        // Se não encontrou, tenta novamente após um delay maior
        setTimeout(() => {
          performScroll();
        }, 200);
      }
    }, 100);
  };
  
  const handleRouteClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Fecha o dropdown
    if (onClick) onClick();
    
    // Navega usando o router do Next.js
    router.push(item.href);
  };

  if (isAnchor) {
    return (
      <a
        href={item.href}
        onClick={handleAnchorClick}
        onMouseDown={(e) => e.stopPropagation()}
        className={linkClassName}
      >
        {item.label}
      </a>
    );
  }

  return (
    <a
      href={item.href}
      onClick={handleRouteClick}
      onMouseDown={(e) => e.stopPropagation()}
      className={linkClassName}
    >
      {item.label}
    </a>
  );
}
