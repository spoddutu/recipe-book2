import {Component, Inject, OnInit} from '@angular/core';
import {RECIPE_SERVICE} from "../../shared/ajs-upgraded-providers";
import {StateService} from '@uirouter/core';

@Component({
    selector: 'app-favourite-recipe-ingredients',
    templateUrl: './recipe-ingredients.component.html'
})
export class RecipeIngredientsComponent implements OnInit {
    ingredients: any[];

    constructor(@Inject(RECIPE_SERVICE) private recipeService: any, private readonly state: StateService) {
        console.error("In IDetail const");
    }

    ngOnInit() {
        console.error("In IDetail component");
        this.ingredients = this.recipeService.getFavRecipeIngredients(this.state.params.name)[0].ingredients;
    }
}
