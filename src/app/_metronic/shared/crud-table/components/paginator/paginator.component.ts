import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageSizes, PaginatorState } from '../../models/paginator.model';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Input() paginator: PaginatorState;
  @Input() isLoading;
  @Output() paginate: EventEmitter<PaginatorState> = new EventEmitter();
  pageSizes: number[] = PageSizes;

  pageInit: number;
  pageEnd: number;

  constructor() {}

  ngOnInit(): void {
    const paginatorTeste = Object.assign({}, this.paginator);
    this.pageInit = 1;
    this.pageEnd = paginatorTeste.pageSize;
  }

  pageChange(num: number) {
    this.paginator.page = num;
    this.paginate.emit(this.paginator);
    this.changePageLegend()  
  }

  sizeChange() {
    this.paginator.pageSize = +this.paginator.pageSize;
    this.paginator.page = 1;
    this.paginate.emit(this.paginator);
    this.changePageLegend();
  }
  
  changePageLegend() {    
    this.pageInit =  (this.paginator.page == 1) ? 1 : (((this.paginator.page - 1) * this.paginator.pageSize)+1);
    
    const calcPage = (this.paginator.page * this.paginator.pageSize); 
    this.pageEnd = (calcPage > this.paginator.total) ?  this.paginator.total :  calcPage;
  }
}
