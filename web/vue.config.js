const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
const zlib = require('zlib')

process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
  pluginOptions: {
    // https://github.com/webpack-contrib/compression-webpack-plugin/tree/v6.1.1
    compression: {
      // brotli: {
      //   filename: '[file].br[query]',
      //   algorithm: 'brotliCompress',
      //   include: /\.(js|css|html|svg|json)(\?.*)?$/i,
      //   compressionOptions: {
      //     params: {
      //       [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
      //     },
      //   },
      //   minRatio: 0.8,
      // },
      gzip: {
        filename: '[file].gz[query]',
        algorithm: 'gzip',
        include: /\.(js|css|html|svg|json|map)(\?.*)?$/i,
        minRatio: 0.8,
        deleteOriginalAssets: true,
      },
    },
  },
  publicPath: process.env.BASE_URL,
  outputDir: process.env.VUE_APP_OUTPUT_DIR,
  configureWebpack: {
    plugins: [
      new MonacoWebpackPlugin({
        output: 'static/',
        languages: ['json'],
        features: [
          '!accessibilityHelp',
          '!bracketMatching',
          'caretOperations',
          'clipboard',
          'codeAction',
          'codelens',
          'colorDetector',
          '!comment',
          '!contextmenu',
          'coreCommands',
          'cursorUndo',
          '!dnd',
          '!find',
          '!folding',
          '!fontZoom',
          '!format',
          '!gotoError',
          '!gotoLine',
          '!gotoSymbol',
          '!hover',
          '!iPadShowKeyboard',
          '!inPlaceReplace',
          'inspectTokens',
          'linesOperations',
          '!links',
          '!multicursor',
          '!parameterHints',
          'quickCommand',
          'quickOutline',
          '!referenceSearch',
          '!rename',
          'smartSelect',
          'snippets',
          '!suggest',
          '!toggleHighContrast',
          'toggleTabFocusMode',
          'transpose',
          'wordHighlighter',
          'wordOperations',
          'wordPartOperations',
        ],
      }),
    ],
  },
}
