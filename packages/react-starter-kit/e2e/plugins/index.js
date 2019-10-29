const webpackPreprocessor = require('@cypress/webpack-preprocessor');
const dotenv = require('dotenv').config();

if (dotenv.error) {
  throw dotenv.error;
}

module.exports = (on, config) => {
  const options = {
    webpackOptions: require('../webpack.config')
  };

  config.env = dotenv.parsed;
  config.baseUrl = config.env.REACT_APP_URL;

  on('file:preprocessor', webpackPreprocessor(options));

  return config;
};
