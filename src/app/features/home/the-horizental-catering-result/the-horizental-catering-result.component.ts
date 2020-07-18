import { Component, OnInit, Input, Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-the-horizental-catering-result',
  templateUrl: './the-horizental-catering-result.component.html',
  styleUrls: ['./the-horizental-catering-result.component.scss']
})
export class TheHorizentalCateringResultComponent implements OnInit {

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
