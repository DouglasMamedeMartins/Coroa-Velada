import {
  NumeroPontos,
  PontosMaximo,
  TituloPontos,
  Ponto,
  InformacaoContainer,
  ContainerNumeros,
} from "./styles";

interface PontosProps {
  title: string;
  score: number;
  maxScore: number;
}

function Pontos({ title, score, maxScore }: PontosProps) {
  return (
    <Ponto>
      <InformacaoContainer>
        <TituloPontos>{title}</TituloPontos>
        <ContainerNumeros>
          <NumeroPontos>{score}</NumeroPontos>
          <PontosMaximo>/{maxScore}</PontosMaximo>
        </ContainerNumeros>
      </InformacaoContainer>
    </Ponto>
  );
}

export default Pontos;
