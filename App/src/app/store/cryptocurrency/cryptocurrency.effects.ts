import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CryptocurrenciesService } from 'src/app/cryptocurrencies.service';
import * as CurrencyActions from './cryptocurrency.actions'

@Injectable()
export class CryptocurrencyEffects {

  @Effect()
  requestCurrencies$ = this.actions$
    .pipe(
      ofType(CurrencyActions.ActionTypes.CurrenciesRequest),
      mergeMap(() => this.cryptocurrenciesService.getTop100()
        .pipe(
          map(data => (new CurrencyActions.CurrenciesSuccess({ currencies: data }))),
          catchError((error) => of(new CurrencyActions.CurrenciesFailure(error)))
        )
      )
    );


  @Effect()
  requestCurrency$ = this.actions$
    .pipe(
      ofType(CurrencyActions.ActionTypes.CurrencyRequest),
      mergeMap((action) => this.cryptocurrenciesService.getCurrencyDetails(action.payload.symbol)
        .pipe(
          map(data => (new CurrencyActions.CurrencySuccess({ currency: data }))),
          catchError((error) => of(new CurrencyActions.CurrencyFailure(error)))

        )
      )
    );
 
  constructor(
        private actions$: Actions,
        private cryptocurrenciesService: CryptocurrenciesService
      ) {}
}