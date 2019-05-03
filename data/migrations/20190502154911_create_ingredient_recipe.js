
exports.up = function(knex, Promise) {
	return knex.schema
	.createTable('ingredient_recipes', function (tbl) {
		tbl.increments();
		
		tbl
		.integer('ingredient_id')
		.unsigned()
		.notNullable()
		.references('id')
		.inTable('ingredient')
		.onDelete('RESTRICT')
		.onUpdate('CASCADE');
		
		tbl
		.integer('recipe_id')
		.unsigned()
		.notNullable()
		.references('id')
		.inTable('recipe')
		.onDelete('RESTRICT')
		.onUpdate('CASCADE');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('ingredient_recipes')
};
