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

const menuItems = [
  { icon: userIcon, label: "Visão Geral", href: "#visao-geral" },
  { icon: statusIcon, label: "Status", href: "#status" },
  {
    icon: potenciaSangueIcon,
    label: "Potência de Sangue",
    href: "#potencia-de-sangue",
  },
  { icon: atributosIcon, label: "Atributos", href: "#atributos" },
  { icon: conhecimentosIcon, label: "Conhecimentos" },
  { icon: periciasIcon, label: "Perícias" },
  { icon: talentosIcon, label: "Talentos" },
  { icon: rituaisIcon, label: "Rituais" },
  { icon: disciplinasIcon, label: "Disciplinas" },
  { icon: possesIcon, label: "Posses" },
  { icon: objetivosIcon, label: "Objetivos" },
  { icon: moralidadeIcon, label: "Moralidade" },
  { icon: antedecedentesIcon, label: "Antecedentes" },
];

function SideMenu({ open }: SideMenuProps) {
  return (
    <ContainerSideMenu open={open}>
      {menuItems.map((item) => (
        <ContainerOption key={item.label}>
          <Image src={item.icon} />
          <Title href={item.href}>{item.label}</Title>
        </ContainerOption>
      ))}
    </ContainerSideMenu>
  );
}

export default SideMenu;
