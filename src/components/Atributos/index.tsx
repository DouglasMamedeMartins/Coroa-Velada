import { Container, Divisor } from "../Hero/styles";
import { TitleAtributos } from "./styles";
import TipoAtributo from "./TipoAtributo";

function Atributos() {
  return (
    <>
      <Container>
        <TitleAtributos>Atributos</TitleAtributos>
        <Divisor />
        <TipoAtributo
          titulo="Físicos"
          atributo1="Força"
          atributo2="Destreza"
          atributo3="vigor"
        />
        <TipoAtributo
          titulo="Sociais"
          atributo1="Carisma"
          atributo2="Manipulação"
          atributo3="Aparência"
        />
        <TipoAtributo
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
