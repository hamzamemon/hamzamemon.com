/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

// https://www.gatsbyjs.org/docs/node-apis/#onCreateWebpackConfig
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@fonts': path.resolve(__dirname, 'src/fonts'),
        '@images': path.resolve(__dirname, 'src/images'),
        '@styles': path.resolve(__dirname, 'src/styles'),
      },
    },
  });
};
