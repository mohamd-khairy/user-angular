import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { DiscoverMoreService } from './discover-more.service';

@Component({
  selector: 'app-discover-more-container',
  templateUrl: './discover-more-container.component.html',
  styleUrls: ['./discover-more-container.component.scss']
})
export class DiscoverMoreContainerComponent implements OnInit {
  dir = 'ltr';
  constructor(@Inject(LOCALE_ID) public lang: string, private discoverMoreService: DiscoverMoreService) { }
  services$ = this.discoverMoreService.services$;

  ngOnInit(): void {
    if (this.lang === 'ar') {
      this.dir = 'rtl';
    } else {
      this.dir = 'ltr';
    }
  }

}
