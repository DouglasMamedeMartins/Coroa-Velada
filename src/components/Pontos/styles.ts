import styled from "styled-components";

export const Ponto = styled.div<{ span?: number }>`
  width: 100%;
  border: 3px solid #720000;
  border-radius: 19px;
  background-color: #1c1c1c;
  grid-column: span ${({ span }) => span || 1};  
`

export const TituloPontos = styled.h2`
  font-size: 1.1rem;
  padding: 10px;
  opacity: 0.54;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: 500;
`

export const NumeroPontos = styled.span<{ isExpanded?: boolean }>`
  font-size: ${({ isExpanded }) => (isExpanded ? "1.4rem" : "4rem")};
  text-align: center;
  font-weight: bold;
  line-height: 100%;
  color: #ffffff;
`

export const PontosMaximo = styled.span`
  font-size: 3.2rem;
  font-weight: bold;
  opacity: 0.2;
  color: #ffffff;
`
export const InformacaoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 6px;
`

export const ContainerNumeros = styled.div`
  display: flex;
  gap: 2px;
`


export const BallPointContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`



export const Ball = styled.div<{ active?: boolean }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ active }) => active ? "red" : "#818181"};
`

export const Divisoria = styled.div`
  font-size: 3.2rem;
  font-weight: bold;
  opacity: 0.2;
  color: #ffffff;
`