import { Injectable } from '@angular/core';
import { IProduct } from './products/products.model'
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(public http: HttpClient) { }
  // products: IProduct[];
  data() {

    return this.http.get('http://localhost:3000/products')
  }

  newProduct(item) {
    this.http.post('http://localhost:3000/insert',{'product':item}).subscribe((data)=>{console.log(data)});
  }
}

