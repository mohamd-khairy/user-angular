import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-discover-more-ui',
  templateUrl: './discover-more-ui.component.html',
  styleUrls: ['./discover-more-ui.component.scss']
})
export class DiscoverMoreUiComponent implements OnInit {

  @Input() services$;

  constructor() { }

  ngOnInit(): void {
  }

}
