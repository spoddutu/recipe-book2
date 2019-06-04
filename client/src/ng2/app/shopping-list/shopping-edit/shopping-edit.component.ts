import {Component, ElementRef, EventEmitter, Inject, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/model/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";
import {IRootScopeService} from "angular";

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
      private shoppingListService: ShoppingListService
  ) { }

  ngOnInit() {
  }

  addIngredient(){
    const ingredient = new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value);
    this.shoppingListService.add(ingredient);
  }

  incrementCount(){
    this.$rootScope.$broadcast('INCREMENT_COUNTER');
  }

}
