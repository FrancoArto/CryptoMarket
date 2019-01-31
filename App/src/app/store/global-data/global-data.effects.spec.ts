import { TestBed } from "@angular/core/testing";
import { GlobalDataEffects } from './global-data.effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import * as GlobalDataActions from './global-data.actions'
import { globalDataMock } from './global-data.mock';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { hot, cold } from 'jasmine-marbles';
import { GlobalDataService } from 'src/app/global-data.service';


describe('Global Data effects', () => {
  let effects: GlobalDataEffects;
  let actions: Observable<any>;
  let globalDataService: GlobalDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        GlobalDataEffects,
        provideMockActions(() => actions),
        {provide: globalDataService, useClass: GlobalDataService}
      ]
    })    

    effects = TestBed.get(GlobalDataEffects)
    globalDataService = TestBed.get(GlobalDataService)
  })

  it('should get global data', () => {
    const action = new GlobalDataActions.GlobalDataRequest();
    const completion = new GlobalDataActions.GlobalDataSuccess({globalData: globalDataMock});
 
    actions = hot('--a-', { a: action });
    spyOn(globalDataService, "getGlobalData").and.returnValue(of(globalDataMock))
    const expected = cold('--b', { b: completion });
 
    expect(effects.requestGlobalData$).toBeObservable(expected);
  });

 
})