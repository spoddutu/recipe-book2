import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import {downgradeComponent, downgradeInjectable} from "@angular/upgrade/static";
import { StoreModule } from "@ngrx/store";
import reducer from "./shopping-list.reducer";
import {AddIngredients} from "./shopping-list.actions";

declare var angular: any;

angular.module('recipe-book')
    .directive('shoppingList', downgradeComponent({component: ShoppingListComponent}))
    .value('AddIngredients', AddIngredients)
    ;

@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('shoppingList', reducer),
  ],
  entryComponents: [ShoppingListComponent],
  providers: [
    {
      provide: '$rootScope',
      useFactory: i => i.get('$rootScope'),
      deps: ['$injector']
    }
  ]

})
export class ShoppingListModule { }
