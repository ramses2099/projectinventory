'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let users = [
      {user_name:'admin', user_password:'123456',user_role:'admin' ,createdAt: new Date(), updatedAt: new Date() },
      {user_name:'ramses2099', user_password:'123456',user_role:'member' ,createdAt: new Date(), updatedAt: new Date() }     
     
    ];

    await queryInterface.bulkInsert('Users', users, {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
