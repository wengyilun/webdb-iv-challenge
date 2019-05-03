import * as controllers from "./dish.controllers"

function setupDishRoutes(router){
	router.get('/', controllers.getDishes)
	router.post('/', controllers.postDish)
	router.get('/:id', controllers.getDish)
	router.put('/:id', controllers.updateDish)
	router.delete('/:id', controllers.deleteDish)
}

export default setupDishRoutes
