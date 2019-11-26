const path = require("path");

module.exports = {
  siteMetadata: {
    title: "Music"
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "data"
      }
    },
    {
      resolve: "gatsby-transformer-yaml",
      options: {
        typeName: "Song"
      }
    },
    "gatsby-plugin-theme-ui",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve(`./src/components/layout.js`)
        },
        extensions: [".mdx", ".md"]
      }
    }
  ]
};
