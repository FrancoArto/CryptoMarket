import { Component, OnInit, Input } from '@angular/core';
import { CryptocurrenciesService } from '../cryptocurrencies.service';
import { Currency } from '../Currency';
import { Subject, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as CryptocurrencyActions from '../store/cryptocurrency/cryptocurrency.actions'
import { CryptocurrencyState } from '../store/cryptocurrency/cryptocurrency.reducer';

@Component({
  selector: 'app-cryptocurrencies',
  templateUrl: './cryptocurrencies.component.html',
  styleUrls: ['./cryptocurrencies.component.sass']
})
export class CryptocurrenciesComponent implements OnInit {

  currencies$: Observable<Currency[]>
  loading$: Observable<boolean>
  currenciesBackup: Currency[];

  constructor(private cryptoCurrenciesService: CryptocurrenciesService,
    private store: Store<CryptocurrencyState>) { }

  getTop100(): void {
      this.store.dispatch(new CryptocurrencyActions.CurrenciesRequest)
  }

  searchCurrencies(terms: string):void {
    let resultArray: Currency[] = this.currenciesBackup.filter((element) => {
      return element.getName().includes(terms)
    })
  }

  


  ngOnInit() {
    this.getTop100();
    this.loading$ = this.store.pipe(select(state => state.cryptocurrencyReducer.loading))
    this.cryptoCurrenciesService.eventSearch.subscribe(
      value => {
        this.searchCurrencies(value.searchInput);
      }
    )  
    this.currencies$ = this.store.pipe(select(state => state.cryptocurrencyReducer.cryptocurrencies))    
  }

  

}
