'use strict';
const {USERNOTES_TABLE, UserNotesSchema} = require('../models/userNotes.model');



module.exports = {
  async up (queryInterface) {
      queryInterface.createTable(USERNOTES_TABLE, UserNotesSchema);
       },

  async down (queryInterface) {
      queryInterface.dropTable(USERNOTES_TABLE);
      }
};
