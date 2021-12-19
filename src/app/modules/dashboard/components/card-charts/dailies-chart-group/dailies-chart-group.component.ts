import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dailies-chart-group',
  templateUrl: './dailies-chart-group.component.html',
  styleUrls: ['./dailies-chart-group.component.scss'],
})

export class DailiesChartGroupComponent implements OnInit {
  
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
          data: [44, 55, 41, 64, 22, 43, 21]
        },
        {
          name: "Pendentes",

          data: [53, 32, 33, 52, 13, 44, 32]
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
        categories: ['Grupo 1', 'Grupo 2','Grupo 3','Grupo 4','Grupo 6','Grupo 7','Grupo 8',]
      },      
      legend: {
        show: false,
      },      
      colors: ['#6993ff', '#F64E60'],
    };
  }

  
  hideTable(result) {
    this.isHide = result;    
    console.log(result);    
  }
}
