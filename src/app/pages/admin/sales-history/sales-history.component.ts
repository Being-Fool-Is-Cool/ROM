import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-history',
  templateUrl: './sales-history.component.html',
  styleUrls: ['./sales-history.component.scss']
})
export class SalesHistoryComponent implements OnInit {

  options: any;
  initOpts: any;

  constructor() { }

  ngOnInit() {
    this.getChartData();
  }

  getChartData() {
    const xAxisData = [];
    const data = [];
    
    for (let i = 0; i < 100; i++) {
      xAxisData.push('category' + i);
      data.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }
    this.options = {
      color: ['#465294'],
      legend: {
        data: ['bar'],
        align: 'left',
      },
      tooltip: {},
      xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: {},
      series: [
        {
          name: 'bar',
          type: 'bar',
          data: data,
          animationDelay: (idx) => idx * 10,
        }
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx) => idx * 5,
    };
  }

  getPieChartData() {
    // this.initOpts = {
    //   renderer: 'svg',
    //   width: 900,
    //   height: 600
    // };
  
    // this.options = {
    //   color: ['#3398DB'],
    //   tooltip: {
    //     trigger: 'axis',
    //     axisPointer: {
    //       type: 'shadow'
    //     }
    //   },
    //   grid: {
    //     left: '3%',
    //     right: '4%',
    //     bottom: '3%',
    //     containLabel: true
    //   },
    //   xAxis: [
    //     {
    //       type: 'category',
    //       data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    //       axisTick: {
    //         alignWithLabel: true
    //       }
    //     }
    //   ],
    //   yAxis: [{
    //     type: 'value'
    //   }],
    //   series: [{
    //     name: 'Counters',
    //     type: 'bar',
    //     barWidth: '60%',
    //     data: [10, 52, 200, 334, 390, 330, 220]
    //   }]
    // };
  }

}
