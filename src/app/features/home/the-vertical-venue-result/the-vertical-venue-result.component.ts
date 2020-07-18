import { Component, OnInit, Input, Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-the-vertical-venue-result',
  templateUrl: './the-vertical-venue-result.component.html',
  styleUrls: ['./the-vertical-venue-result.component.scss']
})
export class TheVerticalVenueResultComponent implements OnInit {

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
