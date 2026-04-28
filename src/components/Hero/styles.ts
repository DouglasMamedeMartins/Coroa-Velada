import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0c0c0c;
  border-radius: 25px;
  width: 328px;
  margin: 28px auto;

`

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
`


export const TitleHero = styled.h1`
  color: #ffffff;
  text-transform: uppercase;
`

export const HeroName = styled.h3`
  color: #999;
  font-weight: 300;
`

export const Divisor = styled.div`
  width: 266px;
  height: 2px;
  margin-bottom: 7px;
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



export const ImageHero = styled.div``