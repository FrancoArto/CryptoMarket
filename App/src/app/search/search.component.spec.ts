import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { StoreModule, Store, combineReducers } from '@ngrx/store';

import { SearchComponent } from './search.component';
import * as StoreMock from '../store/StoreMock';
import { CryptocurrencyState } from '../store/cryptocurrency/cryptocurrency.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      providers: [
        {provide: Store, useClass: StoreMock.StoreMock}
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(inject([Store], (testStore: StoreMock.StoreMock<CryptocurrencyState>) => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
