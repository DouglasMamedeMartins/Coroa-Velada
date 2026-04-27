import { HeaderContainer, Logo, MenuHamburguer } from "./styles";
import menuIcon from "../../assets/images/MenuHamburguer.svg";
import logo from "../../assets/images/Logo.svg";
import xIcon from "../../assets/images/x.svg";
import { useState } from "react";
import SideMenu from "../SideMenu";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <HeaderContainer>
        <MenuHamburguer
          isMenuOpen={isMenuOpen}
          src={isMenuOpen ? xIcon : menuIcon}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        ></MenuHamburguer>
        <Logo src={logo} />
      </HeaderContainer>
      <SideMenu open={isMenuOpen} />
    </>
  );
}

export default Header;
