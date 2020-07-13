import { Component, OnInit, Input, Output, EventEmitter, Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-vertical-card-services',
  templateUrl: './vertical-card-services.component.html',
  styleUrls: ['./vertical-card-services.component.scss']
})
export class VerticalCardServicesComponent implements OnInit {

  @Input() service;
  dir = 'ltr';
  constructor(@Inject(LOCALE_ID) public lang: string) { }

  ngOnInit(): void {
    if (this.lang === 'ar') {
      this.dir = 'rtl';
    } else {
      this.dir = 'ltr';
    }
  }

}
