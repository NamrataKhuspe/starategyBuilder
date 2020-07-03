import { Component, OnInit, ViewChild } from '@angular/core';


import { NgbTypeahead, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';

import { pipe } from 'rxjs';
import { NgZone } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ApiService } from 'src/app/services/api.service';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-strategy-get-started-component',
  templateUrl: './strategy-get-started-component.component.html',
  styleUrls: ['./strategy-get-started-component.component.css']
})
export class StrategyGetStartedComponentComponent implements OnInit {


  datemodel: NgbDateStruct;
  
  lotQty:any=0;
  stockmodel: any;
  stockArray = [];
  segmentsmodel: any;
  segmentsArray = [];
  expirymodel: any;
  expiryArray = [];
  optionStrikemodel: any;
  optionStrikeArray = [];
  optionTypemodel: any;
  optionTypeArray = [];
  loading:boolean

  constructor(private zone: NgZone, private service: ApiService, private AmCharts: AmChartsService) { }

  ngOnInit() {
    this.getChartData()
    this.getSegmentsArray()
    this.getStockArray()
    this.getExpiryArray()
    this.getOptionStrikeArray()
    this.getoptionTypeArray()
  }

  getStockArray() {
    this.stockArray = [
      {
        value: 'NIFTY',
        label: 'NIFTY'
      },
      {
        value: 'BANKNIFTY',
        label: 'BANKNIFTY'
      },
      {
        value: 'ACC',
        label: 'ACC'
      },
      {
        value: 'ADANIPORTS',
        label: 'ADANIPORTS'
      },
      {
        value: 'ADANIPOWERS',
        label: 'ADANIPOWERS'
      },
      {
        value: 'AMBUJACEM',
        label: 'AMBUJACEM'
      },
      {
        value: 'APOLLOHOSP',
        label: 'APOLLOHOSP'
      },
      {
        value: 'APOLLOTYRE',
        label: 'APOLLOTYRE'
      }
    ]
  }

  getSegmentsArray() {
    this.segmentsArray = [
      {
        value: 'Futures',
        label: 'Futures'
      },
      {
        value: 'Options',
        label: 'Options'
      }
    ]
  }

  getExpiryArray() {
    this.expiryArray = [
      {
        value: '21MAY2020',
        label: '21MAY2020'
      },
      {
        value: '21MAY2020',
        label: '21MAY2020'
      },
      {
        value: '4JUN2020',
        label: '4JUN2020'
      },
      {
        value: '25JUN2020',
        label: '25JUN2020'
      },
      {
        value: '30JUL2020',
        label: '30JUL2020'
      }
    ]
  }

  getOptionStrikeArray() {
    this.optionStrikeArray = [
      {
        value: '6100',
        label: '6100'
      },
      {
        value: '6200',
        label: '6200'
      },
      {
        value: '6300',
        label: '6300'
      },
      {
        value: '6400',
        label: '6400'
      },
      {
        value: '6500',
        label: '6500'
      },
      {
        value: '6600',
        label: '6600'
      },
      {
        value: '6700',
        label: '6700'
      },
      {
        value: '6800',
        label: '6800'
      }
    ]
  }

  getoptionTypeArray() {

    this.optionTypeArray = [
      {
        value: 'CE',
        label: 'CE'
      },
      {
        value: 'PE',
        label: 'PE'
      }
    ]

  }


  decrement() {
    if (this.lotQty == 0) {
      this.lotQty = 0
    } else {
      this.lotQty = this.lotQty - 1
    }
  }
  increment() {
    this.lotQty = this.lotQty + 1
  }
  ngAfterViewInit() {

  }


  ngOnDestroy() {
    
  }




  chartdata:any=[];
  stockPrice:any;
  SD:any;
  iv:any;
  DTE:any;
  minus1sigma:any='';
  plus1sigma:any='';
  minus2sigma:any='';
  plus2sigma:any='';

  getChartData() {
    this.service.externalGetCall('https://opstra.definedge.com/api/strategybuilder/payoff/NIFTY$+75x5000CEx25JUN2020x0x0x0&+75x5500CEx25JUN2020x0x0x0&+75x6000CEx25JUN2020x3913.5x0x0&+75x6000CEx25JUN2020x3913.5x0x0$2020-06-25$0$0$-32').subscribe((response) => {
      this.chartdata = response['chart']
      this.iv=response["underlyingiv"];
      // console.log(JSON.stringify(response))
      this.stockPrice=response["spotPrice"];
      this.DTE = response["DTE"];
      this.SD = (this.stockPrice)*(this.iv/100)*Math.sqrt(this.DTE/365);
      this.plus2sigma = '+2\u03c3'
      this.minus2sigma= '-2\u03c3'
      this.plus1sigma = '+1\u03c3'
      this.minus1sigma= '-1\u03c3'
      this.loading=true
      this.drawMap()
    });
  }

