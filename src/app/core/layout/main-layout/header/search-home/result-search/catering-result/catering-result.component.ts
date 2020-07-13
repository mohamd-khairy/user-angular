import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Options } from 'ng5-slider';
import { Observable } from 'rxjs';
import { HeaderService } from '../../../header.service';

@Component({
  selector: 'app-catering-result',
  templateUrl: './catering-result.component.html',
  styleUrls: ['./catering-result.component.scss']
})
export class CateringResultComponent implements OnInit {


  constructor(private headerService: HeaderService) { }

  result_catering_state$: Observable<any> = this.headerService.result_catering_state$;
  cities_categories$: Observable<any> = this.headerService.state$;

  ngOnInit(): void {
  }

}
