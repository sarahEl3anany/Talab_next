import { Navbar, NavbarBrand } from "@nextui-org/react";
import TalabLogo from '../favicon.ico';
export default function Header() {
  return (
    <Navbar>
      <NavbarBrand>
        <TalabLogo />
        <p className="font-bold text-inherit">Talab</p>
      </NavbarBrand>
    </Navbar>
  );
}
