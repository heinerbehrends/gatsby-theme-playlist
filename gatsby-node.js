const fs = require('fs');

// make sure the data directory exists
exports.onPreBootstrap = ({ reporter }) => {
  const contentPath = 'data';

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`)
    fs.mkdirSync(contentPath)
  }
}

// define the song type 
exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
    type Song implements Node {
      id: ID!
      title: String!
      lyrics: String!
      music: String!
      url: String!
      image: String
    }
  `)
}

// create a page for the playlist
exports.createPages = async ({ actions, graphql, reporter }) => {
  const basePath = '/';
  actions.createPage({
    path: basePath,
    component: require.resolve('./src/templates/playlistTemplate'),
  })
}

