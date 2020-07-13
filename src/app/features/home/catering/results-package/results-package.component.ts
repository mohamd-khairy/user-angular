import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results-package',
  templateUrl: './results-package.component.html',
  styleUrls: ['./results-package.component.scss']
})
export class ResultsPackageComponent implements OnInit {

  constructor() { }
  type = 'vertical';
  ngOnInit(): void {
  }

}
