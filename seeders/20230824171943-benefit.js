'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert("Benefits", [
      {
        name: "Uang Rp.100.000",
        point: "1000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "1 Paket Sembako",
        point: "1500",
        createdAt: new Date(),
        updatedAt: new Date(),

      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
