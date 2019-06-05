import {Ingredient} from "../shared/model/ingredient.model";
import {Actions, ActionTypes} from "./shopping-list.actions";
import * as R from "ramda";

export type State = Ingredient[];

export interface AppState {
    shoppingList: State
}

export const initialState: State = [];

export default function reducer(
    state = initialState,
    action: Actions
): State {

    switch (action.type) {

        case ActionTypes.AddIngredient: {
            return R.append(action.payload, state);
        }

        case ActionTypes.AddIngredients: {
            return R.concat(state, action.payload);
        }

        default: {
            return state;
        }

    }

}
