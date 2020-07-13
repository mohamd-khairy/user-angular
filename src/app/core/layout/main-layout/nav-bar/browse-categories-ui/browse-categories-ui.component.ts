import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Inject, LOCALE_ID
} from '@angular/core';

@Component({
  selector: 'app-browse-categories-ui',
  templateUrl: './browse-categories-ui.component.html',
  styleUrls: ['./browse-categories-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrowseCategoriesUiComponent implements OnInit {
  dir = 'ltr';
  _categoriesSub;
  categories;
  subCategories;
  showMenu = false;
  @Input() set categoriesSub(values) {
    if (values) {
      this._categoriesSub = values;
      this.categories = Object.keys(values);
    }
  }

  get categoriesSub() {
    return this._categoriesSub;
  }

  constructor(@Inject(LOCALE_ID) public lang: string) { }

  ngOnInit(): void {
    if (this.lang === 'ar') {
      this.dir = 'rtl';
    } else {
      this.dir = 'ltr';

    }
  }

  selectCategory(category) {
    this.subCategories = this.categoriesSub[category];
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
