import { createSelector } from '@ngrx/store';
import { CryptocurrencyState } from './cryptocurrency.reducer';

export interface AppState {
  cryptocurrency: CryptocurrencyState
}

export const selectCryptocurrency = (state: AppState) => state.cryptocurrency

