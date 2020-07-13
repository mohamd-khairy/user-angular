import { Component, OnInit, TemplateRef } from '@angular/core';
import {FormControl} from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-venue-service-option',
  templateUrl: './venue-service-option.component.html',
  styleUrls: ['./venue-service-option.component.scss']
})
export class VenueServiceOptionComponent implements OnInit {
  constructor(private modalService: BsModalService) { 
    this.items = Array(15).fill(0);
    this.serviceTypes = [
      {
        id: 1,
        label: 'Service type 1'
      },
      {
        id: 2,
        label: 'Service type 2'
      },
      {
        id: 3,
        label: 'Service type 1'
      }
    ];
  }
  modalRef: BsModalRef;
  items: any[];
 
 

  Tistype = 'active';
  newtype = 'done';
  serviceTypes = [];
  data:any;
  type = 'closed';
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  ngOnInit(): void {
  }
  compareServiceTypes(st1: any, st2: any) {
    return st1 && st2 ? st1.id === st2.id : st1 === st2;
}

}
