import { ProductsComponent } from './../products/products.component';
import { Injectable, OnInit } from '@angular/core';
import { Observable, of, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
}) // same as adding this service in app.module.ts providers
 
export class ProductService{


  constructor() { }

  private products: Array<any> = [
    { id: 1, name: "apple", price: 10 },
    { id: 2, name: "pear", price: 10 },
    { id: 3, name: "peach", price: 10 },
  ];

  // getters
  public getAllProducts(): Observable<Array<any>>{
    let rmd = 3;
    if(rmd<1) return throwError(()=>new Error("Error"));
    
    else return of(this.products);
  }

  public deleteProduct(id:number): Observable<boolean>{
    this.products=this.products.filter(product=>product.id!=id);
    return of(true);
  }

}
