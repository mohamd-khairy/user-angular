import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  LOCALE_ID,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../events.service';

@Component({
  selector: 'app-events-ui',
  templateUrl: './events-ui.component.html',
  styleUrls: ['./events-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsUiComponent implements OnInit {
  leftBanner: Event;
  middleBanner: Event;
  upperRight: Event;
  bottomRight: Event;
  _events: Array<Event>;
  dir = 'ltr';

  @Input() set events(values) {
    if (values) {
      this._events = values;
      this.leftBanner = values.find(({ position }) => position === 1);
      this.middleBanner = values.find(({ position }) => position === 2);
      this.upperRight = values.find(({ position }) => position === 3);
      this.bottomRight = values.find(({ position }) => position === 4);
    }
  }
  get events() {
    return this._events;
  }

  constructor(@Inject(LOCALE_ID) public lang: string) {}

  ngOnInit(): void {
    if (this.lang === 'ar') {
      this.dir = 'rtl';
    } else {
      this.dir = 'ltr';

    }
  }
}
