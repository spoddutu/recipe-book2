import {Ingredient} from "../shared/model/ingredient.model";
import {EventEmitter, Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    ingredientAdded = new EventEmitter<void>();

    getIngredients(){
        return this.ingredients.slice();
    }

    add(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientAdded.emit();
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientAdded.emit();
    }
}