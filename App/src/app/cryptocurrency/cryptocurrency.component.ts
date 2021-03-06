import { Component, OnInit } from '@angular/core';
import { Currency } from '../Currency';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as CryptocurrencyActions from '../store/cryptocurrency/cryptocurrency.actions'
import { AppState } from '../store/AppState';


@Component({
  selector: 'app-cryptocurrency',
  templateUrl: './cryptocurrency.component.html',
  styleUrls: ['./cryptocurrency.component.sass']
})
export class CryptocurrencyComponent implements OnInit {

  private currency$: Observable<Currency>
  private currency: Currency
  private loading$: Observable<boolean>

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private store: Store<AppState>) { }

  ngOnInit() {
    this.getCurrencyDetails();
    this.loading$ = this.store.pipe(select(state => state.cryptocurrencyReducer.loading))
    this.currency$ = this.store.pipe(select(state => state.cryptocurrencyReducer.cryptocurrency))
    this.currency$.subscribe(data => this.currency = data)
  }

  getCurrencyDetails() {
    const symbol = this.route.snapshot.paramMap.get('symbol')
    this.store.dispatch(new CryptocurrencyActions.CurrencyRequest({symbol: symbol}))
  }

  goBack() {
    this.location.back()
  }

}
