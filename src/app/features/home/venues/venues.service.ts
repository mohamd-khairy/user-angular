import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

let _state = {
  categories: null,
  services: null,
  first: null
};
@Injectable({
  providedIn: 'root',
})
export class VenuesService {
  private _store = new BehaviorSubject(_state);
  state$ = this._store.asObservable();
  categoriesSub;

  constructor(private http: HttpClient) {
    this.getVenues();
  }

  getVenues() {
    this.http.get('homePage/venue-services').subscribe((data) => {
      this.categoriesSub = data;
      const categories = Object.keys(data);
      const services = data[categories[0]];
      const first = categories[0];
      this.updateState({ ..._state, categories, services, first });
    });
  }

  getSubCategoryServices(subCategory) {
    const services = this.categoriesSub[subCategory];
    this.updateState({ ..._state, services });
  }

  setFirstCategory(first) {
    this.updateState({ ..._state, first });
  }

  updateState(currentState) {
    this._store.next((_state = currentState));
  }
}
