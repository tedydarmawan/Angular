# Objective
- Databinding

# Databinding

> Databinding = Komunikasi

Databinding merupakan suatu cara komunikasi antara kode Typescript (_Business Logic_) dengan template HTML dalam suatu component.

Ada beberapa macam databinding yaitu:
- Komunikasi dari kode TypeScript ke Template HTML (Output Data):
  - String Interpolation (  {{data}} )
  - Property Binding ( [property]="data" )
- Komunikasi dari Template HTML ke kode TypeScript (Response Terhadap Interaksi User (User Events))
  - Event Binding ( (event)="expression" )
- Kombinasi dari kedua-duanya
  - Two-Way-Binding ( [(ngModel)]="data" )

## String Interpolation
String interpolation menggunakan _double curly braces_ atau {{ }} dan memasukkan data dari kode Typescript diantara {{ dan }} untuk melakukan databinding. Contohnya: {{ data }}
``` typescript
import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{nama}} !</h1>`
})
export class HelloWorld{
  nama = 'Tedy Darmawan';
}
```

## Property Binding
Property binding dilakukan dengan menambahkan _square bracket_ atau [ ] diantara HTML DOM property sehingga value dari DOM property tersebut menjadi fleksibel.

``` typescript
import {Component} from '@angular/core';

@Component({ 
  selector: 'my-app',
  template: `<h1 [hidden]="allowHide">Hello World !</h1>`
})
export class HelloWorld{
  allowHide = true;
}
```

Pada Angular dapat juga membuat custom property binding dengan menggunakan keyword @Input()


## Event Binding
Event binding dilakukan dengan menambahkan _parentheses_ atau ( ) diantara HTML DOM event. Event binding bertujuan untuk memberikan respon atas interaksi user dengan suatu template HTML.

``` typescript
import {Component} from '@angular/core';

@Component({ 
  selector: 'my-app',
  template: `
    <p>{{pesan}}</p>
    <button (click)="ubahPesan()">Ubah</button>
  `
})
export class HelloWorld{
  pesan = 'Pesan awal';
  
  ubahPesan(){
    this.pesan = 'Pesan diubah!';
  }
}
```

## Two-Way-Binding
Untuk menggunakan two-way-binding maka diharuskan mengimport FormsModule pada Module componentnya, kemudian tambahkan directive ngModel pada form input.
``` typescript
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [FormsModule]
})
```

``` typescript
@Component({
  selector: 'app',
  template: `
    <p>{{pesan}}</p><br/>
    <input type="text" [(ngModel)]="pesan"/>
  `
})
export class HelloWorld{
  pesan = `Pesan awal`;
}
```

