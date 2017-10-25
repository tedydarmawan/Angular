# Improve Component
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
Suatu spesifikasi kelas yang mengidentifikasikan properti dan method yang terkait yang akan digunakan sebagai blueprint.

Interface digunakan untuk membuat custom data type.

Langkah-langkah membuat interface
- interface keyword
- export interface

Implementasi interface
- Gunakan keyword implements dan panggil nama interfacenya
- Deklarasikan kode untuk setiap property & method

__Contoh interface__

product.ts 
``` typescript
export interface IProduct{ //interface = keyword, IProduct = nama interface
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

### Menangani unik style pada suatu kompenen
Masalah
- Terkadang template membutuhkan unik style / style tersendiri
- Salah satu cara adalah dengan menggunakan inline style secara langsung pada HTML
- Cara lain adalah dengan membuat external style dan menghubungkannya pada index.html

Solusi
- Angular menyediakan cara yang lebih baik dengan menggunakan component style encapsulation
- styles : Tentukan array dari string style
``` typescript
@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styles: ['thead {color: #337AB&;}']
})
```
- styleUrls : Tentukan suatu array dari path external style
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
- OnInit: Melakukan inisialisasi komponen, memperoleh data
- onChanges: Melakukan aksi setelah mengubah property input
- onDestroy: Melakukan pembersihan

### Cara Menggunakan LifeCycle Hooks
- import interface lifecycle hook
- implement interface lifecycle hook
- Deklarasikan kode untuk method lifecycle hook

### Contoh Penggunaan Lifecycle Hook
- Implements OnInit
- Import OnInit
- Buat method ngOnInit(): void
``` typescript
import {Component, OnInit} from '@angular/core';

export class ProductListComponent implements OnInit{
  ngOnInit(): void{
    console.log('In OnInit');
  }
}
```

## Membuat Custom Pipe
- Import Pipe dan PipeTransform
- Buat suatu class yang mengimplementasikan PipeTransform
  - Export class
- Deklarasikan kode untuk method transform
- Tambahkan decorator @Pipe pada kelas

### Menggunakan Custom Pipe
- Import custom pipe di Angular Module
- Tambahkan pipe pada array declrations di Angular Module
- Semua template yang berhubungan dengan komponen yang dideklarasikan pada Angular module dapat menggunakan pipe tersebut
- Gunakan pipe pada template
  - Karakter pipe
  - Nama pipe
  - Argumen / parameter pipe(dipisahkan menggunakan petik satu atau '')

Class
``` typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform{
  transform(value: string, character: string): string{
  
  }
}
```

Template
``` html
<td>{{ product.productCode | convertToSpaces: '-'}}</td>
```

- product.productCode akan menjadi parameter value di method transform
- '-' akan menjadi parameter character di method transform

Pipe
``` typescript
transform(value: string, character: string): string{

}
```

Module
``` typescript
@NgModule({
  declarations: [
    ConvertToSpacesPipe
  ]
})
```

__Contoh implementasi__

Buat kelas convert-to-spaces.pipe.ts
``` typescript
import { Pipe } from '@angular/core';

@Pipe({
  name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform{
  
  transform(value: string, character: string): string{
    return value.replace(character, ' ');
  }
}
```

product-list.component.html
``` html
<td>{{ product.productCode | lowercase | convertToSpaces: '-' }}</td>
```

## Filtering List
Class
``` ts
export class ListProductComponent{
  _listFilter: string;
  
  get listFilter(): string{
    return this._listFilter;
  }
  
  set listFilter(value: string): void{
    this._listFilter = value;
    
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }
  filteredProducts: IProduct[];
  products: IProduct[] = [{
    "productId": 2,
    "productName": "Golden Cart",
    "productCode": "GDN-023",
    "releaseDate": "March 18, 2017",
    "description": "15 gallon capacity",
    "price": 32.99,
    "starRating": 4.2,
    "imageUrl": "http://www.image.org/golder.jpg"
  }];
  
  constructor(){
    this.filteredProducts = this.products;
    this.listFilter = 'cart';
  }
  
  performFilter(filterBy: string): IProduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct)) => 
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
}
```

Template
``` html
<tr *ngFor="let product of filteredProducts">
  <td>{{ product.productName }}</td>
</tr>
```
