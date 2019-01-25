import { Action } from '@ngrx/store'
import { GlobalData } from 'src/app/GlobalData';

export enum ActionTypes {
  GlobalDataRequest = '[GlobalData] Request',
  GlobalDataSuccess = '[GlobalData] Success',
  GlobalDataFailure = '[GlobalData] Failure',
}

export class GlobalDataRequest implements Action {
  readonly type = ActionTypes.GlobalDataRequest
}

export class GlobalDataSuccess implements Action {
  readonly type = ActionTypes.GlobalDataSuccess;
  constructor(
    public payload: {
      globalData: GlobalData
    }
  ) { }
}

export class GlobalDataFailure implements Action {
  readonly type = ActionTypes.GlobalDataFailure;
  constructor(
    public payload: {
      error: Error
    }) { }
}


export type ActionsUnion = GlobalDataRequest | GlobalDataSuccess | GlobalDataFailure