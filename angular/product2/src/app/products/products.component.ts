import { Component, OnInit } from '@angular/core';
import{ProductsService} from '../products.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  sh:boolean=false;
  val: any="show image";
  products;

  showimg(){
    if(this.sh==true){
      this.sh=false;
      this.val="show image"
    }else{
      this.sh=true
      this.val="hide image"
    }
    
  }

  constructor(public service:ProductsService) { }

  ngOnInit() {
    this.service.data().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
    })
  }
  
}
