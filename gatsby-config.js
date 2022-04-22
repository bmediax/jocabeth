module.exports = {
  siteMetadata: {
    title: `Jocabeth's Memorial Site`,
    description: `Jocabeth, for those that knew her, was an extraordinarily strong woman who was fighting lupus for over 15 years and was active in her community. She inspired many people and made strives to keep moving forward.`,
    author: `Brian M.`,
    siteUrl: `https://jocabeth.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        resetCSS: true,
        isUsingColorMode: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jocabeth`,
        short_name: `joca`,
        start_url: `/`,
        background_color: `#000`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
