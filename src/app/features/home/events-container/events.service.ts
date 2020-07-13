import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Event {
  id: number;
  name: string;
  image: string;
  position: number;
}
@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private _events = new BehaviorSubject<Array<Event>>(null);
  events$ = this._events.asObservable();
  constructor(private httpClient: HttpClient) {
    this.getEvents();
  }

  getEvents() {
    return this.httpClient
      .get<Array<Event>>('homepage/events')
      .subscribe((data) => {
        this._events.next(data);
      });
  }
}
