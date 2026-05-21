"use client";
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
import Pontos from "../Pontos";
import { Ball, BallPointContainer } from "../Pontos/styles";
import Atributos from "../Atributos";
import Habilidades from "../Habilidades";
import Disciplinas from "../Disciplinas";
import { useState } from "react";
import Modal from "../Modal";

function Hero() {
  const [xp, setXp] = useState(30);
  const [modalAberto, setModalAberto] = useState(false);
  const [custoXp, setCustoXp] = useState(0);

  function abrirModal(custo: number) {
    setCustoXp(custo);
    setModalAberto(true);
  }

  function fecharModal() {
    setModalAberto(false);
  }

  function gastarXp() {
    if (xp >= custoXp) {
      setXp(xp - custoXp);
      setModalAberto(false);
    } else {
      alert("Xp insuficiente!");
    }
  }
  return (
    <>
      <Container id="visao-geral">
        <ContainerTitle>
          <Title>TESTE</Title>
          <HeroName>Douglas Mamede</HeroName>
        </ContainerTitle>
        <Divisor></Divisor>
        <ImageHero src="/images/morgana.jpg"></ImageHero>
        <ContainerDescription>
          <Description>Demon</Description>
          <Genealogia>Demonio Caido</Genealogia>
        </ContainerDescription>
        <InformationXp>
          <NumberXp>{xp}</NumberXp>
          <XP>XP</XP>
        </InformationXp>
      </Container>

      <Container id="status">
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

      <Container id="potencia-de-sangue">
        <TituloSangue>Potência de Sangue</TituloSangue>
        <Divisor style={{ width: 291 }}></Divisor>
        <BallPointContainer>
          <Ball $active={true} />
          <Ball $active={true} />
          <Ball $active={true} />
          <Ball $active={true} />
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

      <Atributos onBallClick={abrirModal} />

      <Habilidades titulo="Conhecimento" onBallClick={abrirModal} />
      <Habilidades titulo="Pericia" onBallClick={abrirModal} />
      <Habilidades titulo="Talentos" onBallClick={abrirModal} />
      {modalAberto && (
        <Modal
          onFechar={fecharModal}
          xp={xp}
          custoXp={custoXp}
          onGastarXp={gastarXp}
        />
      )}

      <Disciplinas />
    </>
  );
}

export default Hero;
