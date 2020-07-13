import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar-keywords-ui',
  templateUrl: './navbar-keywords-ui.component.html',
  styleUrls: ['./navbar-keywords-ui.component.scss'],
})
export class NavbarKeywordsUiComponent implements OnInit {
  @Input() keywords$: Observable<any>;
  constructor() {}

  ngOnInit(): void {}
}
