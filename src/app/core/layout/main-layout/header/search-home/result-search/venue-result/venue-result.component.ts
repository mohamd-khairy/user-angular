import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { HeaderService } from '../../../header.service';

@Component({
  selector: 'app-venue-result',
  templateUrl: './venue-result.component.html',
  styleUrls: ['./venue-result.component.scss']
})
export class VenueResultComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  result_venue_state$: Observable<any> = this.headerService.result_venue_state$;
  // tslint:disable-next-line: variable-name
  cities_categories$: Observable<any> = this.headerService.state$;
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }


}
