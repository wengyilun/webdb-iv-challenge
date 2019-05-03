
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {ingredient_id: 1, recipe_id:11 ,quantity:1.00},
        {ingredient_id: 5, recipe_id:11 ,quantity:4.00},
        {ingredient_id: 6, recipe_id:11 ,quantity:3.00},
        {ingredient_id: 4, recipe_id:13 ,quantity:1.00},
        {ingredient_id: 5, recipe_id:13 ,quantity:4.00},
      ]);
    });
};
