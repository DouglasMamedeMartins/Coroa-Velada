import { Ball } from "../../Pontos/styles";
import {
  Atributo,
  AtributoContainer,
  ContainerAtributos,
  ContainerBall,
  TituloAtributo,
} from "./style";

interface TipoAtributoProps {
  titulo: string;
  atributo1: string;
  atributo2: string;
  atributo3: string;
}

function TipoAtributo({
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
          <Ball active={true} />
          <Ball active={true} />
          <Ball active={true} />
          <Ball />
          <Ball />
        </ContainerBall>
      </AtributoContainer>
      <AtributoContainer>
        <Atributo>{atributo2}</Atributo>
        <ContainerBall>
          <Ball active={true} />
          <Ball active={true} />
          <Ball active={true} />
          <Ball />
          <Ball />
        </ContainerBall>
      </AtributoContainer>
      <AtributoContainer>
        <Atributo>{atributo3}</Atributo>
        <ContainerBall>
          <Ball active={true} />
          <Ball active={true} />
          <Ball active={true} />
          <Ball />
          <Ball />
        </ContainerBall>
      </AtributoContainer>
    </ContainerAtributos>
  );
}
export default TipoAtributo;
