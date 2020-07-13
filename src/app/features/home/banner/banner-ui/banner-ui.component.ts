import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { IPhoto } from '../banner.service';

@Component({
  selector: 'app-banner-ui',
  templateUrl: './banner-ui.component.html',
  styleUrls: ['./banner-ui.component.scss'],
})
export class BannerUiComponent implements OnInit {
  @Input() customOptions;
  @Input() banners$: Observable<Array<IPhoto>>;
  constructor() {}

  ngOnInit(): void {}
}
