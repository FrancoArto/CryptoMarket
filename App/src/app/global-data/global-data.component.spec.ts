import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalDataComponent } from './global-data.component';
import { Store } from '@ngrx/store';
import { StoreMock } from '../store/StoreMock';
import { inject } from '@angular/core/testing';
import { GlobalDataState } from '../store/global-data/global-data.reducer';

describe('GlobalDataComponent', () => {
  let component: GlobalDataComponent;
  let fixture: ComponentFixture<GlobalDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalDataComponent ],
      providers: [
        {provide: Store, useClass: StoreMock}
      ]
    })
    .compileComponents();
  }));

  beforeEach(inject([Store], (testStore: StoreMock<GlobalDataState>) => {
    fixture = TestBed.createComponent(GlobalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
