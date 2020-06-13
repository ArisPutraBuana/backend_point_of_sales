"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "UX & UI",
          description: "Belajar membuat design yang baik",
          image: "images/seed-image.png",
          price: 100000,
          stock: 100,
          category: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "MERN Stack",
          description: "Fullstack Javascript",
          image: "images/seed-image.png",
          price: 400000,
          stock: 900,
          category: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Products", null, {});
  },
};
