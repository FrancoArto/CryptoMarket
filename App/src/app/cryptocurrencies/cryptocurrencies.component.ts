import { Component, OnInit, Input } from '@angular/core';
import { CryptocurrenciesService } from '../cryptocurrencies.service';
import { Currency } from '../Currency';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-cryptocurrencies',
  templateUrl: './cryptocurrencies.component.html',
  styleUrls: ['./cryptocurrencies.component.sass']
})
export class CryptocurrenciesComponent implements OnInit {

  currencies: Currency[];
  currenciesBackup: Currency[];
  private loading: boolean

  constructor(private cryptoCurrenciesService: CryptocurrenciesService) { }

  getTop100(): void {
    this.cryptoCurrenciesService.getTop100()
      .subscribe(currencies => {
        this.currencies = currencies
        this.loading = false
        this.currenciesBackup = this.currencies;
      })
  }

  searchCurrencies(terms: string):void {
    let resultArray: Currency[] = this.currenciesBackup.filter((element) => {
      return element.getName().includes(terms)
    })
    
    this.currencies = resultArray

    if (!terms) {
      this.currencies = this.currenciesBackup
    }
  }

  


  ngOnInit() {
    this.loading = true
    this.getTop100();
    this.cryptoCurrenciesService.eventSearch.subscribe(
      value => {
        this.searchCurrencies(value.searchInput);
      }
    )
    
  }

  

}
