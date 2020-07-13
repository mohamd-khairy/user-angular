import { Component, OnInit } from '@angular/core';
import { DiscoverByCitiesService } from './discover-by-cities.service';

@Component({
  selector: 'app-discover-by-cities',
  templateUrl: './discover-by-cities.component.html',
  styleUrls: ['./discover-by-cities.component.scss'],
})
export class DiscoverByCitiesComponent implements OnInit {
  constructor(private citiesService: DiscoverByCitiesService) {}
  cities$ = this.citiesService.cities$;

  ngOnInit(): void {}
}
