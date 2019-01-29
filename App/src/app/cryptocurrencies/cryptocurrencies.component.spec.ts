import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { CryptocurrenciesComponent } from './cryptocurrencies.component';
import { StoreMock } from '../store/StoreMock';
import { Store } from '@ngrx/store';
import { CryptocurrencyState } from '../store/cryptocurrency/cryptocurrency.reducer';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';

describe('CryptocurrenciesComponent', () => {
  let component: CryptocurrenciesComponent;
  let fixture: ComponentFixture<CryptocurrenciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptocurrenciesComponent ],
      providers: [
        { provide: Store, useClass: StoreMock },
      ],
      imports: [
        MatProgressSpinnerModule,
        RouterModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(inject([Store], (testStore: StoreMock<CryptocurrencyState>) => {
    fixture = TestBed.createComponent(CryptocurrenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
