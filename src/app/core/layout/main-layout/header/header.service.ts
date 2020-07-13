import { Injectable } from '@angular/core';
import { Map } from 'immutable';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject, of } from 'rxjs';
import { switchMap, filter, tap, map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {

  public active = false;

  _state = {
    categories: null,
    cities: null,
    autoComplete: null,
    selectedCategory: null,
    selectedCity: null
  };

  _result_venue_state = {
    business_types: null,
    capacity: null,
    price: null,
    fits_with: null,
    neighborhood: null,
    result: null,
    searchDate: null,
    per_page: null,
    current_page: null,
    total: null
  };

  _result_catering_state = {
    business_types: null,
    capacity: null,
    fits_with: null,
    foodTypes: null,
    result: null,
    searchDate: null,
    per_page: null,
    current_page: null,
    total: null
  };

  private result_catering_state = new BehaviorSubject(this._result_catering_state);
  public result_catering_state$ = this.result_catering_state.asObservable();

  private result_venue_state = new BehaviorSubject(this._result_venue_state);
  public result_venue_state$ = this.result_venue_state.asObservable();

  private store = new BehaviorSubject(this._state);
  public state$ = this.store.asObservable();

  private autoComplete = new BehaviorSubject(null);
  autoComplete$ = this.autoComplete.asObservable();

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.getCategoriesAndCities();
  }

  getCategoriesAndCities() {
    this.http.get('cities-categories').subscribe((response: any) => {
      const categories = response.categories;
      const cities = response.cities;
      this.updateState({ ...this._state, categories, cities });
    });
  }

  updateState(currentState) {
    this.store.next((this._state = currentState));
  }


  search(word, categoryId = 1, city) {
    if (word && word.length >= 3) {
      of(word)
        .pipe(
          filter((query) => query.length >= 3),
          switchMap(() => {
            return this.http.get(
              `auto/search?text=${word}&category=${categoryId}`
            );
          })
        )
        .subscribe((data: any) => {
          const autoComplete = data;
          const selectedCategory = categoryId;
          const selectedCity = city;
          this.updateState({ ...this._state, autoComplete, selectedCategory, selectedCity });
        });
    }
  }

  updateVenueResultState(currentState) {
    this.result_venue_state.next((this._result_venue_state = currentState));
  }

  updateCateringResultState(currentState) {
    this.result_catering_state.next((this._result_catering_state = currentState));
  }

  search_result(data, page = 1, pageSize = 12, sort = null) {
    let category = data.category;
    const searchDate = data;

    let getUrl = `search?category=${data.category}&city=${data.city}&page=${page}`;

    if (data.search && data.search != null && data.search != 'null') {
      getUrl += `&text=${data.search}`;
    }

    if (sort != null && sort != 'null') {
      getUrl += `&sortColumn=price&sortDirection=${sort}`;
    }

    of(data)
      .pipe(
        filter((query) => query),
        switchMap(() => {
          return this.http.get(getUrl);
        })
      )
      .subscribe((data: any) => {
        if (data) {
          const per_page = data.per_page;
          const current_page = data.current_page;
          const total = data.total;

          let query_string = getUrl.split("?", 2)[1];

          if (category == 1) {
            const result = data.data;
            if (result) {
              const business_types = data.business_types;
              const capacity = data.capacity;
              const fits_with = data.fits_with;
              const neighborhood = data.neighborhood;
              const price = data.price;
              this.updateVenueResultState({
                ...this._result_venue_state, result, business_types,
                capacity, fits_with, neighborhood, searchDate, per_page, current_page, total, price
              });
              this.router.navigateByUrl('venue/result?' + query_string);
            } else {
              alert('there is no data');
            }

          } else if (category == 2) {
            const result = data.data;
            if (result) {
              const business_types = data.business_types;
              const capacity = data.capacity;
              const foodTypes = data.foodTypes;
              const fits_with = data.fits_with;
              const price = data.price;

              this.updateCateringResultState({
                ...this._result_catering_state, result, business_types,
                capacity, fits_with, foodTypes, searchDate, per_page, current_page, total, price
              });
              this.router.navigateByUrl('catering/result?' + query_string);
            } else {
              alert('there is no data');
            }
          }
        }
      });
  }


  filter_search_result(data, page = 1, pageSize = 12, filters = null) {
    let category = data.category;
    const searchDate = data;

    let getUrl = `search/filter?category=${data.category}&city=${data.city}&page=${page}`;

    if (data.search && data.search != null && data.search != 'null') {
      getUrl += `&text=${data.search}`;
    }

    if (filters && filters.package) {
      getUrl += `&package=1`;
    }

    if (filters && filters.offer) {
      getUrl += `&offer=1`;
    }

    if (filters && filters.business_types && JSON.parse(filters.business_types).length > 0) {
      getUrl += `&business_types=${filters.business_types}`;
    }

    if (filters && filters.food_types && JSON.parse(filters.food_types).length > 0) {
      getUrl += `&food_types=${filters.food_types}`;
    }

    if (filters && filters.fits_with && JSON.parse(filters.fits_with).length > 0) {
      getUrl += `&fits_with=${filters.fits_with}`;
    }

    if (filters && filters.neighborhood && JSON.parse(filters.neighborhood).length > 0) {
      getUrl += `&neighborhood=${filters.neighborhood}`;
    }

    if (filters && filters.capacity) {
      getUrl += `&capacity=${filters.capacity}`;
    }

    if (filters && filters.min_price) {
      getUrl += `&min_price=${filters.min_price}`;
    }

    if (filters && filters.max_price) {
      getUrl += `&max_price=${filters.max_price}`;
    }

    if (filters && filters.sort && filters.sort != null && filters.sort != 'null') {
      getUrl += `&sortColumn=price&sortDirection=${filters.sort}`;
    }

    of(data)
      .pipe(
        filter((query) => query),
        switchMap(() => {
          return this.http.get(getUrl);
        })
      )
      .subscribe((data: any) => {
        if (data) {
          const per_page = data.per_page;
          const current_page = data.current_page;
          const total = data.total;

          let query_string = getUrl.split("?", 2)[1];

          if (category == 1) {

            const result = data.data;
            this.updateVenueResultState({
              ...this._result_venue_state, result, searchDate, per_page, current_page, total
            });
            this.router.navigateByUrl('venue/result?' + query_string);

          } else if (category == 2) {

            const result = data.data;
            this.updateCateringResultState({
              ...this._result_catering_state, result, searchDate, per_page, current_page, total
            });
            this.router.navigateByUrl('catering/result?' + query_string);
          }
        }
      });
  }
}
