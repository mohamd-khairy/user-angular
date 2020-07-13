import { Component, OnInit, HostListener } from '@angular/core';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { NavBarService } from './nav-bar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor(
    public categoriesService: CategoriesService,
    public navBarService: NavBarService
  ) {}
  // tslint:disable-next-line: variable-name
  change_nav = false;
  @HostListener('document:scroll')
  scrollfunction() {
    if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 10) {
      this.change_nav = true;
    }
    else {
      this.change_nav = false;
    }
  }
  ngOnInit(): void {}
}
