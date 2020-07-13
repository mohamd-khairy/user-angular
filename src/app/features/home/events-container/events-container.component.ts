import { Component, OnInit } from '@angular/core';
import { EventsService } from './events.service';

@Component({
  selector: 'app-events-container',
  templateUrl: './events-container.component.html',
  styleUrls: ['./events-container.component.scss'],
})
export class EventsContainerComponent implements OnInit {
  events$ = this.eventsService.events$;
  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {}
}
