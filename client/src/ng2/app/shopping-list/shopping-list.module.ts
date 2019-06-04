import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import {downgradeComponent, downgradeInjectable} from "@angular/upgrade/static";
import {ShoppingListService} from "./shopping-list.service";

declare var angular: any;

angular.module('recipe-book')
    .directive('shoppingList', downgradeComponent({component: ShoppingListComponent}))
    .factory('shoppingListService', downgradeInjectable(ShoppingListService))

@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [
    CommonModule
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
