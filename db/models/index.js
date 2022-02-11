const { User, UserSchema } = require('../models/User.model');
const { Area, AreaSchema } = require('../models/Area.model');
const { Notes, NoteSchema } = require('../models/Note.model');
const { UserNotes, UserNotesSchema } = require('../models/userNotes.model');

const setupModels = sequelize => {
  Notes.init(NoteSchema, Notes.config(sequelize))
  Area.init(AreaSchema, Area.config(sequelize))
  User.init(UserSchema, User.config(sequelize))
  UserNotes.init(UserNotesSchema, UserNotes.config(sequelize))

  Notes.associate(sequelize.models)
  Area.associate(sequelize.models)
  User.associate(sequelize.models)
}

module.exports = setupModels;
