import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'basicAngular';
  low='drope down given below by using for loop in an array';
  months=['jan','feb','march','appril','may','june','july','aug','sep','oct','mov','dec'];
  isavailable=true;
  a=10;
  b=0;
  name="your name";
  ClickFun(event) {
    alert("alert box opened");
    console.log(event);
    
  }

  constructor() { }

  ngOnInit() {
  }

}
