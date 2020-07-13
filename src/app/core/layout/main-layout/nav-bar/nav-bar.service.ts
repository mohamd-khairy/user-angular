import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavBarService {
  private _keywords = new BehaviorSubject(null);
  keywords$ = this._keywords.asObservable();
  constructor(private http: HttpClient) {
    this.getNavBarKeywords();
  }

  getNavBarKeywords() {
    this.http.get('homepage/nav-bar').subscribe((data) => {
      this._keywords.next(data);
    });
  }
}
