# Improving Our Component
- Strong typing & interfaces
- Encapsulating styles
- Lifecycle hooks
- Custom pipes
- Nested Components

## Mendefinisikan Interfaces
Strong Typing
``` typescript
export class ProductListComponent{
  pageTitle: string = 'Product List';
  showImage: boolean = false;
  listFilter: string = 'cart';
  message: string;
  
  products: any[] = [...]; // not strong typing, create interface
  
  toggleImage(): void{
    this.showImage = !this.showImage;
  }
  
  onRatingClicked(message: string): void{
    this.message = message;
  }
}
```

### Interface
A specification identifying a related set of properties and methods.

A class commits to supporting the specification by implementing the interface.

Use the interface as a data type.

contoh interface

product.ts 
``` typescript
export interface IProduct{
  productId: number;
  productName: string;
  productCode: string;
  releaseDate: Date;
  price: number;
  description: string;
  starRating: number;
  imageUrl: string;
  calculateDiscount(percent: number): number;
}
```
interface = interface keyword
IProduct = interface name

### Menggunakan Interface
``` typescript
import { IProduct } from './product';

export class ProductListComponent{
  products: IProduct[] = [...];
}
```

Jika mempunyai business logic atau method terkait interface dapat membuat class didalam product.ts

product.ts 
``` typescript
export interface IProduct{
  productId: number;
  productName: string;
  productCode: string;
  releaseDate: Date;
  price: number;
  description: string;
  starRating: number;
  imageUrl: string;
  calculateDiscount(percent: number): number;
}

export class Product implements IProduct{
  constructor(public productId: number,
              public productName: string,
              public productCode: string,
              public releaseDate: Date,
              public price: number,
              public description: string,
              public starRating: number,
              public imageUrl: string){
  }
  
  calculateDiscount(percent: number): number{
    return this.price - (this.price * percent / 100);
  }
}
```

## Encapsulation Component Styles

### Handling unique component styles (Problem)
- Templates sometimes require unique styles
- We can inline the styles directly into the HTML
- We can build an external stylesheet and link it in index.html

Angular provide a better way using component styles encapsulation:
- styles
``` typescript
@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styles: ['thead {color: #337AB&;}']
})
```
- styleUrls
``` typescript
@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
```

product-list.component.css
``` css
thead{
  color: #337AB7;
}
```

##  Menggunakan Lifecycle Hooks

### Component Lifecycle
Create -> Render -> Create and Render Children -> Process Changes (Looping) -> Destroy

### Component Lifecycle Hooks
- OnInit: Perform component initialization, retrieve data
- onChanges: Perform action after change to input properties
- onDestroy: Perform cleanup

### Using Lifecycle Hook
- Implements OnInit
- Import OnInit
- Create Method ngOnInit(): void
``` typescript
import {Component, OnInit} from '@angular/core';

export class ProductListComponent implements OnInit{
  ngOnInit(): void{
    console.log('In OnInit');
  }
}
```

## Membuat Custom Pipe
