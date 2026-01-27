import { HeaderContato } from "./headerContato";
import { HeaderLogo } from "./headerLogo";
import { Nav } from "./nav";

export function Header() {
  return (
    <header className="p-4 max-w-7xl mx-auto bg-[var(--cor-escuro-5)] rounded-b-3xl border-b border-[var(--cor-escuro-4)]">
      <div className="grid grid-cols-3 items-center">
        <div className="flex justify-start">
          <Nav />
        </div>
        <div className="flex justify-center">
          <HeaderLogo />
        </div>
        <div className="flex justify-end">
          <HeaderContato />
        </div>
      </div>
    </header>
  );
}
