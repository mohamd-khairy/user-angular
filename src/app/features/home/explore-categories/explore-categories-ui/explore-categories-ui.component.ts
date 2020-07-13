import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  AfterViewChecked,
} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-explore-categories-ui',
  templateUrl: './explore-categories-ui.component.html',
  styleUrls: ['./explore-categories-ui.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExploreCategoriesUiComponent implements OnInit {
  // tslint:disable-next-line: variable-name

  public cat = null;

  private _categoriesSub: any;
  categories: string[];
  subCtaegories: any;
  @Input() customOptions: any;
  @Input() set categoriesSub(values) {
    if (values) {
      this._categoriesSub = values;
      this.categories = Object.keys(values);
      this.cat = this.categories[0];
    }
  }

  get categoriesSub() {
    return this._categoriesSub;
  }
  constructor() { }

  ngOnInit(): void { }


  selectCategory(category) {
    this.cat = category;
  }
}
