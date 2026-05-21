import { ContainerBall } from "../../Atributos/TipoAtributo/style";
import { Ball } from "../../Pontos/styles";
import {
  DiscinplinaContainer,
  DisciplinaDescricao,
  DisciplinaTitulo,
} from "./style";

interface DisciplinaProps {
  disciplina: string;
  descricao: string;
}

function Disciplina({ disciplina, descricao }: DisciplinaProps) {
  return (
    <DiscinplinaContainer>
      <DisciplinaTitulo>{disciplina}</DisciplinaTitulo>
      <DisciplinaDescricao>{descricao}</DisciplinaDescricao>
      <ContainerBall>
        <Ball $active={true} />
        <Ball $active={true} />
        <Ball />
        <Ball />
        <Ball />
      </ContainerBall>
    </DiscinplinaContainer>
  );
}

export default Disciplina;
