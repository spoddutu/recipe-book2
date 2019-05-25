import {Recipe} from "./recipe.model";

export default class RecipesService {

    constructor(){
        this.recipes = [
            new Recipe('Tasy Schnitzel',
                        'A super tasty Schnitzel - just awesome',
                    'http://images.indianexpress.com/2015/05/macaroni-main.jpg',
                    [{'name': 'eggs', 'amount': 2}]),
            new Recipe('Tasy Schnitzel',
                'A super tasty Schnitzel - just awesome',
                'http://images.indianexpress.com/2015/05/macaroni-main.jpg',
                [{'name': 'Cheese', 'amount': 2}])
        ]
    }

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipeById(id) {
        return this.recipes[id];
    }

    addRecipe(recipe){
        this.recipes.push(new Recipe(recipe.name,
                                    recipe.description,
                                    recipe.imagePath
                                    ));
    }

    deleteRecipe(id){
        this.recipes.splice(id, 1);
    }
}