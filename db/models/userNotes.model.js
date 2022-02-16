const {Model, DataTypes, Sequelize } = require('sequelize');
const {USER_TABLE}= require('./User.model');
const {NOTES_TABLE} = require('./note.model')
const USERNOTES_TABLE = 'user_notes';

const UserNotesSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
    noteId:{
    field: 'note_id',
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: NOTES_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  reciberId:{
    field: 'reciber_id',
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'update_at',
    defaultValue: Sequelize.NOW
  }
};
class UserNotes extends Model{
  static associate(models){
    
}
  static config(sequelize){
    return{
      sequelize,
      tableName:USERNOTES_TABLE,
      modelName:'UserNotes',
      timestamps:false
    }
  }


}


module.exports ={USERNOTES_TABLE, UserNotes, UserNotesSchema};

