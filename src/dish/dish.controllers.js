import db from '../utils/db'
const tableName = 'dishes'

export const getDishes = async (req, res) => {
	try {
		const recipe = await db.get(tableName)
		res.status(200).json(recipe)
	}
	catch(e){
		console.error(e)
		res.status(500).json(e);
	}
}

export const postDish = async (req, res) => {
	try {
		if(!req.body.name){
			res.status(401).json({message:'Name is a required field'})
		}
		const lastId = await db.post(tableName, req.body)
		res.status(201).json(lastId)
	}
	catch(e){
		console.error(e)
		res.status(500).json(e);
	}
}

export const updateDish = async (req, res) => {
	try {
		if(!req.body.name || !req.params.id){
			res.status(401).json({message:'Name and id is a required field'})
		}
		const count = await db.updateById(tableName, req.params.id, req.body)
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

export const deleteDish = async (req, res) => {
	try {
		if(!req.params.id){
			res.status(401).json({message:'id is required'})
		}
		const count = await db.deleteById(tableName, req.params.id)
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
