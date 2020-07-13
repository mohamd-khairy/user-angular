import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { FormControl } from '@angular/forms';
import { HeaderService } from '../../header.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.scss']
})

export class ResultSearchComponent implements OnInit {
  constructor(private headerService: HeaderService) { }


  ngOnInit() { }
}