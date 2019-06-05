import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/model/ingredient.model';

interface Data {
    shoppingList: Ingredient[]
}

interface WindowWithData extends Window {
    customData: Data
}

declare var window: WindowWithData;

@Injectable({ providedIn: 'root' })
export class WindowDataService {

    // noinspection JSMethodCanBeStatic
    getData(): Data {
        return window.customData;
    }

}
