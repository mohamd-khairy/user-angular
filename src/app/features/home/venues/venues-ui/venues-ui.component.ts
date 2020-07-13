import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Observable } from 'rxjs';
import { VenuesService } from '../venues.service';

@Component({
  selector: 'app-venues-ui',
  templateUrl: './venues-ui.component.html',
  styleUrls: ['./venues-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VenuesUiComponent implements OnInit {
  @Input() state$: Observable<any>;
  @Input() customOptions;
  @Output() categorySelected = new EventEmitter();

  constructor(private venueService: VenuesService) { }

  ngOnInit(): void { }

  selectCategory(category) {
    this.venueService.setFirstCategory(category);
    this.categorySelected.emit(category);
  }
}
