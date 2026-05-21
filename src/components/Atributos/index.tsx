import { Container, Divisor } from "../Hero/styles";
import { TitleAtributos } from "./styles";
import TipoAtributo from "./TipoAtributo";

interface AtributosProps {
  onBallClick: (custo: number) => void;
}

function Atributos({ onBallClick }: AtributosProps) {
  return (
    <>
      <Container id="atributos">
        <TitleAtributos>Atributos</TitleAtributos>
        <Divisor />
        <TipoAtributo
          onBallClick={onBallClick}
          titulo="Físicos"
          atributo1="Força"
          atributo2="Destreza"
          atributo3="vigor"
        />
        <TipoAtributo
          onBallClick={onBallClick}
          titulo="Sociais"
          atributo1="Carisma"
          atributo2="Manipulação"
          atributo3="Aparência"
        />
        <TipoAtributo
          onBallClick={onBallClick}
          titulo="Mentais"
          atributo1="Inteligência"
          atributo2="Raciocínio"
          atributo3="Determinação"
        />
      </Container>
    </>
  );
}

export default Atributos;
