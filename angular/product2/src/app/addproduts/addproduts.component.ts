import { Component, OnInit } from '@angular/core';
import { IProduct } from'../products/products.model'
  import { from } from 'rxjs';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-addproduts',
  templateUrl: './addproduts.component.html',
  styleUrls: ['./addproduts.component.css']
})
export class AddprodutsComponent implements OnInit {

  productItem= new IProduct(null,null,null,null,null,null,null,null);
  constructor(private productService:ProductsService) { }
  // productItem=new IProduct(null,null,null,null,null,null,null,null);
  AddProduct(){
    alert('hvb')
    this.productService.newProduct(this.productItem)
    alert("kdhfg")
    console.log(this.productItem)
  }
  ngOnInit() {
    
  }

}
