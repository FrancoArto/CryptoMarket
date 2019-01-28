import { Component } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CryptocurrenciesService } from '../cryptocurrencies.service';
import { Router } from '@angular/router';
import { CryptocurrencyState } from '../store/cryptocurrency/cryptocurrency.reducer';
import * as CryptocurrencyActions from '../store/cryptocurrency/cryptocurrency.actions'
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent {


  constructor(
    private cryptocurrenciesService: CryptocurrenciesService,
    private router: Router,
    private store: Store<CryptocurrencyState>) { }

  

  search = new FormGroup({
    searchInput: new FormControl('', [Validators.required, Validators.maxLength(20)])
  })
  
  searchCurrency(): void {
    this.store.dispatch(new CryptocurrencyActions.SearchCurrencies({searchText: this.search.value.searchInput}))
  }

  reset(): void {
    this.store.dispatch(new CryptocurrencyActions.SearchCurrencies({searchText: ''}))
  }
}
