import routing from './recipes.routes';

import { RecipesComponent } from "./recipes.component";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";

import RecipesService from "./recipes.service";
import {RecipeItemComponent} from "./recipe-item/recipe-item.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {EditRecipeComponent} from "./recipe-edit/recipe-edit.component";

angular.module('recipes', ['ui.router'])
.config(routing)
.component('recipes', RecipesComponent)
.component('recipeList', RecipeListComponent)
.component('recipeItem', RecipeItemComponent)
.component('recipeDetail', RecipeDetailComponent)
.component('editRecipe', EditRecipeComponent)
.service('RecipeService', RecipesService)