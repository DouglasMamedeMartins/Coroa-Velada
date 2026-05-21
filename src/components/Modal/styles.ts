import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.7);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalContainer = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999999;
  background-color: #0c0c0c;
  border-radius: 25px;

`

export const ModalTitulo = styled.h3`
  font-size: 2rem;
  color: #ffffff;
  opacity: 0.48;
`

export const X = styled.div`
  font-size: 3rem;
  color: #ffffff;
  opacity: 0.48;
  position: absolute;
  right: 20px;
  top: 25px;
  cursor: pointer;
`