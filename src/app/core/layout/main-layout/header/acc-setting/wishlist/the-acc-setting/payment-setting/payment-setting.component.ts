import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-setting',
  templateUrl: './payment-setting.component.html',
  styleUrls: ['./payment-setting.component.scss']
})
export class PaymentSettingComponent implements OnInit {

  constructor() { }
  type = 'opened';
  ngOnInit(): void {
  }

}
