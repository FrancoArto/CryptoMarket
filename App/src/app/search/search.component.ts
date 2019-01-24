import { Component } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CryptocurrenciesService } from '../cryptocurrencies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent {


  constructor(
    private cryptocurrenciesService: CryptocurrenciesService,
    private router: Router) { }

  pushSearchTerms(terms: string) {
    this.cryptocurrenciesService.setTerms(terms);
  }

  search = new FormGroup({
    searchInput: new FormControl('', [Validators.required, Validators.maxLength(20)])
  })
  
  searchCurrency(): void {
    this.cryptocurrenciesService.setSearchKeyword(this.search.value)
    this.router.navigate(['/currencies'])

  }

  reset(): void {
    this.cryptocurrenciesService.setSearchKeyword(new Event(''))
  }
}
