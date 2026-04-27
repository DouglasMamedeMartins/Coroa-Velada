import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #0c0c0c;
  height: 52px;
  display: flex;
  align-items: center;
  padding: 16px;
  position: sticky;
  top: 0;
`


export const MenuHamburguer = styled.img<{ isMenuOpen: boolean }>`
  width: 26px;
  height: 22px;
  cursor: pointer;
`;


export const Logo = styled.img`
margin: 0 auto;
`