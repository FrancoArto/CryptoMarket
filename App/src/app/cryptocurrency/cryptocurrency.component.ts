import { Component, OnInit } from '@angular/core';
import { Currency } from '../Currency';
import { CryptocurrenciesService } from '../cryptocurrencies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cryptocurrency',
  templateUrl: './cryptocurrency.component.html',
  styleUrls: ['./cryptocurrency.component.css']
})
export class CryptocurrencyComponent implements OnInit {

  currency: Currency

  constructor(
    private route: ActivatedRoute,
    private cryptocurrenciesService: CryptocurrenciesService) { }

  ngOnInit() {
    this.getCurrencyDetails();
  }

  getCurrencyDetails() {
    const symbol = this.route.snapshot.paramMap.get('symbol')
    return this.cryptocurrenciesService.getCurrencyDetails(symbol)
      .subscribe(currency => this.currency = currency)
  }

}
