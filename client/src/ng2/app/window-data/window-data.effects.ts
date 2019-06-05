import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, flatMap } from 'rxjs/operators';
import { ActionTypes } from './window-data.actions';
import { WindowDataService } from './window-data.service';
import { AddIngredients } from "../shopping-list/shopping-list.actions";

@Injectable()
export class WindowDataEffects {

    constructor(
        private actions$: Actions,
        private service: WindowDataService
    ) { }

    @Effect()
    loadData$ = this.actions$.pipe(
        ofType(ActionTypes.LoadDataRequested),
        map(() => this.service.getData()),
        flatMap(data => [
            new AddIngredients(data.shoppingList)
        ])
    );

}
