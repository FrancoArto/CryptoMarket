import { Component, OnInit } from '@angular/core';
import { CryptocurrenciesService } from '../cryptocurrencies.service';
import { Currency } from '../Currency';

@Component({
  selector: 'app-cryptocurrencies',
  templateUrl: './cryptocurrencies.component.html',
  styleUrls: ['./cryptocurrencies.component.sass']
})
export class CryptocurrenciesComponent implements OnInit {

  currencies: Currency[];
  private loading: boolean

  constructor(private cryptoCurrenciesService: CryptocurrenciesService) { }

  getTop100(): void {
    this.cryptoCurrenciesService.getTop100()
      .subscribe(currencies => {
        this.currencies = currencies
        this.loading = false
      })
  }

  ngOnInit() {
    this.loading = true
    this.getTop100();
  }

  

}
