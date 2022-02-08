const boom = require('@hapi/boom');
const {models} = require('../lib/sequelize')

class areaService{
    constructor(){};

    async create(data){
      const [itExist, created] = await models.Area.findOrCreate({
        where:{name: data.name}
      });
      if(!created){
        throw boom.badRequest('Area duplicate')
      }
      return itExist
    };

    async find(){
      const response = await models.Area.findAll()
      return response;
    };
    async findOne(id){
      const area = await models.Area.findByPk(id);
      if(!area){
        throw boom.notFound('area dont exist');
      }
      return area
    };

    async update(id, changes){
      const response = await this.findOne(id);
      await response.update(changes);
      return response;
    };

    async delete(id){
      const response = await this.findOne(id)
      await response.destroy();
      return {response:true}
    };
}

module.exports = areaService;
