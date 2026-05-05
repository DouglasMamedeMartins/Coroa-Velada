import { ContainerBall } from "../../Atributos/TipoAtributo/style";
import { Ball } from "../../Pontos/styles";
import { ContainerHabilidades, TituloHabilidade } from "./styles";

interface HabilidadeProps {
  habilidade: string;
  active: boolean;
}

function Habilidade({ habilidade, active }: HabilidadeProps) {
  return (
    <ContainerHabilidades>
      <TituloHabilidade>{habilidade}</TituloHabilidade>
      <ContainerBall>
        <Ball active={active} />
        <Ball active={active} />
        <Ball />
        <Ball />
        <Ball />
      </ContainerBall>
    </ContainerHabilidades>
  );
}

export default Habilidade;
