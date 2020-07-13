import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../discover-by-cities.service';

@Component({
  selector: 'app-discover-by-cities-ui',
  templateUrl: './discover-by-cities-ui.component.html',
  styleUrls: ['./discover-by-cities-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiscoverByCitiesUiComponent implements OnInit {
  @Input() cities$: Observable<Array<City>>;
  constructor() {}

  ngOnInit(): void {}
}
