
import knex from 'knex'
import knexConfig from '../../knexfile.js'
const db = knex(knexConfig.development)

const dao = {
	getRecipes,
	insertRecipe,
	updateRecipe,
	deleteRecipe,
	
	get,
	post,
	updateById,
	deleteById
}

async function get(tbl){
	return db(tbl)
}

async function post(tbl, recipe){
	return db.insert(recipe)
	.into(tbl)
}

async function updateById(tbl, id, recipe){
	return db.where({id:id})
	.update(recipe)
	.into(tbl)
}

async function deleteById(tbl, id){
	return db(tbl)
	.where({id:id})
	.del()
}


async function getRecipes(){
	return db('recipes')
}

async function insertRecipe(recipe){
	return db.insert(recipe)
		.into('recipes')
}

async function updateRecipe(id, recipe){
	return db.where({id:id})
		.update(recipe)
		.into('recipes')
}

async function deleteRecipe(id){
	return db('recipes')
		.where({id:id})
		.del()
}

export default dao
