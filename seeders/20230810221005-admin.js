// 'use strict';
// const bcrypt = require("bcrypt")

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up (queryInterface, Sequelize) {
//     /**
//      * Add seed commands here.
//      *
//      * Example:
//      * await queryInterface.bulkInsert('People', [{
//      *   name: 'John Doe',
//      *   isBetaMember: false
//      * }], {});
//     */
//     await queryInterface.bulkInsert("Admins", [
//       {
//         userName: "admin",
//         password: bcrypt.hashSync("12345678", 10),
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//     ]);
//   },

//   async down (queryInterface, Sequelize) {
//     /**
//      * Add commands to revert seed here.
//      *
//      * Example:
//      * await queryInterface.bulkDelete('People', null, {});
//      */
//   }
// };
