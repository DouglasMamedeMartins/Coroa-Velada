import styled from "styled-components";

export const ContainerSideMenu = styled.div<{ open: boolean }>`
  background-color: #0c0c0c;
  width: 312px;

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

export const Image = styled.img``


export const Title = styled.a`
  color: #ffffff;
`