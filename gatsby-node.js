require = require('esm')(module);
const createEnvFile = require('./environment-config');
createEnvFile();

// Esse cara e para nao dar erro no hot loader do react-dom
exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig();

  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom'
    };
  }
};
