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
    await queryInterface.bulkInsert("Trashes", [
      {
        name: "Sampah Organik",
        point: "1000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sampah Anorganik",
        point: "2000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sampah Kertas",
        point: "3000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sampah Residu",
        point: "4000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sampah Bahan Berbahaya dan Beracun (B3)",
        point: "5000",
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
