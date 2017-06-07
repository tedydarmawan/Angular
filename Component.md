# Objective
- Component

# Component
Angular terdiri dari component. Component merupakan kombinasi antara template HTML dengan kelas component yang mengatur bagian tampilan suatu halaman web.
Component juga merupakan suatu directive, yakni directive khusus yang memiliki template.

Setiap kelas component dimulai dengan @Component decorator yang berfungsi untuk mengambil objek metadata. 
Objek metadata ini berupa properti-properti yang menggambarkan bagaimana template HTML dan kelas component bekerja sama.

``` typescript
@Component({
  selector: 'app',
  template: `<h1>Hello World !</h1>`,
  styles: [`
    h1{
      background-color: red;
      color: white;
    }
  `]
})
export class AppComponent{
}
```

@Component decorator memiliki beberapa property yang sering digunakan yaitu:
- Properti selector
- Properti template
- Properti style

Untuk melihat properti-properti lebih lanjut pada @Component decorator dapat mengakses https://angular.io/docs/ts/latest/api/core/index/Component-decorator.html


## Properti Selector
Selector digunakan untuk membuat custom tag HTML yang merepresentasikan suatu component. Ketika custom tag HTML ini dipanggil maka template HTML akan muncul sesuai dengan lokasi penerapan custom tag HTMLnya

### app.ts
``` typescript
@Component({
...
  selector: 'app'
...
})
```

### index.html
``` html
<html>
  <body>
    ...
    <app></app> <!-- Custom tag HTML-->
    ...
  </body>
</html>
```

## Properti Template
Template mendefinisikan kode-kode HTML yang dituliskan pada component.
Ada 2 cara untuk menuliskan template pada suatu komponen yakni internal template dan external template.

### Internal Template
Penggunaan internal template sangat efektif jika kode HTML sedikit.

``` typescript
@Component({
  selector: 'app',
  template: `<h1>Hello World !</h1>`
})
export class AppComponent{
}
```

### External Template
Penggunaan external template sangat efektif jika kode HTML sangat banyak. Dengan demikian kode HTML akan dipisahkan dari kode TypeScript dan memiliki file .html tersendiri sehingga secara source menjadi lebih mudah dibaca dan dipahami. 

#### app.component.ts
``` typescript
@Component({
  selector: 'app',
  templateUrl: 'app.component.html'
})
export class AppComponent{
}
```

#### app.component.html
``` html
<h1>Hello World !</h1>
```


