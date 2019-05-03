
exports.up = function(knex, Promise) {
  return knex.schema.table('ingredient_recipes', function (tbl){
  	tbl.float('quantity', 2)
		.notNullable()
		.defaultTo(0)

  })
};

exports.down = function(knex, Promise) {
	return knex.schema.table('ingredient_recipes', function (tbl){
		tbl.dropColumn('quantity')
	})
};