  drawMap() {

    this.AmCharts.makeChart("payoffchartdiv", {
      "type": "serial",
      "path": "/amcharts/",
      /* "hideCredits":true, */
      "theme": "light",
      "title": "Payoff",
      "dataProvider": this.chartdata,
      "categoryField": "StockPrice",
      "graphs": [{
        "id": "graph1",
        "title": "Price",
        "valueField": "Final",
        "xField": "Change",
        "lineColor": "#45b001",
        "fillColors": "	#45b001",
        "negativeLineColor": "#ec6500",
        "negativeFillColors": "#ec6500",
        "lineThickness": 2,
        "useDataSetColors": false,
        "showBalloon": true,
        "fillAlphas": 0.2,
        "balloonText": "P&L [[value]] <br/>Chg. from Spot: ([[Change]]%)",
        /* "balloonFunction": function(graphDataItem, graph1) {
                        console.log('Hello')
                        var value = graphDataItem.values.value
                        return 'P&L' + value
                         if (value < this.stockPrice) {
                            return value + ((value-this.stockPrice)*this.lotsize)
                        } else {
                            return value + ((this.stockPrice-value)*this.lotsize)
                        } 
                        } */

      },
      {
        "id": "graph2",
        "valueField": "Today",
        "xField": "Change",
        "lineColor": "#0000FF",
        "lineThickness": 2,
        "useDataSetColors": false,
        "showBalloon": true,
        "fillAlphas": 0.0,
        "dashLength": 6,
        "balloonText": "t+0 P&L [[value]]",

      }],



      "categoryAxis": {
        "title": "Underlying Price",
        "dashLength": 5,
        "equalSpacing": true,

        "guides": [{
          "category": this.stockPrice < 50.0 ? this.stockPrice.toFixed(1) : Math.trunc(this.stockPrice),
          "lineColor": "green",
          "lineAlpha": 1,
          "dashLength": 3,
          "inside": false,
          "label": this.stockPrice,
          "position": top
        },
        {
          "category": Math.trunc(this.stockPrice - this.SD),
          "toCategory": Math.trunc(this.stockPrice + this.SD),
          "lineColor": "#a2b7a7",
          "lineAlpha": 0.1,
          "fillAlpha": 0.2,
          "fillColor": "#a2b7a7",
          "dashLength": 1,
          "inside": false,
        },
        {
          "category": Math.trunc(this.stockPrice - this.SD),
          "lineColor": "#a2b7a7",
          "lineAlpha": 0.1,
          "dashLength": 1,
          "inside": false,
          "labelRotation": 0,
          "label": this.minus1sigma,
          "position": "top"
        }, {
          "category": Math.trunc(this.stockPrice + this.SD),
          "lineColor": "#a2b7a7",
          "lineAlpha": 0.1,
          "dashLength": 1,
          "inside": false,
          "labelRotation": 0,
          "label": this.plus1sigma,
          "position": "top"
        }, {
          "category": Math.trunc(this.stockPrice - (2 * this.SD)),
          "toCategory": Math.trunc(this.stockPrice + (2 * this.SD)),
          "lineColor": "#c5d2c8",
          "lineAlpha": 0.1,
          "fillAlpha": 0.2,
          "fillColor": "#c5d2c8",
          "dashLength": 1,
          "inside": false,
        },
        {
          "category": Math.trunc(this.stockPrice - (2 * this.SD)),
          "lineColor": "#c5d2c8",
          "lineAlpha": 0.1,
          "dashLength": 1,
          "inside": false,
          "labelRotation": 0,
          "label": this.minus2sigma,
          "position": "top"
        }, {
          "category": Math.trunc(this.stockPrice + (2 * this.SD)),
          "lineColor": "#c5d2c8",
          "lineAlpha": 0.1,
          "dashLength": 1,
          "inside": false,
          "labelRotation": 0,
          "label": this.plus2sigma,
          "position": "top"
        }]
        /*  "gridColor": "#555",
         "gridAlpha": 1, */
      },

      "numberFormatter": {
        "precision": 2,
        "decimalSeparator": ".",
        "thousandsSeparator": ","
      },

      "valueAxes": [{
        "title": "Profit/Loss",

      }],


      "chartCursor": {
        "valueLineEnabled": true,
        "valueLineBalloonEnabled": false,
        "cursorAlpha": 1,
        "cursorColor": "#258cbb",
        "limitToGraph": "graph1",
        "valueLineAlpha": 0.2,
        "valueZoomable": true,

      },


      "responsive": {
        "enabled": true,
      }
    })
  }
}
