# Objective
- Directive

# Directive
Directive adalah suatu perintah pada DOM (Document Object Model) HTML.

Ada beberapa tipe directive pada Angular, yakni:
1. Component, merupakan directive yang memiliki template. Ketika menempatkan suatu selector component pada suatu template sama halnya dengan memerintahkan Angular untuk menambahkan seluruh konten yang ada pada template suatu component.
2. Structural Directive, mengubah layout DOM dengan menambah atau menghapus elemen DOM.
3. Attribute Directive, mengubah tampilan suaut elemen, component atau directive lainnya.

### ngIf
Directive ngIf digunakan untuk menampilkan atau menyembunyikan suatu template (kondisional). Untuk mendeklarasikan directive ngIf maka harus ditambahkan * didepan directivenya. * berarti bahwa ngIf merupakan structural directive yang dapat mengubah struktur dari template HTML dengan menambah, menghapus atau memodifikasi suatu struktur DOM HTML.

#### ngIf tanpa else
``` typescript
@Component({
  selector: 'app',
  template: `
    <button (click)="onShow()">Show/Hide</button>
    <p *ngIf="show">Klik untuk menampilkan atau menyembunyikan teks ini</p>
  `
})
export class App{
  show = true;
  
  onShow(){
    this.show = !show;
  }
}
```

#### ngIf dengan else
``` typescript
@Component({
  selector: 'app',
  template: `
    <button (click)="show = !show">Show/Hide</button>
    <p *ngIf="show; else teksSembunyi">Jika true ini muncul</p>
    <ng-template #teksSembunyi>
      <p>Jika false ini muncul</p>
    </ng-template>
  `
})
export class App{
  show = true;
}

// # = local reference sebagai marker dari suatu elemen pada template HTML
```

Tag `<ng-template>` adalah suatu elemen Angular yang digunakan untuk rendering HTML. Secara tidak langsung HTML yang ada didalam tag `<ng-template>` tidak akan ditampilkan dikarenakan sebelum rendering view, Angular mengganti `<ng-template>` dan kontennya dengan komentar.

### ngStyle
Directive ngStyle digunakan untuk mengubah tampilan suatu elemen HTML secara dinamis dengan cara menambah atau menghapus suatu style.
``` typescript
@Component({
  selector: 'app',
  template: `
    <p [ngStyle]="{ 'background-color': getColor() }">Status server {{status}}</p>
  `
})
export class App{
  status = 'online';
  
  constructor(){
    this.status = Math.random() > 0.5 ? 'online' : 'offline';
  }
  
  getColor(){
    return this.status === 'online' ? 'green' : 'red';
  }
}
```

### ngClass
Directive ngClass digunakan untuk mengubah tampilan suatu elemen HTML secara dinamis dengan cara menambah atau menghapus suatu class css. Directive ngClass akan menambahkan suatu class css pada elemen HTML jika memenuhi kondisi true.
``` typescript
@Component({
  selector: 'app',
  template: `
    <p [ngClass]="{ onlineColor: status == 'online' }">Status server {{status}}</p>
  `,
  styles: [`
    .onlineColor{
      color: white;
      background-color: green;
    }
  `]
})
export class App{
  status = 'online';
  
  constructor(){
    this.status = Math.random() > 0.5 ? 'online' : 'offline';
  }
}
```


### ngFor


## Custom Directive
``` html
<p ubahHijau>Paragraf memiliki background warna hijau</p>
```

``` typescript
@Directive({
  selector: '[ubahHijau]'
})
export class UbahHijau{
  ...
}
```
