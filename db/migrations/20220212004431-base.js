'use strict';
const {AREA_TABLE, AreaSchema} = require('../models/Area.model');
const {USER_TABLE, UserSchema} = require('../models/User.model');
const {NOTES_TABLE, NoteSchema}=require('../models/note.model')

module.exports = {
  async up (queryInterface) {
      queryInterface.createTable(AREA_TABLE, AreaSchema);
      queryInterface.createTable(USER_TABLE, UserSchema);
      queryInterface.createTable(NOTES_TABLE, NoteSchema);
  },

  async down (queryInterface) {
      queryInterface.dropTable(AREA_TABLE);
      queryInterface.dropTable(USER_TABLE);
      queryInterface.dropTable(NOTES_TABLE);
  }
};
