import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

export interface City {
  id: number;
  name: string;
  neighborhood_key: string;
  image: string;
}
@Injectable({
  providedIn: 'root',
})
export class DiscoverByCitiesService {
  private _cities = new BehaviorSubject<Array<City>>(null);
  cities$ = this._cities.asObservable();

  constructor(private http: HttpClient) {
    this.getCities();
  }

  getCities() {
    return this.http
      .get<Array<City>>('homepage/discover_by_city')
      .subscribe((data) => {
        this._cities.next(data);
      });
  }
}
