import { createSelector, ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { Currency } from 'src/app/Currency';

import * as fromCryptocurrencies from './cryptocurrency.reducer'
import { AppState } from '../AppState';




export const getCryptocurrencyState = (state: AppState) => state.cryptocurrencyReducer



export const getSearchResults = createSelector(getCryptocurrencyState,
  (state: fromCryptocurrencies.CryptocurrencyState) => {
    let resultArray: Currency[] = state.cryptocurrencies.filter((element) => {
      return element.getName().includes(state.searchText)
    })
    return resultArray;
  })

 
  export const getSymbol = (state: fromCryptocurrencies.CryptocurrencyState) => state.symbol
