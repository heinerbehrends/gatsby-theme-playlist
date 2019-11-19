const path = require('path');

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: 'data'
      }
    },
    {
      resolve: 'gatsby-transformer-yaml',
      options: {
        typeName: 'Song'
      }
    },
    'gatsby-plugin-theme-ui'
  ]
}