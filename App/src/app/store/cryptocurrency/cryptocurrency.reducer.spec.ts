import * as CryptocurrencyReducer from './cryptocurrency.reducer'
import * as CryptocurrencyActions from './cryptocurrency.actions'
import { currencyMock, currenciesArray } from './cryptocurrency.mock';

const errorMock = new Error('Error')

describe('Cryptocurrency reducer', () => {
  describe('Undefined action', () => {
    it('Should return initialState', () => {
      const { cryptocurrencyInitialState } = CryptocurrencyReducer
      const action = {}
      const state = CryptocurrencyReducer.cryptocurrencyReducer(undefined, action)

      expect(state).toEqual(cryptocurrencyInitialState)
    })
  })

  describe('Currency request action', () => {
    const { cryptocurrencyInitialState } = CryptocurrencyReducer
    const action = {}
    const state = CryptocurrencyReducer.cryptocurrencyReducer(cryptocurrencyInitialState,
      new CryptocurrencyActions.CurrencyRequest({ symbol: 'BTC' }))

    it('Should set loading to true', () => {
      expect(state.loading).toBeTruthy()
    })

    it('Should set symbol with action payload', () => {
      expect(state.symbol).toEqual('BTC')
    })

  })

  describe('Currency success action', () => {

    const { cryptocurrencyInitialState } = CryptocurrencyReducer
    const action = {}
    const state = CryptocurrencyReducer.cryptocurrencyReducer(cryptocurrencyInitialState,
      new CryptocurrencyActions.CurrencySuccess({ currency: currencyMock }))

    it('Should set cryptocurrency with action payload', () => {
      expect(state.cryptocurrency).toEqual(currencyMock)
    })

    it('Should set loading to false', () => {
      expect(state.loading).toBeFalsy()
    })
  })

  describe('Currency failure action', () => {

    const { cryptocurrencyInitialState } = CryptocurrencyReducer
    const action = {}
    const state = CryptocurrencyReducer.cryptocurrencyReducer(cryptocurrencyInitialState,
      new CryptocurrencyActions.CurrencyFailure({ error: errorMock }))

    it('Should set cryptocurrency to null', () => {
      expect(state.cryptocurrency).toBeNull()
    })

    it('Should set loading to false', () => {
      expect(state.loading).toBeFalsy()
    })

    it('Should set error with action payload', () => {
      expect(state.error).toEqual(errorMock)
    })

    it('Should set cryptocurrencies to empty', () => {
      expect(state.cryptocurrencies).toEqual([])
    })
  })

  describe('Currencies request action', () => {
    const { cryptocurrencyInitialState } = CryptocurrencyReducer
    const action = {}
    const state = CryptocurrencyReducer.cryptocurrencyReducer(cryptocurrencyInitialState,
      new CryptocurrencyActions.CurrenciesRequest())

    it('Should set loading to true', () => {
      expect(state.loading).toBeTruthy()
    })
  })

  describe('Currencies success action', () => {
    const { cryptocurrencyInitialState } = CryptocurrencyReducer
    const action = {}
    const state = CryptocurrencyReducer.cryptocurrencyReducer(cryptocurrencyInitialState,
      new CryptocurrencyActions.CurrenciesSuccess({ currencies: currenciesArray }))

    it('Should set cryptocurrencies with action payload', () => {
      expect(state.cryptocurrencies).toEqual(currenciesArray)
    })

    it('Should set loading to false', () => {
      expect(state.loading).toBeFalsy()
    })
  })

  describe('Currencies failure action', () => {

    const { cryptocurrencyInitialState } = CryptocurrencyReducer
    const action = {}
    const state = CryptocurrencyReducer.cryptocurrencyReducer(cryptocurrencyInitialState,
      new CryptocurrencyActions.CurrenciesFailure({ error: errorMock }))

    it('Should set cryptocurrencies to empty', () => {
      expect(state.cryptocurrencies).toEqual([])
    })

    it('Should set loading to false', () => {
      expect(state.loading).toBeFalsy()
    })

    it('Should set error with action payload', () => {
      expect(state.error).toEqual(errorMock)
    })

    it('Should set cryptocurrency to null', () => {
      expect(state.cryptocurrency).toBeNull()
    })
  })
})