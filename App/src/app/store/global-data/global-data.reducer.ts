import * as GlobalDataActions from './global-data.actions'
import { GlobalData } from 'src/app/GlobalData';

export interface GlobalDataState {
  error: Error,
  loading: boolean,
  globalData: GlobalData
}

export const globalDataInitialState:GlobalDataState = {
  error: null,
  loading: false,
  globalData: null
}

export function globalDataReducer(
  state = globalDataInitialState,
  action: GlobalDataActions.ActionsUnion
): GlobalDataState {
  switch (action.type) {
    case GlobalDataActions.ActionTypes.GlobalDataRequest: {
      return {
        ...state,
        loading: true,
      };
    }
 
    case GlobalDataActions.ActionTypes.GlobalDataSuccess: {
      return {
        ...state,
        loading: false,
        globalData: action.payload.globalData
      };
    }
 
    case GlobalDataActions.ActionTypes.GlobalDataFailure: {
      return  {
        ...state,
        error: action.payload.error,
        loading: false,
        globalData: null
      }
    }
 
    default: {
      return state;
    }
  }
}