"use client";
import { HeaderContainer, Logo, MenuHamburguer } from "./styles";
import { useState } from "react";
import SideMenu from "../SideMenu";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <HeaderContainer>
        <MenuHamburguer
          $isMenuOpen={isMenuOpen}
          src={isMenuOpen ? "images/x.svg" : "/images/MenuHamburguer.svg"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        ></MenuHamburguer>
        <Logo src="/images/Logo.svg" />
      </HeaderContainer>
      <SideMenu open={isMenuOpen} />
    </>
  );
}

export default Header;
