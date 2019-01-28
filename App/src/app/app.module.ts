import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CryptocurrenciesComponent } from './cryptocurrencies/cryptocurrencies.component';
import { HttpClientModule } from '@angular/common/http';
import { CryptocurrencyComponent } from './cryptocurrency/cryptocurrency.component';
import { GlobalDataComponent } from './global-data/global-data.component';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { cryptocurrencyReducer } from './store/cryptocurrency/cryptocurrency.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { EffectsModule } from '@ngrx/effects';
import { CryptocurrencyEffects } from './store/cryptocurrency/cryptocurrency.effects';
import { GlobalDataEffects } from './store/global-data/global-data.effects';
import { globalDataReducer } from './store/global-data/global-data.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CryptocurrenciesComponent,
    CryptocurrencyComponent,
    GlobalDataComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    [StoreModule.forRoot({cryptocurrencyReducer: cryptocurrencyReducer,
      globalDataReducer: globalDataReducer})],
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    EffectsModule.forRoot([CryptocurrencyEffects, GlobalDataEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
