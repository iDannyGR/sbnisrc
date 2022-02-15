const {Model, DataTypes, Sequelize } = require('sequelize');
const { AREA_TABLE } = require('./Area.model');
const USER_TABLE = "users";

const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  lastName: {
    field: 'last_name',
    allowNull: false,
    type: DataTypes.STRING
  },
  grade: {
    allowNull: false,
    type: DataTypes.STRING
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    validate: {
      isEmail: true
    }
  },
  position: {
    allowNull: false,
    type: DataTypes.STRING
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  areaId: {
    field: 'area_id',
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: AREA_TABLE,
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

class User extends Model{
    static associate(models){
      this.belongsTo(models.Area,{as:'area'});
      this.hasMany(models.Notes,{as:'note', foreignKey:'userId'})
    }

    static config(sequelize){
     return{
      sequelize,
      tableName:USER_TABLE,
      modelName:'User',
      timestamps:false
    }
  }
};

module.exports = {USER_TABLE, UserSchema, User};
