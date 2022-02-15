const {Model, DataTypes, Sequelize } = require('sequelize');
const {USER_TABLE}=require('./User.model')

const NOTES_TABLE = 'notes';

const NoteSchema ={
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      userId:{
        field: 'sender_id',
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
          model: USER_TABLE,
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      type: {
        allowNull:false,
        type: DataTypes.STRING
      },
      title: {
        allowNull:false,
        type: DataTypes.STRING
      },
      note: {
        allowNull:false,
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field:'create_at',
        defaultValue:DataTypes.NOW
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field:'update_at',
        defaultValue:DataTypes.NOW
      }
}
class Notes extends Model{
    static associate(models){
      this.belongsTo(models.User, {as: 'user'});
      this.belongsToMany(models.User,{
        as: 'reciberNotes',
        through: models.UserNotes,
        foreignKey: 'noteId',
        otherKey: 'userId'
      });
    }
    static config(sequelize){
      return{
      sequelize,
      tableName:NOTES_TABLE,
      modelName: 'Notes',
      timestamps:false
    }
  }
}

module.exports = {NoteSchema, NOTES_TABLE, Notes}



