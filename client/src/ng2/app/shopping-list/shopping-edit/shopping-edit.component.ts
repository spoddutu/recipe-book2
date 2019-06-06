import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/model/ingredient.model";
import {IRootScopeService} from "angular";
import {Store} from "@ngrx/store";
import {State} from "../../app.reducer";
import {AddIngredient} from "../shopping-list.actions";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;

  constructor(
      @Inject('$rootScope') private $rootScope: IRootScopeService,
      private store: Store<State>
  ) {
    this.store = store;
  }

  ngOnInit() {
  }

  addIngredient(){
    const ingredient = new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value);
    this.store.dispatch(new AddIngredient(ingredient));
  }

  incrementCount(){
    this.$rootScope.$broadcast('INCREMENT_COUNTER');
  }

}
