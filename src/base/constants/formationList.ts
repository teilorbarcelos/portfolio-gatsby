interface FormationItemProps {
  id: string;
  title: string;
  url?: string;
  school: string;
  date: string;
}

export const formationList: FormationItemProps[] = [
  {
    id: "1",
    title: "Ensino Médio",
    url: "https://unisatc.com.br/ensino-medio/",
    school: "SATC",
    date: "2003 - 2005",
  },
  {
    id: "2",
    title: "Análise e Desenvolvimento de Sistemas",
    url: "https://www.vemprafam.com.br/",
    school: "FAM - Centro Universitário das Américas",
    date: "2022 - 2024",
  },
];
