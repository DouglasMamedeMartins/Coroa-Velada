"use client";
import { ContainerOption, ContainerSideMenu, Image, Title } from "./style";
const userIcon = "/images/UserIcon.svg";
const statusIcon = "/images/IconStatus.svg";
const potenciaSangueIcon = "/images/IconPotenciaSangue.svg";
const atributosIcon = "/images/IconAtributos.svg";
const conhecimentosIcon = "/images/IconConhecimentos.svg";
const periciasIcon = "/images/IconPericias.svg";
const talentosIcon = "/images/IconTalentos.svg";
const rituaisIcon = "/images/IconRituais.svg";
const disciplinasIcon = "/images/IconDisciplinas.svg";
const possesIcon = "/images/IconPosses.svg";
const objetivosIcon = "/images/IconObjetivos.svg";
const moralidadeIcon = "/images/IconMoralidade.svg";
const antedecedentesIcon = "/images/IconAntecedentes.svg";
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
  { icon: conhecimentosIcon, label: "Conhecimentos", href: "#Conhecimento" },
  { icon: periciasIcon, label: "Perícias", href: "#Pericia" },
  { icon: talentosIcon, label: "Talentos", href: "#Talentos" },
  { icon: rituaisIcon, label: "Rituais" },
  { icon: disciplinasIcon, label: "Disciplinas" },
  { icon: possesIcon, label: "Posses" },
  { icon: objetivosIcon, label: "Objetivos" },
  { icon: moralidadeIcon, label: "Moralidade" },
  { icon: antedecedentesIcon, label: "Antecedentes" },
];

function SideMenu({ open }: SideMenuProps) {
  return (
    <ContainerSideMenu $open={open}>
      {menuItems.map((item) => (
        <ContainerOption key={item.label}>
          <Image src={item.icon} alt="" />
          <Title href={item.href}>{item.label}</Title>
        </ContainerOption>
      ))}
    </ContainerSideMenu>
  );
}

export default SideMenu;
