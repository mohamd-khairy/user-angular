import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

export interface IPhoto {
  image: string;
  link: string;
}
@Injectable({
  providedIn: 'root',
})
export class BannerService {
  private _banners = new BehaviorSubject<Array<IPhoto>>(null);
  banners$ = this._banners.asObservable();
  constructor(private http: HttpClient) {
    this.getBanners();
  }
 
  getBanners() {
    this.http.get<Array<IPhoto>>('homepage/slider-bar').subscribe((data) => {
      this._banners.next(data);
    });
  }
}
