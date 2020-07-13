import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../blog.service';

@Component({
  selector: 'app-blog-ui',
  templateUrl: './blog-ui.component.html',
  styleUrls: ['./blog-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogUiComponent implements OnInit {
  @Input() blogs$: Observable<Array<Blog>>;

  constructor() {}

  ngOnInit(): void {}
}
