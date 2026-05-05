import { TitleAtributos } from "../Atributos/styles";
import { Container, Divisor } from "../Hero/styles";
import { ArrowIcon, ContainerTitulo } from "./styles";
import arrowIcon from "../../assets/images/arrow-up.svg";
import Habilidade from "./Habilidade";
import { ContainerHabilidade } from "./Habilidade/styles";
import { useState } from "react";

interface HabilidadesProps {
  titulo: string;
}

const habilidade = [
  { habilidade: "Ciência", active: false },
  { habilidade: "Direito", active: true },
  { habilidade: "Erudição", active: true },
  { habilidade: "Estratégia", active: false },
  { habilidade: "Finanças", active: true },
  { habilidade: "Investigação", active: true },
  { habilidade: "Medicina", active: false },
  { habilidade: "Ocultismo", active: true },
  { habilidade: "Percepção", active: true },
  { habilidade: "Religião", active: false },
  { habilidade: "Submundo", active: true },
  { habilidade: "Tecnologia", active: true },
];
const pericia = [
  { habilidade: "Ciência", active: true },
  { habilidade: "Direito", active: true },
  { habilidade: "Estratégia", active: true },
  { habilidade: "Finanças", active: true },
  { habilidade: "Investigação", active: true },
  { habilidade: "Medicina", active: false },
  { habilidade: "Percepção", active: true },
  { habilidade: "Tecnologia", active: true },
];
const talentos = [
  { habilidade: "Ciência", active: true },
  { habilidade: "Direito", active: true },
  { habilidade: "Estratégia", active: true },
  { habilidade: "Finanças", active: true },
  { habilidade: "Investigação", active: true },
  { habilidade: "Medicina", active: true },
  { habilidade: "Percepção", active: true },
  { habilidade: "Tecnologia", active: true },
  { habilidade: "Ambição", active: true },
  { habilidade: "Mental", active: true },
  { habilidade: "Concentração", active: true },
  { habilidade: "Resistência", active: true },
];

function Habilidades({ titulo }: HabilidadesProps) {
  const [open, setOpen] = useState(true);

  function openInformation() {
    setOpen(!open);
  }

  return (
    <Container id={titulo}>
      <ContainerTitulo>
        <TitleAtributos>{titulo}</TitleAtributos>
        <ArrowIcon
          src={arrowIcon}
          alt=""
          onClick={openInformation}
          open={open}
        ></ArrowIcon>
      </ContainerTitulo>
      {open && (
        <>
          <Divisor />
          <ContainerHabilidade>
            {titulo === "Conhecimento" &&
              habilidade.map((item) => (
                <Habilidade
                  key={item.habilidade}
                  habilidade={item.habilidade}
                  active={item.active}
                />
              ))}
            {titulo === "Pericia" &&
              pericia.map((item) => (
                <Habilidade
                  key={item.habilidade}
                  habilidade={item.habilidade}
                  active={item.active}
                />
              ))}
            {titulo === "Talentos" &&
              talentos.map((item) => (
                <Habilidade
                  key={item.habilidade}
                  habilidade={item.habilidade}
                  active={item.active}
                />
              ))}
          </ContainerHabilidade>
        </>
      )}
    </Container>
  );
}

export default Habilidades;
