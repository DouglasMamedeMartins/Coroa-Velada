import { Container, Divisor } from "../Hero/styles";
import Disciplina from "./Disciplina";
import { TituloDisciplina } from "./styles";

function Disciplinas() {
  return (
    <Container>
      <TituloDisciplina>Disciplinas</TituloDisciplina>
      <Divisor />
      <Disciplina
        disciplina="Tenebrosidade"
        descricao="Manipulação e controle da escuridão e sombras"
      />
      <Disciplina
        disciplina="AUSPÍCIOS"
        descricao="Habilidades extrassensoriais e percepção sobrenatural"
      />
      <Divisor />
    </Container>
  );
}

export default Disciplinas;
