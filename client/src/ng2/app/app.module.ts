import { BrowserModule } from '@angular/platform-browser';
import { DoBootstrap, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { downgradeInjectable, UpgradeModule } from '@angular/upgrade/static';

// import { AppRoutingModule } from './app-routing.module';
import { ShoppingListModule } from "./shopping-list/shopping-list.module";
import { FavouriteRecipesModule } from "./favourite-recipes/favourite-recipes.module";
import { RecipesModule } from './recipes/recipes.module';
import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {UIRouterUpgradeModule} from "@uirouter/angular-hybrid";
import { AppComponent } from './app.component';
import * as angular from 'angular';

angular.module('recipe-book')
    .factory('ngrxStoreService', downgradeInjectable(Store))
    ;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    UpgradeModule,
    UIRouterUpgradeModule.forRoot(),
    RecipesModule,
    RouterModule,
    ShoppingListModule,
    FavouriteRecipesModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: []
})
export class AppModule implements DoBootstrap {
  constructor(private upgrade: UpgradeModule) {
    console.error("in Ng2 constructor");
  }

  ngDoBootstrap(){
    console.error("Bootstrap from ng2");
    this.upgrade.bootstrap(document.body, ['recipe-book'], {strictDi: true});
  }
}
