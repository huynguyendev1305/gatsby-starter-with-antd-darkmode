<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's default starter with Ant-Design and Dark/Light mode
</h1>

npm used:

```shell

  npm install gatsby-plugin-styled-components styled-components babel-plugin-styled-components gatsby-plugin-less gatsby-plugin-dark-mode react-dark-mode-toggle

  npm install antd gatsby-plugin-antd --save

```

config:

```shell
  #gatsby-config.js
  const theme = require("./src/theme")

  plugins: [
  ...

    "gatsby-plugin-dark-mode",
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-less",
      options: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: theme, // You can customize on file `./src/theme/index.js`
        },
      },
    },
    {
      resolve: "gatsby-plugin-antd",
      options: {
        style: true,
      },
    },

  ...
  ],
```
