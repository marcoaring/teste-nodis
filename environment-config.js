const fs = require('fs');
const activeEnv = process.env.ACTIVE_ENV === false ? 'development' : process.env.ACTIVE_ENV;

require('dotenv').config({
  path: `.env.${ activeEnv }`,
});

const env = {
  API_URL: process.env.API_URL
};

const createEnvFile = () => {
  return new Promise((resolve, reject) => {
    fs.writeFile(
      'environment.js',
      `export default ${ JSON.stringify(env) }`,
      'utf8',
      (error) => {
        return error ? reject(error) : resolve();
      }
    );
  });
};

module.exports = createEnvFile;
