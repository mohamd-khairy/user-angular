import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Blog {
  title: string;
  image: string;
  link: string;
  blog_date: string;
}

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private _blogs = new BehaviorSubject<Array<Blog>>(null);
  blogs$ = this._blogs.asObservable();
  constructor(private http: HttpClient) {
    this.getBlogs();
  }
  getBlogs() {
    this.http.get<Array<Blog>>('homepage/blogs').subscribe((data) => {
      this._blogs.next(data);
    });
  }
}
