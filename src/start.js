const express  = require('express')
const helmet  = require('helmet')
const morgan  = require('morgan')
require('dotenv').config()

import setupRecipeRoutes from './recipe/recipe.router'
import setupDishRoutes from './dish/dish.router'
// import setupIngredientRoutes from './ingredient/ingredient.router'

function setupRoutes(app){
	const recipeRouter = express.Router()
	setupRecipeRoutes(recipeRouter)
	app.use('/api/recipes', recipeRouter)
	
	const dishRouter = express.Router()
	setupDishRoutes(dishRouter)
	app.use('/api/dishes', dishRouter)
}

async function startServer() {
	const app = express()
	
	app.use(express.json())
	app.use(helmet())
	app.use(morgan())
	
	setupRoutes(app)
	
	app.listen(4000, () => {
		console.log('server running at 4000')
	})
}

export default startServer
