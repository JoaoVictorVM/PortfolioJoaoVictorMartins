import Link from "next/link";
import { Award, ChevronRight } from "lucide-react";

export function CertificationsCard() {
  return (
    <div className="h-full flex flex-col p-8 md:p-10 relative overflow-hidden">
      {/* Decorative dots
      <div className="absolute right-6 top-1/4 flex flex-col gap-8">
        <div className="w-2 h-2 rounded-full bg-white/20" />
        <div className="w-2 h-2 rounded-full bg-white/20" />
        <div className="w-2 h-2 rounded-full bg-white/20" />
      </div> */}

      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm w-fit mb-6">
        <Award className="w-4 h-4 text-white" />
        <span className="text-sm font-medium text-white">Certificações</span>
      </div>

      {/* Title */}
      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
        Qualidade e excelência comprovadas
      </h3>

      {/* Description */}
      <p className="text-blue-100 mb-8 leading-relaxed">
        Certificações reconhecidas internacionalmente que garantem expertise em
        desenvolvimento web, design de interfaces e as mais modernas tecnologias
        do mercado.
      </p>

      {/* CTA Button */}
      <Link
        href="/certificados"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-blue-600 font-medium w-fit hover:bg-blue-50 transition-colors"
      >
        <Award className="w-5 h-5" />
        Ver certificados
        <ChevronRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
