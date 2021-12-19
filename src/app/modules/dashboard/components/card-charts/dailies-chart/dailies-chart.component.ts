import { Component } from '@angular/core';

@Component({
  selector: 'app-dailies-chart',
  templateUrl: './dailies-chart.component.html',
  styleUrls: ['./dailies-chart.component.scss'],
})
export class DailiesChartComponent {
  
  chartOptions: any = {};
  isHide: boolean = true;

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
        maxHeight: '50vh',
        type: "pie",        
      },
      labels: ["Pendentes", "Lançados"],
      colors:[ '#F64E60','#6993ff'],
      legend: {
        show: false,
      }
    };
  }

  hideTable(result) {
    this.isHide = result;    
    console.log(result);    
  }
}
