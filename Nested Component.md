# Cara Menggunakan Component
- Digunakan sebagai directive
  - Nama directive -> selector dari nested component
  - Gunakan property binding untuk mengirim data ke nested component
  - Gunakan event binding untuk merespon event dari nested component
    - Gunakan $event untuk mengakses event payload yang dikirim dari nested component
- Digunakan sebagai routing target

## Membuat Suatu Nested Component
``` ts
import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
  rating: number = 4;
  starWidth: number;

  ngOnChanges(): void{
    this.starWidth = this.rating * 86/5;
  }
}
```

star.component.html
``` html
<div class="crop" [style.width.px]="starWidth" [title]="rating">
  <div style="width: 86px">
    <span class="glyphicon glyphicon-star"></span>
    <span class="glyphicon glyphicon-star"></span>
    <span class="glyphicon glyphicon-star"></span>
    <span class="glyphicon glyphicon-star"></span>
    <span class="glyphicon glyphicon-star"></span>
  </div>
</div>
```

# Menggunakan Nested Component
star.component.ts
``` ts
@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html'
})
export class StarComponent{
  rating: number;
  starWidth: number;
}
```

product-list.component.ts
``` ts
@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent{}
```

product-list.component.html
``` html
<td>
  <pm-star></pm-star>
</td>
```

import nested component pada app.module.ts
``` ts
import { StarComponent } from './shared/star.component';

@NgModule({
  declarations: [
    StarComponent
  ]
})
```
 
# Passing data dari component menggunakan @Input

## Input decorator
 - Tambahkan pada suatu property dengan tipe data apapun
 - Awali dengan @ dan akhiri dengan () => @Input()

star.component.ts
``` ts
@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html'
})
export class StarComponent{
  @Input() rating: number;
  starWidth: number;
}
```

product-list.component.ts
``` ts
@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent{}
```

product-list.component.html
``` html
<td>
  <pm-star [rating]="product.starRating"></pm-star>
</td>
```

# Passing Data dari component menggunakan @Output

## Output decorator
- Tambahkan pada suatu property yang dideklarasikan sebagai EventEmitter
- Gunakan argumen generic untuk mendefinisikan tipe event payload (data yang dimuat)
- Gunakan keyword new untuk membuat suatu instance dari EventEmitter
- Awali dengan @ dan akhiri dengan () => @Output()

product-list.component.ts
``` ts
@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent{
  onNotify(message: string): void {}
}
```

product-list.component.html
``` html
<td>
  <pm-star [rating]="product.starRating" (notify)="onNotify($event)"></pm-star>
</td>
```

star.component.ts
``` ts
@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html'
})
export class StarComponent{
  @Input() rating: number;
  starWidth: number;
  @Output notify: EventEmitter<string> = new EventEmitter<string>();
  
  onClick() {
    this.notify.emit('clicked!');
  }
}
```

star.component.html
``` html
<div (click)="onClick()">
</div> 
```
