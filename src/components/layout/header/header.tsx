import { HeaderContato } from "./headerContato";
import { HeaderLogo } from "./headerLogo";
import { Nav } from "./nav";
import { MobileMenu } from "./mobileMenu";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4">
      <div className="max-w-7xl mx-auto bg-[var(--cor-escuro-5)] rounded-b-3xl border-b border-[var(--cor-escuro-4)] p-4">
        {/* Desktop */}
        <div className="hidden md:grid grid-cols-3 items-center">
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

        {/* Mobile */}
        <div className="flex md:hidden items-center justify-between">
          <div className="w-10">
            {/* Espaço vazio para balancear o layout */}
          </div>
          <div className="flex-1 flex justify-center">
            <HeaderLogo />
          </div>
          <div className="w-10 flex justify-end">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
