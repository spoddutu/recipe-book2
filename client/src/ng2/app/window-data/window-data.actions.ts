import {Action} from '@ngrx/store';

export enum ActionTypes {
    LoadDataRequested = '[Window Data] Load Data Requested',
}

export class LoadDataRequested implements Action {
    readonly type = ActionTypes.LoadDataRequested;
}
