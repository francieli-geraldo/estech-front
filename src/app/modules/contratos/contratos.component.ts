import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Subscription } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { GroupingState, ICreateAction, IEditAction, IFilterView, IGroupingView, ISearchView, ISortView, PaginatorState, SortState } from "../../_metronic/shared/crud-table";
import { ContratosService } from "../../services/contratos.service";
import { CancelContratoModalComponent } from "./components/cancel-contrato-modal/cancel-contrato-modal.component";
import { DeleteContratoModalComponent } from "./components/delete-contrato-modal/delete-contrato-modal.component";
import { FormContratoModalComponent } from "./components/form-contrato-modal/form-contrato-modal.component";

@Component({
  selector: "app-contratos",
  templateUrl: "./contratos.component.html",
  styleUrls: ["./contratos.component.scss"],
})
export class ContratosComponent implements OnInit {

  @Input() paciente: number;

  constructor(    
    private modalService: NgbModal,
    public service: ContratosService
  ) {}

  ngOnInit(): void {
  }

  create() {
    const modalRef = this.modalService.open(FormContratoModalComponent, {
      size: "xl",
    });
    modalRef.componentInstance.id = undefined;
    modalRef.result.then(
      () => this.service.fetch(),
      () => {}
    );
  }
}
