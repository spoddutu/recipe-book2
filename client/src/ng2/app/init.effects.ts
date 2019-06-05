import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { LoadDataRequested } from './window-data/window-data.actions';

@Injectable()
export class InitEffects {

    constructor(private actions$: Actions) {}

    @Effect()
    init$ = this.actions$.pipe(
        ofType(ROOT_EFFECTS_INIT),
        map(() => new LoadDataRequested())
    );

}
