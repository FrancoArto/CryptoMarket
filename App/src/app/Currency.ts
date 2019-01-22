import { Injectable } from '@angular/core';
import { Adapter } from './Adapter';

export class Currency {

  private id: string;
  private rank: number;
  private name: string;
  private symbol: string;
  private circulatingSupply: number;
  private totalSupply: number;
  private maxSupply: number;
  private price: number;
  private volume24h: number;
  private change1h: number;
  private change7h: number;
  private change24h: number;
  private marketCap: number;

  constructor(id: string,
    rank: number,
    name: string,
    symbol: string,
    circulatingSupply: number,
    totalSupply: number,
    maxSupply: number,
    price: number,
    volume24h: number,
    change1h: number,
    change7h: number,
    change24h: number,
    marketCap: number) {
    this.id = id;
    this.rank = rank;
    this.name = name;
    this.symbol = symbol;
    this.circulatingSupply = circulatingSupply;
    this.totalSupply = totalSupply;
    this.maxSupply = maxSupply;
    this.price = price;
    this.volume24h = volume24h;
    this.change1h = change1h;
    this.change7h = change7h;
    this.change24h = change24h;
    this.marketCap = marketCap;
  }


  public getChange24h() {
    return this.change24h;
  }

}

@Injectable({
  providedIn: 'root'
})

export class CurrencyAdapter implements Adapter<Currency> {
  adapt(item: any): Currency {
    return new Currency(
      item.id,
      item.rank,
      item.name,
      item.symbol,
      item.available_supply,
      item.total_supply,
      item.max_supply,
      item.price_usd,
      item['24h_volume_usd'],
      item.percent_change_1h,
      item.percent_change_7h,
      item.percent_change_24h,
      item.market_cap_usd
    )
  }
}