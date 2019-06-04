import {
  State as ShoppingListState,
  AppState as ShoppingListAppState
} from './shopping-list/shopping-list.reducer';
import {createFeatureSelector} from "@ngrx/store";

// would be intersection type, e.g. `FeatureState1 & FeatureState2`
export type State = ShoppingListAppState;

export const getShoppingList = createFeatureSelector<State, ShoppingListState>('shoppingList');
