import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-the-filter',
  templateUrl: './the-filter.component.html',
  styleUrls: ['./the-filter.component.scss']
})
export class TheFilterComponent implements OnInit {

  constructor() { }
  isAllowed  = false;
  isdisplyed = false;
  // tslint:disable-next-line: member-ordering
  minValue = 5000;
  maxValue = 20000;
  options: Options = {
    floor: 0,
    ceil: 250000,
    showSelectionBar: true
  };

  toggledisplyed(){
    this.isAllowed = !this.isAllowed;
  }
  thisdisplyed() {
    this.isdisplyed = !this.isdisplyed;
  } 
  ngOnInit(): void {
  }
 
}
