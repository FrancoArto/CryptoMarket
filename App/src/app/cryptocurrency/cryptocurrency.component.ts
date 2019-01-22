import { Component, OnInit } from '@angular/core';
import { Currency } from '../Currency';
import { CryptocurrenciesService } from '../cryptocurrencies.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cryptocurrency',
  templateUrl: './cryptocurrency.component.html',
  styleUrls: ['./cryptocurrency.component.sass']
})
export class CryptocurrencyComponent implements OnInit {

  private currency: Currency
  private loading: boolean

  constructor(
    private route: ActivatedRoute,
    private cryptocurrenciesService: CryptocurrenciesService,
    private location: Location) { }

  ngOnInit() {
    this.loading = true
    this.getCurrencyDetails();
  }

  getCurrencyDetails() {
    const symbol = this.route.snapshot.paramMap.get('symbol')
    return this.cryptocurrenciesService.getCurrencyDetails(symbol)
      .subscribe(currency => {
        this.currency = currency
        this.loading = false
      })
  }

  goBack() {
    this.location.back()
  }

}
