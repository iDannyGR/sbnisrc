'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('areas',[{
     "name":"INFORMATICA"
   },{
    "name":"UACI"
   },
  {
    "name":"REF"
  },
{
  "name":"DESPACHO"
}],{});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('areas', null,{});
  }
};
