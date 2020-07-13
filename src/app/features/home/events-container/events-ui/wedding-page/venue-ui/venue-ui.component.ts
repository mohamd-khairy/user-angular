import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
 
//  import {MenuItem} from 'primeng/api'; 
@Component({
  selector: 'app-venue-ui',
  templateUrl: './venue-ui.component.html',
  styleUrls: ['./venue-ui.component.scss']
})
export class VenueUiComponent implements OnInit {
  constructor() { }
  public date3: Date;
  public en: any;
   isdisplyed = false;
   isAllowed  = false;
   isCheckBox = false;
    type = 'vertical';
    value = 100;
    minValue = 50;
  maxValue = 200;
  options: Options = {
    floor: 0,
    ceil: 250,
    showSelectionBar: true
  };

 
  thisdisplyed() {
    this.isdisplyed = !this.isdisplyed;
  } 
  toggledisplyed(){
    this.isAllowed = !this.isAllowed;
  }
  toggleCheck(){
    this.isCheckBox = !this.isCheckBox;
  }

  ngOnInit() {
    this.en = {
        firstDayOfWeek: 0,
        dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        dayNamesMin: ['Su','Mo','Tu','We','Th','Fr','Sa'],
        monthNames: [ 'January','February','March','April','May','June','July','August','September','October','November','December' ],
        monthNamesShort: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
        today: 'Today',
        clear: 'Clear',
        dateFormat: 'mm/dd/yy',
        weekHeader: 'Wk'
    };
  }
 
}
