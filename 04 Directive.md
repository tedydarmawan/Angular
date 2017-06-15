# Objective
- Directive

# Directive
What are Directives?
Directives are instructions in the DOM!. Component are kind of such instruction in the DOM. Once we place selector of our component somewhere in our template at this point of time we instructing angular to add the content of our component template. Component are directives but directive with a template.
There are two type of directives:
1. Built-in Directive
  - ngIf
  - ngStyle
  - ngClass
  - ngFor
2. Custom Directive

Directive adalah suatu perintah pada DOM (Document Object Model).

## Built-in Directive
### ngIf
Directive ngIf digunakan untuk menampilkan atau menyembunyikan suatu template (kondisional). Untuk mendeklarasikan directive ngIf maka harus ditambahkan * didepan directivenya. * berarti bahwa ngIf merupakan directive struktural yang dapat mengubah struktur dari template HTML dengan menambah, menghapus atau memodifikasi suatu struktur DOM HTML.

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
```

### ngStyle
### ngClass
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
