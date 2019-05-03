
exports.seed = function(knex, Promise) {
  return knex('ingredients').truncate()
    .then(function () {
      return knex('ingredients').insert([
        {name:'beef'},
        {name:'fish'},
        {name:'chili'},
        {name:'tomato'},
        {name:'flour'},
        {name:'oil'},
        {name:'soy sauce'},
      ]);
    });
};
