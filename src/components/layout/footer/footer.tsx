export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--line-color-dark)] bg-[var(--bg-color-dark)]">
      <div className="mx-auto flex max-w-2xl items-center justify-between py-3 font-normal text-sm text-[var(--detail-color-dark)]">
        <span>Cabo Verde - MG 37880-000</span>
        <span>{year}</span>
      </div>
    </footer>
  );
}
