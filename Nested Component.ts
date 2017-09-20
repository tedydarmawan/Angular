# Passing Data dari component menggunakan @Output

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
