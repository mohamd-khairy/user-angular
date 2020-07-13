import { Component, OnInit, TemplateRef } from '@angular/core';
import {FormControl} from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-card-service-option',
  templateUrl: './card-service-option.component.html',
  styleUrls: ['./card-service-option.component.scss']
})
export class CardServiceOptionComponent implements OnInit {

  constructor(private modalService: BsModalService) { }
  
  modalRef: BsModalRef;
  items: any[];
  Tistype = 'active';
  newtype = 'done';
  type = 'closed';
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  
  ngOnInit(): void {
  }

}
