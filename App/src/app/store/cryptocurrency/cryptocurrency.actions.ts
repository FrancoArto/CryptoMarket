import { Action } from '@ngrx/store'
import { Currency } from 'src/app/Currency';

export enum ActionTypes {
  CurrencyRequest = '[Cryptocurrency] Request',
  CurrencySuccess = '[Cryptocurrency] Success',
  CurrencyFailure = '[Cryptocurrency] Failure',
  CurrenciesRequest = '[Cryptocurrency] Top100 Request',
  CurrenciesSuccess = '[Cryptocurrency] Top100 Success',
  CurrenciesFailure = '[Cryptocurrency] Top100 Failure'
}

export class CurrencyRequest implements Action {
  readonly type = ActionTypes.CurrencyRequest
  constructor(
    public payload: {
      symbol: string
    }
  ) { }
}

export class CurrencySuccess implements Action {
  readonly type = ActionTypes.CurrencySuccess;
  constructor(
    public payload: {
      currency: Currency
    }
  ) { }
}

export class CurrencyFailure implements Action {
  readonly type = ActionTypes.CurrencyFailure;
  constructor(
    public payload: {
      error: Error
    }) { }
}

export class CurrenciesRequest implements Action {
  readonly type = ActionTypes.CurrenciesRequest;
}

export class CurrenciesSuccess implements Action {
  readonly type = ActionTypes.CurrenciesSuccess;
  constructor(
    public payload: {
      currencies: Currency[]
    }) { }
}

export class CurrenciesFailure implements Action {
  readonly type = ActionTypes.CurrenciesFailure;
  constructor(
    public payload: {
      error: Error
    }) { }
}

export type ActionsUnion = CurrencyRequest | CurrencySuccess | CurrencyFailure | CurrenciesRequest | CurrenciesSuccess | CurrenciesFailure