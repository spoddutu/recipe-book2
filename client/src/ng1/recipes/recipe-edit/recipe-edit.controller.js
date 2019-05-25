export default class RecipeEditController {
    constructor($state, $stateParams, RecipeService){
        this.state = $state;
        this.stateParams = $stateParams;
        this.recipeService = RecipeService;
    }

    $onInit() {
        let index = this.stateParams.id;
        if(index !== -1) {
            this.recipe = this.recipeService.getRecipeById(index);
        }
    }

    onSubmit() {
        this.recipeService.addRecipe(this.recipe);
        this.state.go('recipes');
    }

    onCancel(){
        this.state.go('recipes');
    }
}

RecipeEditController.$inject = ['$state', '$stateParams', 'RecipeService']