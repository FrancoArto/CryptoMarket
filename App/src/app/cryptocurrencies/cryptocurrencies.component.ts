import { Component, OnInit } from '@angular/core';
import { Currency } from '../Currency';
import {  Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as CryptocurrencyActions from '../store/cryptocurrency/cryptocurrency.actions'
import { getSearchResults } from '../store/cryptocurrency/cryptocurrency.selectors';
import { AppState } from '../store/AppState';

@Component({
  selector: 'app-cryptocurrencies',
  templateUrl: './cryptocurrencies.component.html',
  styleUrls: ['./cryptocurrencies.component.sass']
})
export class CryptocurrenciesComponent implements OnInit {

  currencies$: Observable<Currency[]>
  loading$: Observable<boolean>
  currenciesBackup: Currency[];

  constructor(
    private store: Store<AppState>) { }

  getTop100(): void {
    this.store.dispatch(new CryptocurrencyActions.CurrenciesRequest)
  }

  ngOnInit() {
    this.getTop100();
    this.loading$ = this.store.pipe(select(state => state.cryptocurrencyReducer.loading))
    this.currencies$ = this.store.pipe(select(getSearchResults))
  }



}
