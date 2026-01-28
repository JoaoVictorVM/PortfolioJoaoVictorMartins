interface FooterCopyrightProps {
  companyName?: string;
  cnpj?: string;
  address?: string;
}

export function FooterCopyright({
  companyName = "Joao Victor Ventura Martins",
  address = "Cabo Verde - MG 37880-000",
}: FooterCopyrightProps) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="text-center text-gray-500 text-xs leading-relaxed">
      <p>
        Todos os Direitos Reservados. {companyName}
      </p>
      <p className="mt-1">{address}</p>
    </div>
  );
}