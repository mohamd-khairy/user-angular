import { Component, OnInit, Input, Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-the-vertical-catering-result',
  templateUrl: './the-vertical-catering-result.component.html',
  styleUrls: ['./the-vertical-catering-result.component.scss']
})
export class TheVerticalCateringResultComponent implements OnInit {

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
