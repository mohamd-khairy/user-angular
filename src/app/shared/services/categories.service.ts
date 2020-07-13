import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private categoriesSub = new BehaviorSubject(null);
  categories$ = this.categoriesSub.asObservable();
  constructor(private http: HttpClient) {
    this.getCategoriesSubCategories();
  }

  getCategoriesSubCategories() {
    this.http.get('homePage/category-subcategory').subscribe((data) => {
      // const categories = [];
      // console.log('sub', Object.keys(data));
      // Object.keys(data).forEach((result, index) => {
      //   categories.push({
      //     result: data[result],
      //   });
      // });
      // const categories = Object.entries(data).map((e) => ({ [e[0]]: e[1] }));
      // console.log('The new categories', categories);
      this.categoriesSub.next(data);
    });
  }
}
