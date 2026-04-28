import {
  Container,
  ContainerDescription,
  ContainerTitle,
  Description,
  Divisor,
  Genealogia,
  HeroName,
  ImageHero,
  InformationXp,
  NumberXp,
  TitleHero,
  XP,
} from "./styles";
import heroImage from "../../assets/images/Carmilla.svg";

function Hero() {
  return (
    <Container>
      <ContainerTitle>
        <TitleHero>Carmilla</TitleHero>
        <HeroName>Rebecca Miranda</HeroName>
      </ContainerTitle>
      <Divisor></Divisor>
      <ImageHero src={heroImage}></ImageHero>
      <ContainerDescription>
        <Description>Ventrue</Description>
        <Genealogia>8th Geração</Genealogia>
      </ContainerDescription>
      <InformationXp>
        <NumberXp>16</NumberXp>
        <XP>XP</XP>
      </InformationXp>
    </Container>
  );
}

export default Hero;
