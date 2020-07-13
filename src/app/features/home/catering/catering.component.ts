import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CateringService } from './catering.service';

@Component({
  selector: 'app-catering',
  templateUrl: './catering.component.html',
  styleUrls: ['./catering.component.scss'],
})
export class CateringComponent implements OnInit {
  dir = 'ltr';
  constructor(@Inject(LOCALE_ID) public lang: string, private cateringService: CateringService) { }

  state$ = this.cateringService.state$;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    navSpeed: 700,
    nav: true,
    navText: [
      '<i class="fa fa-chevron-left"></i>',
      '<i class="fa fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
      1000: {
        items: 4,
      },
      1430: {
        items: 5,
      },
    },
  };

  ngOnInit(): void {
    if (this.lang === 'ar') {
      this.dir = 'rtl';
    } else {
      this.dir = 'ltr';
    }

  }

  onCategorySelected(subCategory) {
    this.cateringService.getSubCategoryServices(subCategory);
  }
}
