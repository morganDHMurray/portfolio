module.exports = {
  pathPrefix: '/portfolio',
  siteMetadata: {
    title: `Morgan Murray Portfolio`,
    description: `This is my portfolio, please like me`,
    author: `Morgan Murray`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Morgan Murray Portfolio`,
        short_name: `Portfolio`,
        start_url: `.`,
        background_color: `#ffffff`,
        theme_color: `#D94C47`,
        display: `standalone`,
        icon: `src/images/icon.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-transition-link`,
  ],
};
