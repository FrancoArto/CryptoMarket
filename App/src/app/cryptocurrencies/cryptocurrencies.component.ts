import { Component, OnInit } from '@angular/core';
import { CryptocurrenciesService } from '../cryptocurrencies.service';
import { Currency } from '../Currency';

@Component({
  selector: 'app-cryptocurrencies',
  templateUrl: './cryptocurrencies.component.html',
  styleUrls: ['./cryptocurrencies.component.css']
})
export class CryptocurrenciesComponent implements OnInit {

  currencies: Currency[];

  constructor(private cryptoCurrenciesService: CryptocurrenciesService) { }

  getTop100(): void {
    this.cryptoCurrenciesService.getTop100()
      .subscribe(currencies => this.currencies = currencies)
  }

  ngOnInit() {
    this.getTop100();
  }

}
