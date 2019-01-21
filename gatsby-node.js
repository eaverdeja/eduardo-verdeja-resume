/* eslint-disable no-unused-vars */
const path = require('path')
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin')

exports.onCreateWebpackConfig = ({
  stage,
  getConfig,
  rules,
  loaders,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      plugins: [new DirectoryNamedWebpackPlugin()],
    },
    /* module: {
      rules:
        stage === 'build-html'
          ? [
              {
                test: /jspdf/,
                use: loaders.null(),
              },
            ]
          : [],
    }, */
  })
}
