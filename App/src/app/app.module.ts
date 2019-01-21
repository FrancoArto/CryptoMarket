import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CryptocurrenciesComponent } from './cryptocurrencies/cryptocurrencies.component';
import { HttpClientModule } from '@angular/common/http';
import { CryptocurrencyComponent } from './cryptocurrency/cryptocurrency.component';
import { GlobalDataComponent } from './global-data/global-data.component';

@NgModule({
  declarations: [
    AppComponent,
    CryptocurrenciesComponent,
    CryptocurrencyComponent,
    GlobalDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
