import { Component, OnInit, Input, Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-vertical-card-venue-services',
  templateUrl: './vertical-card-venue-services.component.html',
  styleUrls: ['./vertical-card-venue-services.component.scss']
})
export class VerticalCardVenueServicesComponent implements OnInit {

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
