import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-blog-container',
  templateUrl: './blog-container.component.html',
  styleUrls: ['./blog-container.component.scss'],
})
export class BlogContainerComponent implements OnInit {
  constructor(private blogService: BlogService) {}
  blogs$ = this.blogService.blogs$;

  ngOnInit(): void {}
}
