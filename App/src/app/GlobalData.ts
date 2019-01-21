import { Injectable } from '@angular/core';
import { Adapter } from './Adapter';

export class GlobalData {
  private cryptocurrencies: number;
  private markets: number;
  private marketCap: number;
  private volume24h: number;
  private BTCDominance: number;

  constructor(
    cryptocurrencies: number,
    markets: number,
    marketCap: number,
    volume24h: number,
    BTCDominance: number
  ) {
    this.cryptocurrencies = cryptocurrencies;
    this.markets = markets;
    this.marketCap = marketCap;
    this.volume24h = volume24h;
    this.BTCDominance = BTCDominance;
  }
}

@Injectable({
  providedIn: 'root'
})

export class GlobalDataAdapter implements Adapter<GlobalData> {
  adapt(item: any): GlobalData {
    return new GlobalData(
      item.active_assets + item.active_currencies,
      item.active_markets,
      item.total_market_cap_usd,
      item.total_24h_volume_usd,
      item.bitcoin_percentage_of_market_cap
    )
  }
}