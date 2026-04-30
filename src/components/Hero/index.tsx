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
  TituloSangue,
  XP,
} from "./styles";
import heroImage from "../../assets/images/morgana.jfif";
import Pontos from "../Pontos";
import { Ball, BallPointContainer } from "../Pontos/styles";

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
          <Pontos title="Fome" score={4} maxScore={6} divisor="/" />
          <Pontos title="Humanidade" score={0} maxScore={5} divisor="/" />
          <Pontos
            title="Dano Superficial"
            score={3}
            maxScore={10}
            divisor="/"
          />
          <Pontos title="Dano Agravado" score={0} maxScore={10} divisor="/" />
          <Pontos
            title="Força de vontade"
            score={10}
            maxScore={10}
            divisor="/"
          />
          <Pontos title="Inspiração" score={0} maxScore={1} divisor="/" />
        </ContainerPontos>
      </Container>

      <Container>
        <TituloSangue>Potência de Sangue</TituloSangue>
        <Divisor style={{ width: 291 }}></Divisor>
        <BallPointContainer>
          <Ball active={true} />
          <Ball active={true} />
          <Ball active={true} />
          <Ball active={true} />
          <Ball />
          <Ball />
          <Ball />
          <Ball />
          <Ball />
          <Ball />
        </BallPointContainer>
        <ContainerPontos>
          <Pontos title="Surto de Sangue" score={"+" + 4} />
          <Pontos title="Cura Superficial" score={"+" + 4} />
          <Pontos title="Cura Agravada" score={"+" + 4} />
          <Pontos title="Dados De Fome" score={"+" + 4} />
          <Pontos
            title="Sangues consumíveis"
            score={"HUMANO, SOBRENATURAL, BOLSAS, CADÁVERES, ANIMAIS"}
            span={2}
          />
        </ContainerPontos>
      </Container>
    </>
  );
}

export default Hero;
