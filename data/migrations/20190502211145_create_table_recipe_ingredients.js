
exports.up = function(knex, Promise) {
	return knex.schema.createTable('recipe_ingredients', function (tbl){
		tbl.increments();
		
		tbl
		.float('quantity', 2)
		.notNullable()
		.defaultTo(0)
	
		tbl
		.integer('ingredient_id')
		.unsigned()
		.notNullable()
		.references('id')
		.inTable('ingredients')
		.onDelete('RESTRICT')
		.onUpdate('CASCADE');
		
		tbl
		.integer('recipe_id')
		.unsigned()
		.notNullable()
		.references('id')
		.inTable('recipes')
		.onDelete('RESTRICT')
		.onUpdate('CASCADE');
	})
	
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('recipe_ingredients')
};
