import { Ball } from "../../Pontos/styles";
import {
  Atributo,
  AtributoContainer,
  ContainerAtributos,
  ContainerBall,
  TituloAtributo,
} from "./style";

interface TipoAtributoProps {
  onBallClick: (custo: number) => void;
  titulo: string;
  atributo1: string;
  atributo2: string;
  atributo3: string;
}

function TipoAtributo({
  onBallClick,
  titulo,
  atributo1,
  atributo2,
  atributo3,
}: TipoAtributoProps) {
  return (
    <ContainerAtributos>
      <TituloAtributo>{titulo}</TituloAtributo>
      <AtributoContainer>
        <Atributo>{atributo1}</Atributo>
        <ContainerBall>
          <Ball $active={true} onClick={() => onBallClick(5)} />
          <Ball $active={true} onClick={() => onBallClick(5)} />
          <Ball $active={true} onClick={() => onBallClick(5)} />
          <Ball onClick={() => onBallClick(5)} />
          <Ball onClick={() => onBallClick(5)} />
        </ContainerBall>
      </AtributoContainer>
      <AtributoContainer>
        <Atributo>{atributo2}</Atributo>
        <ContainerBall>
          <Ball $active={true} onClick={() => onBallClick(5)} />
          <Ball $active={true} onClick={() => onBallClick(5)} />
          <Ball $active={true} onClick={() => onBallClick(5)} />
          <Ball onClick={() => onBallClick(5)} />
          <Ball onClick={() => onBallClick(5)} />
        </ContainerBall>
      </AtributoContainer>
      <AtributoContainer>
        <Atributo>{atributo3}</Atributo>
        <ContainerBall>
          <Ball $active={true} onClick={() => onBallClick(5)} />
          <Ball $active={true} onClick={() => onBallClick(5)} />
          <Ball $active={true} onClick={() => onBallClick(5)} />
          <Ball onClick={() => onBallClick(5)} />
          <Ball onClick={() => onBallClick(5)} />
        </ContainerBall>
      </AtributoContainer>
    </ContainerAtributos>
  );
}
export default TipoAtributo;
