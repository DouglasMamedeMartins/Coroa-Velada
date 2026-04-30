import {
  Container,
  ContainerDescription,
  ContainerPontos,
  ContainerTitle,
  Description,
  Divisor,
  Genealogia,
  HeroName,
  ImageHero,
  InformationXp,
  NumberXp,
  Title,
  XP,
} from "./styles";
import heroImage from "../../assets/images/morgana.jfif";
import Pontos from "../Pontos";

function Hero() {
  return (
    <>
      <Container>
        <ContainerTitle>
          <Title>MORGANA</Title>
          <HeroName>Douglas Mamede</HeroName>
        </ContainerTitle>
        <Divisor></Divisor>
        <ImageHero src={heroImage}></ImageHero>
        <ContainerDescription>
          <Description>Demon</Description>
          <Genealogia>Demonio Caido</Genealogia>
        </ContainerDescription>
        <InformationXp>
          <NumberXp>16</NumberXp>
          <XP>XP</XP>
        </InformationXp>
      </Container>
      <Container>
        <Title>STATUS</Title>
        <Divisor style={{ width: 291 }}></Divisor>
        <ContainerPontos>
          <Pontos title="Fome" score={4} maxScore={6} />
          <Pontos title="Humanidade" score={3} maxScore={5} />
          <Pontos title="Dano Superficial" score={3} maxScore={10} />
          <Pontos title="Dano Agravado" score={0} maxScore={10} />
          <Pontos title="Força de vontade" score={10} maxScore={10} />
          <Pontos title="Inspiração" score={0} maxScore={1} />
        </ContainerPontos>
      </Container>
    </>
  );
}

export default Hero;
