export type Certificate = {
  id: string;
  institutionId: string;
  institution: string;
  title: string;
  date: string;
};

export const CERTIFICATE_DETAILS: Certificate[] = [
  {
    id: "nlw-operator",
    institutionId: "rocketseat",
    institution: "Rocketseat",
    title: "NLW Operator - FullStack",
    date: "17/03/2026",
  },
  {
    id: "nlw-pocket",
    institutionId: "rocketseat",
    institution: "Rocketseat",
    title: "NLW Pocket - FullStack",
    date: "10/10/2025",
  },
  {
    id: "introducao-csharp-dotnet",
    institutionId: "rocketseat",
    institution: "Rocketseat",
    title: "Introdução ao C# e .NET",
    date: "11/03/2026",
  },
  {
    id: "frontend-uxui-design",
    institutionId: "origamid",
    institution: "Origamid",
    title: "Front-end & UX/UI Design",
    date: "2026",
  },
];
