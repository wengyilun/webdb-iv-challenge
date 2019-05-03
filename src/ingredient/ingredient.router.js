import * as controllers from "./ingredient.controllers"

function setupIngredientRoutes(router){
	router.get('/', controllers.getDishes)
	router.post('/', controllers.postDish)
	router.put('/:id', controllers.updateDish)
	router.delete('/:id', controllers.deleteDish)
}

export default setupIngredientRoutes
