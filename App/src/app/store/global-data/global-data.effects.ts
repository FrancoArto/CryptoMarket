import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as GlobalDataActions from './global-data.actions'
import { GlobalDataService } from 'src/app/global-data.service';

@Injectable()
export class GlobalDataEffects {

  @Effect()
  requestGlobalData$ = this.actions$
    .pipe(
      ofType(GlobalDataActions.ActionTypes.GlobalDataRequest),
      mergeMap(() => this.globalDataService.getGlobalData()
        .pipe(
          map(data => (new GlobalDataActions.GlobalDataSuccess({ globalData: data }))),
          catchError((error) => of(new GlobalDataActions.GlobalDataFailure(error)))
        )
      )
    );

 
  constructor(
        private actions$: Actions,
        private globalDataService: GlobalDataService
      ) {}
}