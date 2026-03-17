export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--line-color)] bg-[var(--bg-color)]">
      <div className="mx-auto flex max-w-2xl items-center justify-between py-4 font-normal text-sm text-[var(--detail-color)]">
        <span>Cabo Verde - MG 37880-000</span>
        <span>{year}</span>
      </div>
    </footer>
  );
}
