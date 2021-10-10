import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dailies-chart',
  templateUrl: './dailies-chart.component.html',
})
export class DailiesChartComponent {
  
  chartOptions: any = {};

  constructor() {
  }

  ngOnInit(): void {
    this.chartOptions = this.getChartOptions();
  }

  getChartOptions() {
    return {
      series: [44, 55],
      chart: {
        width: '100%',
        type: "pie",        
      },
      labels: ["Pendentes", "Lançados"],
      colors:[ '#F64E60','#1BC5BD'],
      legend: {
        position: 'top',
        inverseOrder: true
      }
    };
  }
}
