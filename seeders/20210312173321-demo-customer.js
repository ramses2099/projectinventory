'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    let customers =[
      {name:'juan perez',tel:'809-591-2369', email:'juan.perez@gmail.com', createdAt: new Date(), updatedAt: new Date()},
      {name:'juana perez',tel:'809-591-2369', email:'juana.perez@gmail.com', createdAt: new Date(), updatedAt: new Date()},
      {name:'maria rodriguez',tel:'829-599-2369', email:'maria.rodriguez@gmail.com', createdAt: new Date(), updatedAt: new Date()}
    ];

    await queryInterface.bulkInsert('Customers', customers, {});
    
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Customers', null, {});    
  }
};
