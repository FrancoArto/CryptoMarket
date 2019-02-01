import { CryptocurrencyEffects } from "./cryptocurrency.effects";
import { Observable, of } from 'rxjs';
import { CryptocurrenciesService } from 'src/app/cryptocurrencies.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import * as CryptocurrencyActions from './cryptocurrency.actions'
import { currenciesArray, currencyMock } from './cryptocurrency.mock';
import { hot, cold } from 'jasmine-marbles';
import { Store, StoreModule } from '@ngrx/store';
import { rootReducer } from '../AppState';

const errorMock = new Error()


describe('Cryptocurrency effects', () => {
  let effects: CryptocurrencyEffects;
  let actions: Observable<any>;
  let cryptocurrenciesService: CryptocurrenciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        StoreModule.forRoot(rootReducer)],
      providers: [
        CryptocurrencyEffects,
        provideMockActions(() => actions),
        { provide: cryptocurrenciesService, useClass: CryptocurrenciesService },
      ]
    })

    effects = TestBed.get(CryptocurrencyEffects)
    cryptocurrenciesService = TestBed.get(CryptocurrenciesService)
  })

  describe('Currencies effect', () => {
    it('should get currencies list', () => {
      const action = new CryptocurrencyActions.CurrenciesRequest();
      const completion = new CryptocurrencyActions.CurrenciesSuccess({ currencies: currenciesArray });

      actions = hot('--a-', { a: action });
      spyOn(cryptocurrenciesService, "getTop100").and.returnValue(of(currenciesArray))
      const expected = cold('--b', { b: completion });

      expect(effects.requestCurrencies$).toBeObservable(expected);
    });

    it('should catch error', () => {
      const action = new CryptocurrencyActions.CurrenciesRequest();
      const completion = new CryptocurrencyActions.CurrenciesFailure({ error: errorMock });

      actions = hot('--a-', { a: action });
      const response = cold('-#|', {}, { error: errorMock });
      spyOn(cryptocurrenciesService, "getTop100").and.returnValue(response)
      const expected = cold('---b', { b: completion });

      expect(effects.requestCurrencies$).toBeObservable(expected);
    })
  })

  describe('Single currency effect', () => {
    it('should get single currency', () => {
      const action = new CryptocurrencyActions.CurrencyRequest({ symbol: 'OMG' });
      const completion = new CryptocurrencyActions.CurrencySuccess({ currency: currencyMock });

      actions = hot('--a-', { a: action });
      spyOn(cryptocurrenciesService, "getCurrencyDetails").and.returnValue(of(currencyMock))
      const expected = cold('--b', { b: completion });

      expect(effects.requestCurrency$).toBeObservable(expected);
    });

    it('should catch error', () => {
      const action = new CryptocurrencyActions.CurrencyRequest({ symbol: 'OMG' });
      const completion = new CryptocurrencyActions.CurrencyFailure({ error: errorMock });

      actions = hot('--a-', { a: action });
      const response = cold('-#|', {}, { error: errorMock });
      spyOn(cryptocurrenciesService, "getCurrencyDetails").and.returnValue(response)
      const expected = cold('---b', { b: completion });

      expect(effects.requestCurrency$).toBeObservable(expected);
    })
  })


})