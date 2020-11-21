const theme = require("./src/theme")

module.exports = {
  siteMetadata: {
    title: `Gatsby Starter With Ant-Design and Dark/Light mode Toggle`,
    description: `Gatsby Starter With Ant-Design and Dark/Light mode Toggle`,
    author: `@huynguyendev1305`,
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
    "gatsby-plugin-dark-mode",
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-with-antd-darkmode`,
        short_name: `gatsby-starter`,
        start_url: `/`,
        background_color: `#272822`,
        theme_color: `#272822`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-less",
      options: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: theme,
        },
      },
    },
    {
      resolve: "gatsby-plugin-antd",
      options: {
        style: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
