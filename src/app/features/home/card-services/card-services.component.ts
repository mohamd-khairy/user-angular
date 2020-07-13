import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-services',
  templateUrl: './card-services.component.html',
  styleUrls: ['./card-services.component.scss']
})
export class CardServicesComponent implements OnInit {

  @Input() service;
  constructor() { }

  ngOnInit(): void {
  }

}
