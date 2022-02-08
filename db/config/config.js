require('dotenv').config();

const config = {
  env : process.env.NODE_ENV || 'dev' ,
  port : process.env.PORT || 3000,
  dbUser: process.env.DB_USER,
  dbPasword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
};

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPasword);
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`


module.exports = {
  development : {
      url:URI,
      dialect: 'mysql',
  },
  production : {
    url:URI,
    dialect: 'mysql',
}
}
