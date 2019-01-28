import * as Cryptocurrency from './cryptocurrency.actions'
import { Currency } from 'src/app/Currency';

export interface CryptocurrencyState {
  cryptocurrency: Currency,
  cryptocurrencies: Currency[],
  error: Error,
  loading: boolean,
  symbol: string,
  searchText: string,
}

export const cryptocurrencyInitialState:CryptocurrencyState = {
  cryptocurrency: null,
  cryptocurrencies: [],
  error: null,
  loading: false,
  symbol: '',
  searchText: '',
}

export function cryptocurrencyReducer(
  state = cryptocurrencyInitialState,
  action: Cryptocurrency.ActionsUnion
): CryptocurrencyState {
  switch (action.type) {
    case Cryptocurrency.ActionTypes.CurrencyRequest: {
      return {
        ...state,
        loading: true,
        symbol: action.payload.symbol
      };
    }
 
    case Cryptocurrency.ActionTypes.CurrencySuccess: {
      return {
        ...state,
        loading: false,
        cryptocurrency: action.payload.currency,
      };
    }
 
    case Cryptocurrency.ActionTypes.CurrencyFailure: {
      return  {
        ...state,
        error: action.payload.error,
        loading: false,
        cryptocurrency: null,
        cryptocurrencies: []
      }
    }

    case Cryptocurrency.ActionTypes.CurrenciesRequest: {
      return {
        ...state,
        loading: true,
      };
    }
 
    case Cryptocurrency.ActionTypes.CurrenciesSuccess: {
      return {
        ...state,
        loading: false,
        cryptocurrencies: action.payload.currencies
      };
    }
 
    case Cryptocurrency.ActionTypes.CurrenciesFailure: {
      return  {
        ...state,
        error: action.payload.error,
        loading: false,
        cryptocurrency: null,
        cryptocurrencies: []
      }
    }

    case Cryptocurrency.ActionTypes.SearchCurrencies: {
      return {
        ...state,
        searchText: action.payload.searchText
      };
    }
 
    default: {
      return state;
    }
  }
}