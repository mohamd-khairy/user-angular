import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Observable } from 'rxjs';
import { CategoriesService } from 'src/app/shared/services/categories.service';
@Component({
  selector: 'app-explore-categories',
  templateUrl: './explore-categories.component.html',
  styleUrls: ['./explore-categories.component.scss'],
})
export class ExploreCategoriesComponent implements OnInit {
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
        items: 6,
      },
    },
  };
  dir = 'ltr';

  categories$: Observable<any>;
  constructor(private categoriesService: CategoriesService) {}
  ngOnInit(): void {
    this.categories$ = this.categoriesService.categories$;
  }


  // onCategorySelected(subCategory) {
  //   console.log(this.categories$);
  //   console.log(subCategory);
  //   console.log("here");

  //     // const services = this.categoriesSub[subCategory];
  //     // this.updateState({ ..._state, services });
  // }

}
