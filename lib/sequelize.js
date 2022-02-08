const {Sequelize} = require('sequelize');
const {development} = require('../db/config/config');
const setupModels = require('../db/models');


const sequelize = new Sequelize(development.url ,{
  dialect:development.dialect,
  logging:true
});
setupModels(sequelize);


module.exports = sequelize;
