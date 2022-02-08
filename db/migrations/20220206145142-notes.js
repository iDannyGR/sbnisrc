'use strict';
const {NOTES_TABLE,NoteSchema} = require('../models/note.model');
module.exports = {
  async up (queryInterface) {
      queryInterface.createTable(NOTES_TABLE, NoteSchema);
  },

  async down (queryInterface) {
      queryInterface.dropTable(NOTES_TABLE);
}

}
