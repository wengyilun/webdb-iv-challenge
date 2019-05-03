
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
  .then(function () {
    // Inserts seed entries
    return knex('recipes').insert([
      {name: 'fish taco', dish_id: 1},
      {name: 'beef taco', dish_id: 1},
      {name: 'vegi taco', dish_id: 1},
      {name: 'tomato pizza', dish_id: 2},
      {name: 'fruit pizza', dish_id: 2},
      {name: 'vegan pizza', dish_id: 2},
      {name: 'corn bugger', dish_id: 3},
      {name: 'bean bugger', dish_id: 3},
      {name: 'cheese bugger', dish_id: 3},
      {name: 'mega cheese bugger', dish_id: 3},
    ]);
  });
};
