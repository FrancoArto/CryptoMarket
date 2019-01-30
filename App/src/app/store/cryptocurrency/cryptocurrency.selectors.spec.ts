import * as CryptocurrencyReducer from './cryptocurrency.reducer'
import * as GlobalDataReducer from '../global-data/global-data.reducer'
import { getCryptocurrencyState, getSymbol, getSearchResults } from './cryptocurrency.selectors';
import { AppState } from '../AppState';
import { currenciesArray, currencyMock } from './cryptocurrency.mock';

describe('Cryptocurrency selectors', () => {
  describe('getCryptocurrencyState', () => {
    it('Should get currency state', () => {
      let state: AppState = {
        cryptocurrencyReducer: CryptocurrencyReducer.cryptocurrencyInitialState,
        globalDataReducer: GlobalDataReducer.globalDataInitialState
      }

      let cryptocurrencyState = CryptocurrencyReducer.cryptocurrencyInitialState

      expect(getCryptocurrencyState(state)).toEqual(cryptocurrencyState)
    })
  })

  describe('getSymbol', () => {
    it('Should get symbol from state', () => {
      
      let cryptocurrencyState = CryptocurrencyReducer.cryptocurrencyInitialState
      cryptocurrencyState.symbol = 'BTC'

      expect(getSymbol(cryptocurrencyState)).toEqual('BTC')
    })
  })

  describe('getSearchResults', () => {
    it('Should get search results from state', () => {
      
      let state: AppState = {
        cryptocurrencyReducer: CryptocurrencyReducer.cryptocurrencyInitialState,
        globalDataReducer: GlobalDataReducer.globalDataInitialState
      }

      state.cryptocurrencyReducer = CryptocurrencyReducer.cryptocurrencyInitialState
      state.cryptocurrencyReducer.cryptocurrencies = currenciesArray
      state.cryptocurrencyReducer.searchText = 'Omi'

      expect(getSearchResults(state)).toEqual([currencyMock])
    })
  })
})