const config = require('../config');
const pkg = require('../package.json');

const globals = {
  __DEV__: config.env === 'development',
  __PROD__: config.env === 'production',
  __TEST__: config.env === 'test',
  __BASENAME__: JSON.stringify(process.env.BASENAME || ''),
  __VERSION__: JSON.stringify(pkg.version)
};
const cssModulesLoader = [
  'css-loader?sourceMap&-minimize',
  'modules',
  'importLoaders=1',
  'localIdentName=[name]__[local]___[hash:base64:5]'
].join('&');

// Export a function. Accept the base config as the only param.
module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.module.rules.push({
    test: /\.css$/,
    use: ['style-loader', cssModulesLoader, 'postcss-loader']
  }) ;

  storybookBaseConfig.module.rules.push({
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]
  })

  // The baseConfig already uses a definePlugin instance, webpack ignores
  // every instance but the first, so we need to add our globals to the existing
  // ones. Yep this is dirty!
  Object.assign(
    storybookBaseConfig.plugins[0].definitions['process.env'],
    globals
  );

  // Return the altered config
  return storybookBaseConfig;
};
