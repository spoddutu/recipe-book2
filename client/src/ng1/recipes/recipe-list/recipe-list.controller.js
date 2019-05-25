export default class RecipeListController {
    constructor(RecipeService){
        this.recipes = RecipeService.getRecipes();
    }
}

RecipeListController.$inject = ['RecipeService']