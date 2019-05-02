
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes')
    .truncate()
    .then(function () {
      return knex('dishes').insert([
        {name: 'taco'},
        {name: 'pizza'},
        {name: 'burger'},
      ]);
    });
};
