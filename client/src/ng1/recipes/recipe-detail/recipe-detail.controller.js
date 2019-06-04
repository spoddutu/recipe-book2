export default class RecipeDetailController {
    constructor($state, $stateParams, RecipeService, ngrxStoreService, AddIngredients){
        this.state = $state;
        this.stateParams = $stateParams;
        this.recipeService = RecipeService;

        this.store = ngrxStoreService;
        // TODO: Try to import AddIngredients rather than using dependency injection.
        this.dispatchAddIngredients = (ingredients) => {
          this.store.dispatch(new AddIngredients(ingredients));
        };

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
        this.dispatchAddIngredients(this.recipe.ingredients);
    }

    addToFavs() {
        this.recipeService.addToFavs(this.recipe);
    }
}

RecipeDetailController.$inject = ['$state', '$stateParams', 'RecipeService', 'ngrxStoreService', 'AddIngredients'];
