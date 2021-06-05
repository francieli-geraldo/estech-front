import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexGrid, ApexStroke, ApexTitleSubtitle, ApexXAxis } from 'ng-apexcharts';
import { PacientesService } from 'src/app/services/pacientes.service';

export interface RelatorioMonitoramento {
  plus: string;
  termino: string;
  grupo: string;
  status: string;
  peso_inicial: string;
  peso_atual: string;
  meta: string;
  total_eliminado: string;
  eliminado: string;
  objetivo: string;
  postagens: string;
  paciente: string;
}

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-relatorio-paciente',
  templateUrl: './relatorio-paciente.component.html',
  styleUrls: ['./relatorio-paciente.component.scss']
})
export class RelatorioPacienteComponent implements OnInit, AfterViewInit {
  
  @Input() month: any;
  
  arrayDays = []; 
  daysWeek = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
  lancamentoService = [];
  relatorioService: RelatorioMonitoramento;

  public chartOptions: Partial<ChartOptions>;

  constructor(private service: PacientesService) {}

  ngOnInit(): void {
    
    this.generateChart();

    this.month = 4;
    this.daysInMonth(); 
   
    this.relatorioService = {
      plus: 'Não',
      termino: '27-04-21',
      grupo: '1',
      status: 'Concluído',
      peso_inicial: '118.00',
      peso_atual: '117.300',
      meta: '103.00',
      total_eliminado: '-0.700',
      eliminado: '-0.700',
      objetivo: '5',
      postagens: '13',
      paciente: 'Edirceu (3540) - Programa: Turbo - Inicio: 16/04/2021'      
    }
    
    this.lancamentoService = [{
      ano: 2021,
      mes: 5,
      lancamentos: [
        {dia: 5, tipos: [0], peso: '180,5'},
        {dia: 8, tipos: [0,1,2,3,4], peso: '177,8'},
        {dia: 6, tipos: [0], peso: '179,9'},
        {dia: 17, tipos: [0,1,2,3,4,5,6,], peso: '165,7'}
      ]
    }]
  }

  ngAfterViewInit() :void {
    this.getLancamentos();
  }

  daysInMonth(){
    let currentMonth = this.month;
    var date = new Date();
    let firstDay: any = new Date(date.getFullYear(), this.month, 1);  

    while (currentMonth == this.month) {
      this.arrayDays.push(this.formatDate(firstDay));
      firstDay = firstDay.addDays(1);
      currentMonth = firstDay.getMonth();
    }    

  }

  formatDate(date) {    
    let dayWeek = this.daysWeek[date.getDay() % 7];
    return [date.getDate(), dayWeek.slice(0, 1)];
  }

  getLancamentos(){       
    this.lancamentoService.map(service => {
      service.lancamentos.map(lancamento => {
        lancamento.tipos.map(tipo => {
          let elemento = document.getElementById(`${service.mes}_${lancamento.dia}_${tipo}`);
          elemento.className = "text-success" 
          elemento.append('✔');
        })
        let elementoPeso = document.getElementById(`${service.mes}_${lancamento.dia}_7`);
        elementoPeso.append(lancamento.peso);
      })      
    });
  }


  generateChart() {
    this.chartOptions = {
      series: [
        {
          name: "Desktops",
          data: [140,137,137,137,137,137,137,137,135,130,127,127,127,127,127,128,128,125,120]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false,
          tools: {
            download: false
          }
        }
      },
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: "straight"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
        ]
      }
    };
  }
  
}
