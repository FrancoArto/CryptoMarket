import * as CryptocurrencyActions from './cryptocurrency.actions'
import { currencyMock, currenciesArray } from './cryptocurrency.mock';


const errorMock = new Error('Error')

describe('Cryptocurrencies actions', () => {
  it('Should create action for currencies request', () => {
    const currenciesRequest = new CryptocurrencyActions.CurrenciesRequest()

    expect({...currenciesRequest}).toEqual({type: CryptocurrencyActions.ActionTypes.CurrenciesRequest})
  })

  it('Should create action for currencies success', () => {
    const currenciesSuccess = new CryptocurrencyActions.CurrenciesSuccess({currencies: currenciesArray})

    expect({...currenciesSuccess}).toEqual({type: CryptocurrencyActions.ActionTypes.CurrenciesSuccess,
      payload: {currencies: currenciesArray}})
  })

  it('Should create action for currencies failure', () => {
    const currenciesFailure = new CryptocurrencyActions.CurrenciesFailure({error: errorMock})

    expect({...currenciesFailure}).toEqual({type: CryptocurrencyActions.ActionTypes.CurrenciesFailure,
      payload: {error: errorMock}})
  })
})

describe('Cryptocurrency actions', () => {
  it('Should create action for currency request', () => {
    const currencyRequest = new CryptocurrencyActions.CurrencyRequest({symbol: 'BTC'})

    expect({...currencyRequest}).toEqual({type: CryptocurrencyActions.ActionTypes.CurrencyRequest,
      payload: {symbol: 'BTC'}})
  })

  it('Should create action for currency success', () => {
    const currencySuccess = new CryptocurrencyActions.CurrencySuccess({currency: currencyMock})

    expect({...currencySuccess}).toEqual({type: CryptocurrencyActions.ActionTypes.CurrencySuccess,
      payload: {currency: currencyMock}})
  })

  it('Should create action for currency failure', () => {
    const currencyFailure = new CryptocurrencyActions.CurrencyFailure({error: errorMock})

    expect({...currencyFailure}).toEqual({type: CryptocurrencyActions.ActionTypes.CurrencyFailure,
      payload: {error: errorMock}})
  })
})

describe('Search cryptocurrencies actions', () => {
  it('Should create action for currencies search', () => {
    const currenciesSearch = new CryptocurrencyActions.SearchCurrencies({searchText: 'BTC'})

    expect({...currenciesSearch}).toEqual({type: CryptocurrencyActions.ActionTypes.SearchCurrencies,
      payload: {searchText: 'BTC'}})
  })
})