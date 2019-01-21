import { Component, OnInit } from '@angular/core';
import { GlobalData } from '../GlobalData';
import { GlobalDataService } from '../global-data.service';

@Component({
  selector: 'app-global-data',
  templateUrl: './global-data.component.html',
  styleUrls: ['./global-data.component.css']
})
export class GlobalDataComponent implements OnInit {

  private globalData: GlobalData;

  constructor(
    private globalDataService: GlobalDataService
  ) { }

  ngOnInit() {
    this.getGlobalData();
  }

  getGlobalData() {
    return this.globalDataService.getGlobalData()
      .subscribe(globalData => this.globalData = globalData)
  }

}
