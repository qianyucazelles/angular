import { Product } from '../modules/product.module';
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products!: Product[];
  filteredProducts!:Array<any>;
  errorMessage!:string;
  

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      {next: // if everything goes well, pass data
        data => {this.products=data},
        error: err => {this.errorMessage = err;}
    }
    );
    this.filteredProducts = this.products;
  }

  getAllProducts(){
    return 
  }
  handleDeleteProduct(p:Product) {
      //let index = this.products?.indexOf(product);
      // this.products?.splice(index,1)
      let conf = confirm("Are you sure?");
        if (conf==false) return;
      this.productService.deleteProduct(p.id).subscribe(
        {next: data => {}}
      );
      this.ngOnInit();
      
  }

  filterProduct(text: string){
    if (!text){
      this.filteredProducts = this.products;
    }

    this.filteredProducts = this.products.filter(
      product => product?.name.toLowerCase().includes(text.toLowerCase())
    )
    
  }


  constructor(private productService: ProductService){};

  

 
}
