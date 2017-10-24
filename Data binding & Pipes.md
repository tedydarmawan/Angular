# Objective
- Property Binding
- Event Binding
- Two-way Binding
- Pipes

## Property Binding
``` html
<img [src]="product.imageUrl">
```

- src = Element property
- product.imageUrl = Template expression
- [] = Binding target
- "" = Binding source


__Interpolation__
``` html
<img src={{product.imageUrl}}>
```

Best practice
``` html
<img src="http://test.org/{{product.imageUrl}}">
```

Contoh Implementasi
``` typescript
export class ProductListComponent{
  imageWidth: number = 50;
  imageMargin: number = 2;
  products: any[] = [
    {
      "imageUrl": "http://www.image.com/image01.jpg",
      "productName": "Product 01"
    }
  ]
}
```

``` html
<tr *ngFor="let product of products">
  <td>
    <img [src]="product.imageUrl" [title]="product.productName"
    [style.width.px]="imageWidth" [style.margin.px]="imageMargin">
  </td>
</tr>
```


## Event Binding
Template
``` html
<h1>{{pageTitle}}</h1>
<img [src]="product.imageUrl">
<button (click)="toggleImage()">
<!-- 
() = Target Event
"" = Template statement
-->
```

Check event yang berlaku: https://developer.mozilla.org/en-US/docs/Web/Events

Class
``` typescript
export class ListComponent{
  pageTitle: string = "Product List";
  products: any[] = [...];
  toggleImage(): void {...}
}
```

Contoh Implementasi
``` typescript
export class ProductListComponent{
  showImage: boolean = false;
  
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
```

``` html
<button class="btn btn-primary" (click)="toggleImage()"> {{showImage ? 'Hide' : 'Show'}} Image</button>

<img *ngIf="showImage" [src]="product.imageUrl" [title]="product.productName"
    [style.width.px]="imageWidth" [style.margin.px]="imageMargin">
```


## Two-way Binding
Komunikasi dua arah dari template ke class dan sebaliknya

Template
``` html
<input [(ngModel)]="listFilter">

<!-- 
[()] Banana in a Box
-->
```

Class
``` typescript
export class ListComponent{
  listFilter: string = "Cart";
}
```

*** harus import FormsModule di app.module.ts untuk menggunakan two-way binding

Contoh Implementasi

Template
``` html
<div class="row">
  <div class="col-md-2">Filter by:</div>
  <div class="col-md-4">
    <input type="text" [(ngModel)]="listFilter">
  </div>
</div>
<div class="row">
  <div class="col-md-6">
    <h3>Filtered by: {{listFilter}}</h3>
  </div>
</div>
```

Class
``` typescript
export class ProductListComponent{
  listFilter: string = "cart";
}
```

Import FormsModule ke app.module.ts
``` typescript
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    FormsModule
  ]
})
```

## Pipes
Pipe digunakan untuk mengubah bound properties sebelum ditampilkan

Built-in pipes
- date
- number, decimal, percent, currency, uppercase, lowercase
- json, slice dan lainnya

Custom pipes

Contoh pipe
``` html
{{ product.productCode | lowercase }}

<img [src]="product.imageUrl" [title]="product.productName | uppercase">

{{ product.price | currency | lowercase }}

<!-- Pipe dengan parameter -->
{{ product.price | currency:'USD':true:'1.2-2' }}
```

Contoh implementasi
``` html
<td>{{product.productCode | lowercase}}</td>
<td>{{product.price | currency:'USD':true:'1.2-2'}}

```
