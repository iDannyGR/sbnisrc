const boom = require('@hapi/boom');
const {models} = require('../lib/sequelize')

class userService{
    constructor(){};

    async create(data){
      const newUser = await models.User.create(data)
      return newUser;
    };
    async find(){
      const response = await models.User.findAll()
      return response;
    };
    async findOne(id){
      const user = await models.User.findByPk(id);
      if(!user){
        throw boom.notFound('User dont exist');
      }
      return user
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

module.exports = userService;
