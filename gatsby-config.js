module.exports = {
  siteMetadata: {
    title: `PataCONF - Conferencia Virtual 2020`,
    description: `El festival de programación donde las comunidades son bienvenidas a dar una charla.`,
    author: `Colombia.dev`,
  },
  plugins: [
    `gatsby-transformer-json`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-emotion`,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pataconf Conferencia virtual`,
        short_name: `PatacCONF`,
        start_url: `/`,
        background_color: `#fdc302`,
        theme_color: `#fdc302`,
        display: `minimal-ui`,
        icon: `src/images/pataconf.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
