import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, withLatestFrom } from 'rxjs/operators';
import { CryptocurrenciesService } from 'src/app/cryptocurrencies.service';
import * as CurrencyActions from './cryptocurrency.actions'
import { Store } from '@ngrx/store';
import { getSymbol } from './cryptocurrency.selectors';
import { Currency } from 'src/app/Currency';
import { AppState } from '../AppState';

@Injectable()
export class CryptocurrencyEffects {

  @Effect()
  requestCurrencies$ = this.actions$
    .pipe(
      ofType(CurrencyActions.ActionTypes.CurrenciesRequest),
      mergeMap(() => this.cryptocurrenciesService.getTop100()
        .pipe(
          map((data: Currency[]) => (new CurrencyActions.CurrenciesSuccess({ currencies: data }))),
          catchError((error) => of(new CurrencyActions.CurrenciesFailure(error)))
        )
      )
    );


  @Effect()
  requestCurrency$ = this.actions$
    .pipe(
      ofType(CurrencyActions.ActionTypes.CurrencyRequest),
      withLatestFrom(this.store),
      mergeMap(([action, state]) => this.cryptocurrenciesService.getCurrencyDetails(getSymbol(state.cryptocurrencyReducer))
        .pipe(
          map((data: Currency) => (new CurrencyActions.CurrencySuccess({ currency: data }))),
          catchError((error) => of(new CurrencyActions.CurrencyFailure(error)))

        )
      )
    );

  constructor(
    private actions$: Actions,
    private cryptocurrenciesService: CryptocurrenciesService,
    private store: Store<AppState>
  ) { }
}