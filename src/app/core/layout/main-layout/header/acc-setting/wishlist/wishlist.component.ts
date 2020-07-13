import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  // selectedWishlistTab: number = 3;

  // constructor(private activatedRoute: ActivatedRoute) { }
  constructor(  ) { }

  ngOnInit(): void {
    // this.activatedRoute.queryParams.subscribe(queryParams => {
    //   const index = queryParams['active'];
    //   switch (index) {
    //     case '3':
    //       this.selectedWishlistTab = 3;
    //       break;

    //     case '2':
    //       this.selectedWishlistTab = 2;
    //       break;

    //     default:
    //       this.selectedWishlistTab = 1;
    //       break;
    //   }
    // });
  }

}
