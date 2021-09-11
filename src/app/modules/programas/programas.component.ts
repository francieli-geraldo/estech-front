import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Programa } from 'src/app/models/programa.model';
import { ProgramasService } from 'src/app/services/programas.service';
import { GroupingState, ICreateAction, IFilterView, IGroupingView, ISearchView, ISortView, PaginatorState, SortState } from 'src/app/_metronic/shared/crud-table';
import { DeleteProgramasModalComponent } from './components/delete-programas-modal/delete-programas-modal.component';
import { FormProgramasModalComponent } from './components/form-programas-modal/form-programas-modal.component';

@Component({
  selector: 'app-programas',
  templateUrl: './programas.component.html',
  styleUrls: ['./programas.component.scss']
})
export class ProgramasComponent 
implements
OnInit,
OnDestroy,
ICreateAction,
ISortView,
IFilterView,
IGroupingView {
paginator: PaginatorState;
sorting: SortState;
grouping: GroupingState;
isLoading: boolean;
filterGroup: FormGroup;
searchGroup: FormGroup;
private subscriptions: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    public service: ProgramasService
    ) { }

 
  // angular lifecircle hooks
  ngOnInit(): void {
    this.filterForm();
    this.searchForm();
    this.service.fetch();
    this.grouping = this.service.grouping;
    this.paginator = this.service.paginator;
    this.sorting = this.service.sorting;
    const sb = this.service.isLoading$.subscribe(
      (res) => (this.isLoading = res)
    );
    this.subscriptions.push(sb);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sb) => sb.unsubscribe());
  }

  // filtration
  filterForm() {
    this.filterGroup = this.fb.group({
      status: [""],
      type: [""],
      searchTerm: [""],
    });
    this.subscriptions.push(
      this.filterGroup.controls.status.valueChanges.subscribe(() =>
        this.filter()
      )
    );
    this.subscriptions.push(
      this.filterGroup.controls.type.valueChanges.subscribe(() => this.filter())
    );
  }

  filter() {
    const filter = {};
    const status = this.filterGroup.get("status").value;
    if (status) {
      filter["status"] = status;
    }

    const type = this.filterGroup.get("type").value;
    if (type) {
      filter["type"] = type;
    }
    // this.service.patchState({ filter });
  }

  // search
  searchForm() {
    this.searchGroup = this.fb.group({
      searchTerm: [""],
    });
    const searchEvent = this.searchGroup.controls.searchTerm.valueChanges
      .pipe(
        map(value => value.trim()),
        debounceTime(400),
        distinctUntilChanged(),
      )
      .subscribe((val) => this.service.filterByDescription(val));
    this.subscriptions.push(searchEvent);
  }

  // sorting
  sort(column: string) {
    const sorting = this.sorting;
    const isActiveColumn = sorting.column === column;
    if (!isActiveColumn) {
      sorting.column = column;
      sorting.direction = "asc";
    } else {
      sorting.direction = sorting.direction === "asc" ? "desc" : "asc";
    }
    this.service.patchState({ sorting });
  }

  // pagination
  paginate(paginator: PaginatorState) {
    this.service.patchState({ paginator });
  }

  // // form actions
  create() {
    this.editRegister(undefined, undefined);
  }

  edit(id: number) {
    const modalRef = this.modalService.open(FormProgramasModalComponent, {
      size: "xl",
    });
    modalRef.componentInstance.id = id;
    modalRef.componentInstance.register = id;
    modalRef.result.then(
      () => this.service.fetch(),
      () => {}
    );
  }

  editRegister(id: number, register: Programa) {
    const modalRef = this.modalService.open(FormProgramasModalComponent, {
      size: "xl",
    });
    modalRef.componentInstance.id = id;
    modalRef.componentInstance.register = register;
    modalRef.result.then(
      () => this.service.fetch(),
      () => {}
    );
  }

  delete(id: number) {
    const modalRef = this.modalService.open(DeleteProgramasModalComponent);
    modalRef.componentInstance.id = id;
    modalRef.result.then(
      () => this.service.fetch(),
      () => {}
    );
  }



  getProgramas(){
    return [
      {id: 1, description: "Emagrece você"},
      {id: 2, description: "Engorda você"},
      {id: 3, description: "Casa você"},
      {id: 4, description: "Separa você"},
    ]
  }

}
