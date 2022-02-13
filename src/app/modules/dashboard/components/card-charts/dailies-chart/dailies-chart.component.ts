import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dailies-chart',
  templateUrl: './dailies-chart.component.html',
  styleUrls: ['./dailies-chart.component.scss'],
})
export class DailiesChartComponent {
  
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
    let totalLaunched = this.getTotalValuesBy('totalLaunched')
    let totalPending = this.getTotalValuesBy('totalPending')
    let total = totalLaunched + totalPending;    
    let percentagePending = this.roundTo((100*totalPending)/total, 2)
    let percentageLaunched = this.roundTo((100*totalLaunched)/total, 2)
     
    return {
      series: [percentagePending, percentageLaunched],
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

  getTotalValuesBy(e){
    return  this.data.reduce((partialSum, elem) => partialSum + elem[e], 0);
  }

  roundTo(num: number, places: number) {
    const factor = 10 ** places;
    return Math.round(num * factor) / factor;
  }  
}
