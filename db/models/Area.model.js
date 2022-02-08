const {Model, DataTypes, Sequelize } = require('sequelize');
const AREA_TABLE = 'areas';

const AreaSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
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
class Area extends Model{
  static associate(models){
      this.hasMany(models.User, { as: "users", foreignKey: "areaId"});
  }
  static config(sequelize){
    return{
      sequelize,
      tableName:AREA_TABLE,
      modelName:'Area',
      timestamps:false
    }
  }


}


module.exports ={AREA_TABLE, AreaSchema, Area};

