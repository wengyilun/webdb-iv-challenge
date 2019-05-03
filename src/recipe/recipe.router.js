import * as controllers from "./recipe.controllers"

function setupRecipeRoutes(router){
	console.log('setupRecipeRoutes')
	router.get('/', controllers.getRecipes)
	router.get('/:id', controllers.getRecipe)
	router.post('/', controllers.postRecipe)
	router.put('/:id', controllers.updateRecipe)
	router.delete('/:id', controllers.deleteRecipe)
}

export default setupRecipeRoutes
