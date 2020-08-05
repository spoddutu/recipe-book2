import {Component, Inject, OnInit} from '@angular/core';
import {RECIPE_SERVICE} from "../shared/ajs-upgraded-providers";
import {StateService} from '@uirouter/core';

@Component({
  selector: 'app-favourite-recipes',
  templateUrl: './favourite-recipes.component.html',
  styleUrls: ['./favourite-recipes.component.css']
})
export class FavouriteRecipesComponent implements OnInit {
  recipes: any[] = [];

  constructor(@Inject(RECIPE_SERVICE) private recipeService: any, private readonly state: StateService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getFavRecipes();
  }

  displayIngredients(recipe) {
    this.state.go("favs.idetail", {name: recipe.name});
  }
}
