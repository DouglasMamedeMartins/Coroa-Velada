import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0c0c0c;
  border-radius: 25px;
  width: 328px;
  margin: 28px auto;
  padding: 10px;
`

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
`


export const Title = styled.h1`
  color: #ffffff;
  text-transform: uppercase;
  font-size: 3.2rem;
`

export const HeroName = styled.h3`
  font-weight: 300;
  font-size: 2rem;
  opacity: 0.48;
  color: #ffffff;
`

export const Divisor = styled.div`
  width: 266px;
  height: 2px;
  margin-bottom: 7px;
  margin-top: 7px;
  background-color: #999;
  position: relative;
  opacity: 0.3;
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    background-color: #ccc;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
`



export const ImageHero = styled.img`
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 12px;
  box-shadow: 0px 0px 4px #ccc;
`


export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Description = styled.h3`
  color: #ffffff;
  font-size: 2.4rem;
  opacity: 0.54;
  text-transform: uppercase;
`

export const Genealogia = styled.p`
  font-size: 2rem;
  color: #ffffff;
  opacity: 0.27;
`

export const InformationXp = styled.span`
  font-size: 2.4rem;
  font-weight: bold;
  margin: 10px 0;
  color: #ffffff;
  background-color: #1c1c1c;
  padding: 7px 28px;
  border-radius: 12px;
  border: 2px solid #0b8800;
`

export const XP = styled.small`
  font-size: 1.6rem;
`

export const NumberXp = styled.span``


export const ContainerPontos = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin: 18px 0;
`