import { Component, OnInit, Input, Output, EventEmitter, Inject, LOCALE_ID } from '@angular/core';
import { CateringService } from '../catering.service';

@Component({
  selector: 'app-catering-ui',
  templateUrl: './catering-ui.component.html',
  styleUrls: ['./catering-ui.component.scss']
})
export class CateringUiComponent implements OnInit {
  @Input() customOptions;
  @Input() state$;
  @Output() categorySelected = new EventEmitter();

  dir = 'ltr';
  constructor(@Inject(LOCALE_ID) public lang: string,private cateringService: CateringService) { }

  ngOnInit(): void {
    if (this.lang === 'ar') {
      this.dir = 'rtl';
    } else {
      this.dir = 'ltr';
    }
  }
  selectCategory(category) {
    this.cateringService.setFirstCategory(category);
    this.categorySelected.emit(category);
  }

}
