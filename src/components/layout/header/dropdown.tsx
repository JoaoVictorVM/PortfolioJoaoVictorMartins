export function Dropdown({ children }: { children: React.ReactNode }) {
  return (
    <div className="
      absolute top-full mt-3 w-64
      rounded-xl bg-[var(--cor-escuro-5)]
      border border-[var(--cor-escuro-4)]
      shadow-lg p-2
    ">
      {children}
    </div>
  );
}
