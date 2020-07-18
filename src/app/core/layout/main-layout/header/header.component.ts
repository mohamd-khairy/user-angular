import { Component, HostListener, Inject, LOCALE_ID } from '@angular/core';
import { HeaderService } from './header.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  dir = 'ltr';
  constructor(@Inject(LOCALE_ID) public lang: string,public headerService: HeaderService) { }
  state$: Observable<any> = this.headerService.state$;
  autoComplete$: Observable<any> = this.headerService.autoComplete$;
  // tslint:disable-next-line: variable-name
  change_header = false;

  onSearch(word) {
    this.headerService.search(word.text, word.cat, word.city);
  }
  @HostListener('document:scroll')
  scrollfunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      this.change_header = true;
    }
    else {
      this.change_header = false;
    }
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    if (this.lang === 'ar') {
      this.dir = 'rtl';
    } else {
      this.dir = 'ltr';

    }
  }
}
