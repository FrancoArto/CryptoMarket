import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { CryptocurrencyComponent } from './cryptocurrency.component';
import { Store } from '@ngrx/store';
import { StoreMock } from '../store/StoreMock';
import { CryptocurrencyState } from '../store/cryptocurrency/cryptocurrency.reducer';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, Data, Params } from '@angular/router';
import { Observable, from, of } from 'rxjs';
import { Location } from '@angular/common';

describe('CryptocurrencyComponent', () => {
  let component: CryptocurrencyComponent;
  let fixture: ComponentFixture<CryptocurrencyComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CryptocurrencyComponent],
      providers: [
        { provide: Store, useClass: StoreMock },
        {
          provide: ActivatedRoute, useValue: routeMock
        },
        { provide: Location, useValue: jasmine.createSpyObj('Location', ['back']) },
      ],
      imports: [
        MatProgressSpinnerModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(inject([Store], (testStore: StoreMock<CryptocurrencyState>) => {
    fixture = TestBed.createComponent(CryptocurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


const routeMock = {
  data: {
    subscribe: (fn: (value: Data) => void) => fn({
      symbol: 'ABC',
    }),
  },
  params: {
    subscribe: (fn: (value: Params) => void) => fn({
      tab: 0,
    }),
  },
  snapshot: {
    paramMap:{
      get: (symbol: string) => {
        return symbol;
      }
    }
  },
}