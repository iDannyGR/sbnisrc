const { Router } = require('express');
const Area =require('./areaRouter');
const Users = require('./usersRouter');
const notes = require('./noteRouter')

function routerApi(app){
  const router = Router();
  app.use('/sbnisrc', router);
  router.use('/area', Area);
  router.use('/users', Users);
  router.use('/notes', notes)
}

module.exports = routerApi;
