import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dailies-chart-group',
  templateUrl: './dailies-chart-group.component.html',
  styleUrls: ['./dailies-chart-group.component.scss'],
})

export class DailiesChartGroupComponent implements OnInit {
   
  @Input()
  data: any[];

  chartOptions: any = {};
  isHide: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
    this.chartOptions = this.getChartOptions();
  }

  getChartOptions() {
    return {
      series: [
        {
          name: "Lançados",
          data: this.getValuesBy('totalLaunched')
        },
        {
          name: "Pendentes",
          data: this.getValuesBy('totalPending')
        }
      ],
      chart: {
        type: "bar",
        height: 430,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: "top"
          }
        }
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: "12px",
          colors: ["#fff"]
        }
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["#fff"]
      },
      xaxis: {
        categories: this.getValuesBy('groupName')
      },      
      legend: {
        show: false,
      },      
      colors: ['#6993ff', '#F64E60'],
    };
  }

  getValuesBy(e){
    return this.data.map(function(elem){
      return  elem[e];
    })
  }
  
  hideTable(result) {
    this.isHide = result;    
    console.log(result);    
  }
}
