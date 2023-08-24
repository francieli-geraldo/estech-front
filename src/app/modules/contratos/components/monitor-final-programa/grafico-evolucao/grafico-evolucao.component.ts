import { Component, Input, OnInit } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexFill,
  ApexMarkers,
  ApexYAxis,
  ApexXAxis,
  ApexTooltip
} from "ng-apexcharts";
import { dataSeries as db  } from "./data-series";

export interface DailyPosting {
  date: Date;
  currentWeight: number
}

@Component({
  selector: 'app-grafico-evolucao',
  templateUrl: './grafico-evolucao.component.html',
  styleUrls: ['./grafico-evolucao.component.scss']
})
export class GraficoEvolucaoComponent implements OnInit {
  @Input() dataSeries: DailyPosting[];

  public series: ApexAxisChartSeries;
  public chart: ApexChart;
  public dataLabels: ApexDataLabels;
  public markers: ApexMarkers;
  public title: ApexTitleSubtitle;
  public fill: ApexFill;
  public yaxis: ApexYAxis;
  public xaxis: ApexXAxis;
  public tooltip: ApexTooltip;

  ngOnInit(): void {
    this.initChartData();
  }

  public initChartData(): void {
    let ts2 = 1484418600000;
    let dates = [];

    const newDataSeries = [[]]

    newDataSeries.push(this.dataSeries);
    newDataSeries.push(this.dataSeries);
    
    for (let i = 0; i < this.dataSeries.length; i++) {
      ts2 = ts2 + 86400000;
      dates.push([newDataSeries[1][i].date, newDataSeries[1][i].currentWeight]);
    }

    this.series = [
      {
        name: "Peso atual",
        data: dates
      }
    ];
    this.chart = {
      type: "area",
      stacked: false,
      height: 350,
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true
      },
      toolbar: {
        autoSelected: "zoom"
      }
    };
    this.dataLabels = {
      enabled: false
    };
    this.markers = {
      size: 0 
    };
    this.fill = {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100]
      }
    };
    this.yaxis = {
      labels: {
        formatter: function (val) {
          return (val).toFixed(3);
        }
      },
      title: {
        text: "Peso"
      }
    };
    this.xaxis = {
      type: "datetime"
    };
    this.tooltip = {
      shared: false,
      y: {
        formatter: function (val) {
          return (val).toFixed(3);
        }
      }
    };
  }
}