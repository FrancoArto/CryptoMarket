import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Currency, CurrencyAdapter } from './Currency';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class CryptocurrenciesService {

  private currenciesUrl = 'http://localhost:8080/cryptocurrencies'

  constructor(
    private http: HttpClient,
    private currencyAdapter: CurrencyAdapter
  ) { }

  getTop100(): Observable<Currency[]> {
    return this.http.get<Currency[]>(`${this.currenciesUrl}/latest`)
      .pipe(
        map((data: any[]) => data.map((item: any) => this.currencyAdapter.adapt(item))),
        catchError(this.handleError<Currency[]>('getTop100', []))
      )
  }


  getCurrencyDetails(symbol: string): Observable<Currency> {
    return this.http.get<Currency>(`${this.currenciesUrl}/${symbol}`)
      .pipe(
        map(item => this.currencyAdapter.adapt(item)),
        catchError(this.handleError<Currency>('getCurrencyDetails'))
      )
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
