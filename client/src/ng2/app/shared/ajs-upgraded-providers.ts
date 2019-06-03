import {InjectionToken} from "@angular/core";

export function recipeServiceFactory(i: any) {
    return i.get('RecipeService');
}

export const RECIPE_SERVICE = new InjectionToken<any>('RECIPE_SERVICE');

export const recipeServiceProvider = {
    provide: RECIPE_SERVICE,
    useFactory: recipeServiceFactory,
    deps: ['$injector']
}