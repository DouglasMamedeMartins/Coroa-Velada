import {
  Container,
  ContainerTitle,
  Divisor,
  HeroName,
  ImageHero,
  TitleHero,
} from "./styles";

function Hero() {
  return (
    <Container>
      <ContainerTitle>
        <TitleHero>Carmilla</TitleHero>
        <HeroName>Rebecca Miranda</HeroName>
      </ContainerTitle>
      <Divisor></Divisor>
      <ImageHero></ImageHero>
    </Container>
  );
}

export default Hero;
