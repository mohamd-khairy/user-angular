import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adresses-setting',
  templateUrl: './adresses-setting.component.html',
  styleUrls: ['./adresses-setting.component.scss']
})
export class AdressesSettingComponent implements OnInit {

  constructor() { }
  type = 'opened';
  Newtype = 'thisactive';
  thistype = 'Onactive';

  ngOnInit(): void {
  }

}
