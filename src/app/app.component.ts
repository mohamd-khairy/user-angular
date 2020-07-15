import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  title = 'evntoo-user-frontend';
  constructor(
    @Inject(LOCALE_ID) public locale: string
  ) { }
  ngOnInit() {
    console.log('THE CURRENT LANG', this.locale);
  }
}
