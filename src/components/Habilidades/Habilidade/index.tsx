import { ContainerBall } from "../../Atributos/TipoAtributo/style";
import { Ball } from "../../Pontos/styles";
import { ContainerHabilidades, TituloHabilidade } from "./styles";

interface HabilidadeProps {
  habilidade: string;
  active: boolean;
  onBallClick: (custo: number) => void;
}

function Habilidade({ habilidade, active, onBallClick }: HabilidadeProps) {
  return (
    <ContainerHabilidades>
      <TituloHabilidade>{habilidade}</TituloHabilidade>
      <ContainerBall>
        <Ball $active={active} onClick={() => onBallClick(5)} />
        <Ball $active={active} onClick={() => onBallClick(5)} />
        <Ball onClick={() => onBallClick(5)} />
        <Ball onClick={() => onBallClick(5)} />
        <Ball onClick={() => onBallClick(5)} />
      </ContainerBall>
    </ContainerHabilidades>
  );
}

export default Habilidade;
