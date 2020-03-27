import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-strategy-get-started-component',
  templateUrl: './strategy-get-started-component.component.html',
  styleUrls: ['./strategy-get-started-component.component.css']
})
export class StrategyGetStartedComponentComponent implements OnInit {
  getStockData: any;
  constructor(public service: ApiService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    console.log("get Data call -- > ");
    this.service.getCall('getStock').subscribe((result) => {
      // console.log("result -------- > ", result);
      // for (let i = 0; i < result['data'].length; i++) {
        // console.log("result data " , result['data'][i].stock_data);
         this.getStockData = result['data'];
         console.log('ok -- ' , this.getStockData);
      // }



    });
  }

}
