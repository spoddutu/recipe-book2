import {Action} from '@ngrx/store';
import {Ingredient} from "../shared/model/ingredient.model";

export enum ActionTypes {
    AddIngredient = '[Shopping List] Add Ingredient',
    AddIngredients = '[Shopping List] Add Ingredients',
}

export class AddIngredient implements Action {

    readonly type = ActionTypes.AddIngredient;

    constructor(public payload: Ingredient) {}

}

export class AddIngredients implements Action {

    readonly type = ActionTypes.AddIngredients;

    constructor(public payload: Ingredient[]) {}

}

export type Actions
    = AddIngredient
    | AddIngredients;
