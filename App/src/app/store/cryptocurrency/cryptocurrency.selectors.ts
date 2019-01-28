import { createSelector, ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { Currency } from 'src/app/Currency';

import * as fromCryptocurrencies from './cryptocurrency.reducer'

export interface AppState {
  cryptocurrencyReducer: fromCryptocurrencies.CryptocurrencyState
}


export const getCryptocurrencyState = (state: AppState) => state.cryptocurrencyReducer



export const getSearchResults = createSelector(getCryptocurrencyState,
  (state: fromCryptocurrencies.CryptocurrencyState) => {
    console.log(state)
    let resultArray: Currency[] = state.cryptocurrencies.filter((element) => {
      return element.getName().includes(state.searchText)
    })
    return resultArray;
  })

