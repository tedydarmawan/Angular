# Cara Menggunakan Component
- Digunakan sebagai directive
  - Nama directive -> selector dari nested component
  - Gunakan property binding untuk mengirim data ke nested component
  - Gunakan event binding untuk merespon event dari nested component
    - Gunakan $event untuk mengakses event payload yang dikirim dari nested component
- Digunakan sebagai routing target

# Passing data dari component menggunakan @Input

## Input decorator
 - Tambahkan pada suatu property dengan tipe data apapun
 - Awali dengan @ dan akhiri dengan () => @Input()

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
