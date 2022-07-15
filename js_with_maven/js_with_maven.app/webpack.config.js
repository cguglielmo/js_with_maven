const baseConfig = require('@eclipse-scout/cli/scripts/webpack-defaults');

module.exports = (env, args) => {
  args.resDirArray = ['src/main/resources/WebContent', 'node_modules/@eclipse-scout/core/res'];
  const config = baseConfig(env, args);

  config.entry = {
    'js_with_maven': './src/main/js/js_with_maven.js',
    'js_with_maven-theme': './src/main/js/js_with_maven-theme.less'
  };

  return config;
};
