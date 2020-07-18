import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  dir = 'ltr';
  constructor(@Inject(LOCALE_ID) public lang: string,
    public loadingService: LoadingService) { }

  ngOnInit(): void {
    if (this.lang === 'ar') {
      this.dir = 'rtl';
    } else {
      this.dir = 'ltr';
    }
  }
}
