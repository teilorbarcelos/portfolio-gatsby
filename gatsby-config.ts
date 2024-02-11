import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `portfolio-gatsby`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: {
          "@/components": "src/components",
          "@/styles": "src/styles",
          "@/pages": "src/pages",
        },
        extensions: ["js", "jsx", "ts", "tsx"],
      },
    },
  ],
};

export default config;
