import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

let _state = {
  categories: null,
  services: null,
  firstCategory: null
};

@Injectable({
  providedIn: 'root'
})
export class CateringService {

  private _store = new BehaviorSubject(_state);
  state$ = this._store.asObservable();
  categoriesSub;

  constructor(private http: HttpClient) {
    this.getFoods();
  }

  getFoods() {
    this.http.get('homePage/catering-services').subscribe((data) => {
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
