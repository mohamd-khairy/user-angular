import { Component, OnInit, Input, Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-the-horizental-venue-result',
  templateUrl: './the-horizental-venue-result.component.html',
  styleUrls: ['./the-horizental-venue-result.component.scss']
})
export class TheHorizentalVenueResultComponent implements OnInit {

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
