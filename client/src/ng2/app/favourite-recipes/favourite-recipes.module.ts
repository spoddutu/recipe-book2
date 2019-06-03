import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouriteRecipesComponent } from './favourite-recipes.component';
import {recipeServiceProvider} from "../shared/ajs-upgraded-providers";
import {downgradeComponent} from "@angular/upgrade/static";
import {RecipesModule} from "../recipes/recipes.module";
// import {UIRouterUpgradeModule} from "@uirouter/angular-hybrid";
// import {UrlService} from '@uirouter/core';
import {RouterModule} from "@angular/router";

declare var angular: any;

// angular.module('recipe-book', ['ui.router.upgrade'])
angular.module('recipe-book')
    .directive('favRecipes', downgradeComponent({ component: FavouriteRecipesComponent }))
    // .config([ '$urlServiceProvider', ($urlService: UrlService) => {
    //   $urlService.deferIntercept()
    // }]);
// const routes: Routes = [
//   {path: 'recipes/detail/:id', component: RecipesComponent}
// ];

@NgModule({
  declarations: [FavouriteRecipesComponent],
  imports: [
    CommonModule,
    RecipesModule,
    RouterModule.forRoot([])
    // UIRouterUpgradeModule.forRoot({})
  ],
  providers: [recipeServiceProvider],
  entryComponents: [FavouriteRecipesComponent]
})
export class FavouriteRecipesModule { }
