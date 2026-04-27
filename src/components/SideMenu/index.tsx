import { ContainerOption, ContainerSideMenu, Image, Title } from "./style";
import userIcon from "./../../assets/images/UserIcon.svg";
import statusIcon from "./../../assets/images/IconStatus.svg";
import potenciaSangueIcon from "./../../assets/images/IconPotenciaSangue.svg";
import atributosIcon from "./../../assets/images/IconAtributos.svg";
import conhecimentosIcon from "./../../assets/images/IconConhecimentos.svg";
import periciasIcon from "./../../assets/images/IconPericias.svg";
import talentosIcon from "./../../assets/images/IconTalentos.svg";
import rituaisIcon from "./../../assets/images/IconRituais.svg";
import disciplinasIcon from "./../../assets/images/IconDisciplinas.svg";
import possesIcon from "./../../assets/images/IconPosses.svg";
import objetivosIcon from "./../../assets/images/IconObjetivos.svg";
import moralidadeIcon from "./../../assets/images/IconMoralidade.svg";
import antedecedentesIcon from "./../../assets/images/IconAntecedentes.svg";
interface SideMenuProps {
  open: boolean;
}

function SideMenu({ open }: SideMenuProps) {
  return (
    <ContainerSideMenu open={open}>
      <ContainerOption>
        <Image src={userIcon} />
        <Title>Visão Geral</Title>
      </ContainerOption>
      <ContainerOption>
        <Image src={statusIcon} />
        <Title>Status</Title>
      </ContainerOption>
      <ContainerOption>
        <Image src={potenciaSangueIcon} />
        <Title>Potência de Sangue</Title>
      </ContainerOption>
      <ContainerOption>
        <Image src={atributosIcon} />
        <Title>Atributos</Title>
      </ContainerOption>
      <ContainerOption>
        <Image src={conhecimentosIcon} />
        <Title>Conhecimentos</Title>
      </ContainerOption>
      <ContainerOption>
        <Image src={periciasIcon} />
        <Title>Perícias</Title>
      </ContainerOption>
      <ContainerOption>
        <Image src={talentosIcon} />
        <Title>Talentos</Title>
      </ContainerOption>
      <ContainerOption>
        <Image src={rituaisIcon} />
        <Title>Rituais</Title>
      </ContainerOption>
      <ContainerOption>
        <Image src={disciplinasIcon} />
        <Title>Disciplinas</Title>
      </ContainerOption>
      <ContainerOption>
        <Image src={possesIcon} />
        <Title>Posses</Title>
      </ContainerOption>
      <ContainerOption>
        <Image src={objetivosIcon} />
        <Title>Objetivos</Title>
      </ContainerOption>
      <ContainerOption>
        <Image src={moralidadeIcon} />
        <Title>Moralidade</Title>
      </ContainerOption>
      <ContainerOption>
        <Image src={antedecedentesIcon} />
        <Title>Antecedentes</Title>
      </ContainerOption>
    </ContainerSideMenu>
  );
}

export default SideMenu;
