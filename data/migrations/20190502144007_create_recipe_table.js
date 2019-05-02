
exports.up = function(knex, Promise) {
  	return knex.schema
  	.createTable('recipes', function (tbl) {
		tbl.increments()
		
		tbl.string('name', 128)
			.notNullable()
			.unique()
		
		tbl.integer('dish_id')
			.unsigned()
			.notNullable()
			.references('id')
			.inTable('dishes')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('recipes')
};
