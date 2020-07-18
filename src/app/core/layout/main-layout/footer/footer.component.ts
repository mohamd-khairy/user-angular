import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
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
