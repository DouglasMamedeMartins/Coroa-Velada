import {
  NumeroPontos,
  PontosMaximo,
  TituloPontos,
  Ponto,
  InformacaoContainer,
  ContainerNumeros,
  Divisoria,
} from "./styles";

interface PontosProps {
  title?: string;
  score?: number | string;
  maxScore?: number;
  divisor?: string;
  span?: number;
}

function Pontos({ title, score, maxScore, divisor, span }: PontosProps) {
  return (
    <Ponto span={span}>
      <InformacaoContainer>
        <TituloPontos>{title}</TituloPontos>
        <ContainerNumeros>
          <NumeroPontos isExpanded={span === 2}>{score}</NumeroPontos>
          <Divisoria>{divisor}</Divisoria>
          <PontosMaximo>{maxScore}</PontosMaximo>
        </ContainerNumeros>
      </InformacaoContainer>
    </Ponto>
  );
}

export default Pontos;
