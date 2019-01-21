import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CryptocurrenciesComponent } from './cryptocurrencies/cryptocurrencies.component';
import { CryptocurrencyComponent } from './cryptocurrency/cryptocurrency.component';

const routes: Routes = [
  {path: '', redirectTo: '/currencies', pathMatch: 'full'},
  {path: 'currencies', component: CryptocurrenciesComponent},
  {path: 'currency/:symbol', component: CryptocurrencyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
