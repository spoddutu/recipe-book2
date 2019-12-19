import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouriteRecipesComponent } from './favourite-recipes.component';
import {recipeServiceProvider} from "../shared/ajs-upgraded-providers";
import {downgradeComponent} from "@angular/upgrade/static";
import {RecipesModule} from "../recipes/recipes.module";

import {UIRouterUpgradeModule} from "@uirouter/angular-hybrid";
import {UrlService, StateService} from '@uirouter/core';
import {Ng2StateDeclaration} from '@uirouter/angular';
import {RecipeIngredientsComponent} from "./ingredients/recipe-ingredients.component";

declare var angular: any;

// angular.module('recipe-book', ['ui.router.upgrade'])
angular.module('recipe-book')
    // .directive('favRecipes', downgradeComponent({ component: FavouriteRecipesComponent }))
    .config([ '$urlServiceProvider', ($urlService: UrlService) => {
      $urlService.deferIntercept()
    }]);

const favsState: Ng2StateDeclaration = {
    name: "favs",
    url: "/favs",
    component: FavouriteRecipesComponent
};

const favsDetailState: Ng2StateDeclaration = {
    name: "favs.idetail",
    url: "/detail",
    params: {
        name: undefined
    },
    component: RecipeIngredientsComponent
};

@NgModule({
  declarations: [FavouriteRecipesComponent, RecipeIngredientsComponent],
  imports: [
    CommonModule,
    RecipesModule,
    UIRouterUpgradeModule.forChild({states: [favsState, favsDetailState]})
  ],
  providers: [recipeServiceProvider],
  entryComponents: [FavouriteRecipesComponent]
})
export class FavouriteRecipesModule {}
