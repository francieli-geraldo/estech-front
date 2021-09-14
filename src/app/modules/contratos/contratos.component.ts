import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ContratosService } from "../../services/contratos.service";
import { FormContratoModalComponent } from "./components/form-contrato-modal/form-contrato-modal.component";

@Component({
  selector: "app-contratos",
  templateUrl: "./contratos.component.html",
  styleUrls: ["./contratos.component.scss"],
})
export class ContratosComponent implements OnInit {

  @Input() paciente: number;
  new_register;

  constructor(    
    private modalService: NgbModal,
    public service: ContratosService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    if(this.route.params['value'].hasOwnProperty('new_register'))
      this.create()
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
