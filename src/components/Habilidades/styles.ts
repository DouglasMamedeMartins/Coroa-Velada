import styled from "styled-components";

export const ContainerTitulo = styled.div`
  display: flex;
  gap: 20px;
`
export const ArrowIcon = styled.img<{ open: boolean }>`
  margin-top: -10px;
  transition: transform ease 0.3s;
  transform: ${({ open }) => open ? "rotate(180deg)" : ""};
  cursor: pointer;
`

