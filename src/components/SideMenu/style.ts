import styled from "styled-components";

export const ContainerSideMenu = styled.div<{ open: boolean }>`
  background-color: #0c0c0c;
  width: 312px;
  padding: 12px;
  position: fixed;
  transform: ${({ open }) => open ? "translateX(0)" : "translateX(-100%)"};
  opacity: ${({ open }) => open ? "1" : "0"};
  transition: transform 0.35s ease;
  z-index: 2000;
`

export const ContainerOption = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 43px;

`

export const Image = styled.img`
  transition: transform 0.3s ease;

   &:hover {
    transform: scale(1.2);
  }
`


export const Title = styled.a`
  color: #ffffff;
  text-decoration: none;
  transition: transform 0.3s ease;
  cursor: pointer;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0%;
    height: 1px;
    background-color: #ccc;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`