const { User, UserSchema } = require('../models/User.model');
const { Area, AreaSchema } = require('../models/Area.model');
const { Notes, NoteSchema } = require('../models/Note.model');
const { UserNotes, UserNotesSchema } = require('../models/userNotes.model');

const setupModels = sequelize => {
  Area.init(AreaSchema, Area.config(sequelize))
  User.init(UserSchema, User.config(sequelize))
  Notes.init(NoteSchema, Notes.config(sequelize))
  UserNotes.init(UserNotesSchema, UserNotes.config(sequelize))

  Area.associate(sequelize.models)
  User.associate(sequelize.models)
  Notes.associate(sequelize.models)
}

module.exports = setupModels;
