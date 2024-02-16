import { FeaturedTeaserProps } from "@/components/Header/components/BlockPieces/FeaturedTeasers/components/FeaturedTeaser";

export const featuredProjects: FeaturedTeaserProps[] = [
  {
    id: "1",
    featuredText: `Este Projeto de estudo foi desenvolvido em ReactJs no evento Next Level Week da Rocketseat, foi quando tive meu primeiro contato com esta ferramenta, mas na época já dei uma boa invrementada no projeto fazendo integração com plataformas de streaming através da lib react-player.`,
    imageUrl:
      "https://raw.githubusercontent.com/teilorbarcelos/portfolio-gatsby/main/src/images/letmeask.png",
    title: "Letmeask",
    url: "https://letmeask-f38c5.web.app/",
    repository: "https://github.com/teilorbarcelos/letmeask",
  },
  {
    id: "2",
    featuredText: `Este Projeto de estudo foi desenvolvido em NextJs no evento Next Level Week da Rocketseat, no evento foi ensinado originalmente em html, css e javascript, mas como eu queria treinar minhas habilidades com ReactJs em um framework robusto, fiz com nextJs e o resultado foi esse.`,
    imageUrl:
      "https://raw.githubusercontent.com/teilorbarcelos/portfolio-gatsby/main/src/images/origin.png",
    title: "Origin-Ten",
    url: "https://origin-ten.vercel.app/",
    repository: "https://github.com/teilorbarcelos/origin",
  },
  {
    id: "3",
    featuredText: `Este aplicativo foi desenvolvido em um curso de programação do Nextjs da escola online Rocketseat, no curso Ignite para desenvolvedores avançados. É um aplicativo JAM Stack, SSR & SSG bootstrapped com [Create Next App] e, basicamente, é um blog de notícias, o FaunaDB foi usado para armazenar todos os dados, o sistema de login foi feito com Github API, a loja o sistema foi feito com stripe API e o sistema de posts foi feito com CMS prismic, afinal adicionei a responsividade ao layout por conta própria.`,
    imageUrl:
      "https://raw.githubusercontent.com/teilorbarcelos/portfolio-gatsby/main/src/images/tsb-news.png",
    title: "Tsb News",
    url: "https://tsbnews.vercel.app/",
    repository: "https://github.com/teilorbarcelos/tsbnews",
  },
];
