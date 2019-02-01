import * as fromCryptocurrencies from './cryptocurrency/cryptocurrency.reducer'
import * as fromGlobalData from './global-data/global-data.reducer'

export interface AppState {
  cryptocurrencyReducer: fromCryptocurrencies.CryptocurrencyState,
  globalDataReducer: fromGlobalData.GlobalDataState
}


export const rootReducer = {
  cryptocurrencyReducer: fromCryptocurrencies.cryptocurrencyReducer,
  globalDataReducer: fromGlobalData.globalDataReducer
}