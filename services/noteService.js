const boom = require('@hapi/boom');
const {models} = require('../lib/sequelize')

class noteService{
    constructor(){};

    async create(data){
      const newNote= await models.Notes.create(data);
      return newNote
    };
    async addEmployee(data){
      const newEmployee= await models.UserNotes.create(data);
      return newEmployee;
    }
    async find(){
      const response = await models.Notes.findAll()
      return response;
    };
    async findOne(id){
      const note = await models.Notes.findByPk(id,{include:'reciberNotes'});
      if(!note){
        throw boom.badRequest('note not exist');
      }
      return note
    };

  async findByFore(){
 //hay que buscar como se busca por llave foranea y agregar un include donde muestre a que user_notes se les envio la nota
  }

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

module.exports = noteService;
;
