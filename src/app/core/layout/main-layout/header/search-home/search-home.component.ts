import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
  EventEmitter,
  Output,
  Inject, LOCALE_ID
} from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';
import { HeaderService } from '../header.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-home',
  templateUrl: './search-home.component.html',
  styleUrls: ['./search-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchHomeComponent implements AfterViewInit {
  dir = 'ltr';
  @Input() state$: Observable<any>;
  @Input() autoComplete$: Observable<any>;
  @ViewChild('search', { static: true }) search: ElementRef;
  @Output() searching = new EventEmitter<any>();
  showList = false;
  searchForm = new FormGroup({
    category: new FormControl(),
    city: new FormControl(),
    search: new FormControl(),
  });
  private _state;
  @Input() set state(value) {
    if (value.categories) {
      this._state = value;
      this.searchForm.patchValue({
        category: this.state.selectedCategory ? this.state.selectedCategory : this.state.categories[0].id,
        city: this.state.selectedCity ? this.state.selectedCity : this.state.cities[0].key
      });
    }
  }

  get state() {
    return this._state;
  }

  constructor(@Inject(LOCALE_ID) public lang: string, private headerService: HeaderService, private router: Router,
    private route: ActivatedRoute) {

    this.route.queryParams.subscribe(params => {
      if (params['city']) {
        if (window.location.pathname.indexOf('venue') > -1) {
          var category = 1;
        } else if (window.location.pathname.indexOf('catering') > -1) {
          var category = 2;
        }
        setTimeout(() => {
          this.searchForm.get('category').setValue(category);
          this.searchForm.get('city').setValue(params['city']);
          this.searchForm.get('search').setValue(params['text']);
          this.showList = false;
        }, 1000);
      }
    });
  }

  ngAfterViewInit() {
    this.searchForm
      .get('search')
      .valueChanges.pipe(debounceTime(250), distinctUntilChanged())
      .subscribe((word) => {
        if (word) {
          this.showList = true;
        } else {
          this.showList = false;
        }

        const cat = this.searchForm.value.category;
        const city = this.searchForm.value.city;
        this.searching.emit({ text: word, cat: cat, city: city });
      });

  }

  go_to_service(id) {

    this.router.navigateByUrl('CateringServices');
  }
  onSubmit() {
    this.showList = false;
    const data = this.searchForm.value;
    this.headerService.search_result(data);
  }

}
