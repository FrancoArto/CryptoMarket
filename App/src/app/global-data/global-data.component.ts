import { Component, OnInit } from '@angular/core';
import { GlobalData } from '../GlobalData';
import { GlobalDataService } from '../global-data.service';
import { Store, select } from '@ngrx/store';
import * as GlobalDataActions from '../store/global-data/global-data.actions'
import { Observable } from 'rxjs';
import { AppState } from '../store/AppState';

@Component({
  selector: 'app-global-data',
  templateUrl: './global-data.component.html',
  styleUrls: ['./global-data.component.sass']
})
export class GlobalDataComponent implements OnInit {

  private globalData$: Observable<GlobalData>;
  private globalData: GlobalData;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.getGlobalData();
    this.globalData$ = this.store.pipe(select(state => state.globalDataReducer.globalData))
    this.globalData$.subscribe(data =>
      this.globalData = data)
  }

  getGlobalData() {
    this.store.dispatch(new GlobalDataActions.GlobalDataRequest())
  }

}
