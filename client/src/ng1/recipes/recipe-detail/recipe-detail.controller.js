export default class RecipeDetailController {
    constructor($state, $stateParams, RecipeService, shoppingListService){
        this.state = $state;
        this.stateParams = $stateParams;
        this.recipeService = RecipeService;

        //Angular Service
        this.shoppingListService = shoppingListService;

        this.isCollapsed = false;
    }

    $onInit() {
        this.index = this.stateParams.index;
        this.recipe = this.recipeService.getRecipeById(this.index);
    }

    deleteRecipe() {
        this.recipeService.deleteRecipe(this.index);
        this.state.go('recipes');
    }

    addToShoppingList() {
        this.shoppingListService.addIngredients(this.recipe.ingredients);
    }

    addToFavs() {
        this.recipeService.addToFavs(this.recipe);
    }
}

RecipeDetailController.$inject = ['$state', '$stateParams', 'RecipeService', 'shoppingListService']