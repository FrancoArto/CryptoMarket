import { Component, OnInit, Input } from '@angular/core';
import { CryptocurrenciesService } from '../cryptocurrencies.service';
import { Currency } from '../Currency';
import { Subject, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as CryptocurrencyActions from '../store/cryptocurrency/cryptocurrency.actions'
import { CryptocurrencyState } from '../store/cryptocurrency/cryptocurrency.reducer';
import { getSearchResults } from '../store/cryptocurrency/cryptocurrency.selectors';

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
    private store: Store<CryptocurrencyState>) { }

  getTop100(): void {
    this.store.dispatch(new CryptocurrencyActions.CurrenciesRequest)
  }

  ngOnInit() {
    this.getTop100();
    this.loading$ = this.store.pipe(select(state => state.cryptocurrencyReducer.loading))
    this.currencies$ = this.store.select(getSearchResults)
  }



}
