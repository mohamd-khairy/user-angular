import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-royal-gallery',
  templateUrl: './royal-gallery.component.html',
  styleUrls: ['./royal-gallery.component.scss']
})
export class RoyalGalleryComponent implements OnInit {
 
  constructor() { }
// tslint:disable-next-line: no-inferrable-types
Quantity:number = 200;
i = 200
pluse(){
  // tslint:disable-next-line: triple-equals
  if(this.i !=5000000){
    this.i++;
    this.Quantity=this.i;
  }
}
minus(){
  // tslint:disable-next-line: triple-equals
  if(this.i !=1){
    this.i--;
    this.Quantity=this.i;
  }
}
  ngOnInit (): void {
}
}
