import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss'],
})
export class SubHeaderComponent implements OnInit {
  constructor(@Inject(LOCALE_ID) public locale: string, public http: HttpClient) { }

  ngOnInit(): void {
  }

  changeLanguage() {
    if (this.locale === 'ar') {
      this.locale = 'en';
    } else {
      this.locale = 'ar';
    }
    localStorage.setItem('locale', this.locale);
    // this.http.post(environment.apiUrl + 'change-lang', {
    //   lang: this.lang.code
    // }).subscribe(() => {
    window.location.reload();
    //   }
    // );
  }
}
