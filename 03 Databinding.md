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

Dapat juga menghardcode string pada string interpolation, dengan menambahkan 
``` typescript
import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>{{'Hello'}} Mr. {{nama}} !</h1>`
})
export class HelloWorld{
  nama = 'Tedy Darmawan';
}


## Property Binding


## Event Binding


## Two-Way-Binding


