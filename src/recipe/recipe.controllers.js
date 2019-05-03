import db from '../utils/db'
const tableName = 'recipes'

export const getRecipes = async (req, res) => {
	try {
		const recipe = await db.getRecipes()
		res.status(200).json(recipe)
	}
	catch(e){
		console.error(e)
		res.status(500).json(e);
	}
}

export const postRecipe = async (req, res) => {
	try {
		if(!req.body.name){
			res.status(401).json({message:'Name is a required field'})
		}
		const lastId = await db.insertRecipe(req.body)
		res.status(201).json(lastId)
	}
	catch(e){
		console.error(e)
		res.status(500).json(e);
	}
}

export const updateRecipe = async (req, res) => {
	try {
		if(!req.body.name || !req.params.id){
			res.status(401).json({message:'Name and id is a required field'})
		}
		const count = await db.updateRecipe(req.params.id, req.body)
		if(count > 0){
			res.status(200).json({message: `${count} ${count > 1 ? 'records' : 'record'} updated`})
		}else{
			res.status(404).json({ message: 'this cohort does not exist' });
		}
	}
	catch(e){
		res.status(500).json(e);
	}
}

export const deleteRecipe = async (req, res) => {
	try {
		if(!req.params.id){
			res.status(401).json({message:'id is required'})
		}
		const count = await db.deleteRecipe(req.params.id)
		if(count > 0){
			res.status(200).json({message: `${count} ${count > 1 ? 'records' : 'record'} deleted`})
		}else{
			res.status(404).json({ message: 'this cohort does not exist' });
		}
	}
	catch(e){
		res.status(500).json(e);
	}
}


export const getRecipe = async (req, res) => {
	try {
		if(!req.params.id){
			res.status(401).json({message:'id is required'})
		}
		const recipe = await db.getRecipe(tableName, req.params.id)
		console.log('recipe', recipe)
		 res.status(200).json(recipe)
	}
	catch(e){
		console.error(e)
		res.status(500).json(e);
	}
}
