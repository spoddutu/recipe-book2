import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {Ingredient} from "../shared/model/ingredient.model";
import {StateService} from '@uirouter/core';
import { State, getShoppingList } from "../app.reducer";
import { Observable } from "rxjs";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients$: Observable<Ingredient[]>;

  constructor(private store: Store<State>, private $state: StateService) {
      this.store = store;
  }

  ngOnInit() {
      this.ingredients$ = this.store.pipe(select(getShoppingList));
  }

  navigateTo() {
    this.$state.go("recipes");
  }
}
