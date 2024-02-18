interface ProjectsTimelineListItemProps {
  start: string;
  end: string;
  customer: string;
  description: string;
}

export interface TimelineListItemProps {
  start: string;
  end: string;
  company: string;
  responsibility: string;
  description: string;
  projectsTimeline?: ProjectsTimelineListItemProps[];
}

export const worksTimelineList: TimelineListItemProps[] = [
  {
    start: "2020",
    end: "2022",
    company: "Free-Lance",
    responsibility: "Desenvolvedor web Full-Stack",
    description:
      "Desenvolvimento de sistemas para pequenas empresas, como gerenciamento de clientes e almoxarifado.",
  },
  {
    start: "2022",
    end: "Hoje",
    company: "UDS Técnologia",
    responsibility: "Desenvolvedor web Full-Stack",
    description: "Desenvolvimento de sistemas variados.",
    projectsTimeline: [
      {
        start: "01/2022",
        end: "04/2022",
        customer: "Credisan",
        description:
          "Foi desenvolvido todo o frontend do projeto do início ao fim e integrado com o backend.",
      },
      {
        start: "04/2022",
        end: "06/2022",
        customer: "Whirlpool",
        description:
          "Foram adicionadas novas funcionalidades ao sistema que já estava concluído, atuando apenas no frontend e integrando com o backend já pronto.",
      },
      {
        start: "06/2022",
        end: "Hoje",
        customer: "Nexo Jornal",
        description: `Foram adicionadas várias funcionaliades ao frontend que já existia desde 2016. Este foi um grande desafio, era um projeto legado muito complicado, mas adicionei várias novas features, as mais notáveis pode se dizer que são a sessão Ponto Futuro e o sistema do Subscribe with Google completo, posteriormente, em fevereiro de 2023, começamos o desenvolvimento do site todo com tecnologias mais atuais, para uma migração completa, que foi concluída em 30/12/2023, após isso o projeto entrou no modo sustentação, que dura até hoje.`,
      },
      {
        start: "07/2023",
        end: "08/2023",
        customer: "Utreino",
        description:
          "Foram adicionadas novas funcionalidades ao sistema que estava em andamento, atuando como Full-Stack.",
      },
      {
        start: "09/2023",
        end: "10/2023",
        customer: "Verocard",
        description:
          "Foram adicionadas novas funcionalidades ao sistema que estava em andamento, atuando como backend.",
      },
      {
        start: "10/2023",
        end: "11/2023",
        customer: "Selffi",
        description:
          "Foram adicionadas novas funcionalidades ao sistema que estava em andamento, atuando como backend.",
      },
      {
        start: "11/2023",
        end: "11/2023",
        customer: "Atto Sementes",
        description:
          "Foram adicionadas novas funcionalidades ao sistema que estava em andamento, atuando como backend.",
      },
    ],
  },
];
