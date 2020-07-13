import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


export interface IService {
  service_id: number,
  brand_name: string,
  service_name: string,
  business_name: string,
  area: number,
  min_price: string,
  max_capacity: number,
  package: boolean,
  offer: string,
  image: string,
  city_name: string,
  neighborhood_name: string
}

@Injectable({
  providedIn: 'root'
})
export class DiscoverMoreService {

  private _services = new BehaviorSubject<Array<IService>>(null);
  services$ = this._services.asObservable();

  constructor(private http: HttpClient) {
    this.get_trend_services()
  }

  get_trend_services() {
    this.http.get<Array<IService>>('search/top_trend?category=1').subscribe((data) => {
      this._services.next(data);
    });
  }
}
