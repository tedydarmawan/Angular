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
Penggunaan internal template sangat efektif jika kode HTML sedikit. Keyword __template__ digunakan untuk mengimplementasikan internal template.

``` typescript
@Component({
  selector: 'app',
  template: `<h1>Hello World !</h1>`
})
export class AppComponent{
}
```

### External Template
Penggunaan external template sangat efektif jika kode HTML sangat banyak. Dengan demikian kode HTML akan dipisahkan dari kode TypeScript dan memiliki file .html tersendiri sehingga secara source menjadi lebih mudah dibaca dan dipahami. Keyword __templateUrl__ digunakan untuk mengimplementasikan external template.

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

## Properti Style
Style mendefinisikan implementasi CSS untuk suatu template. Ada 2 cara untuk mendefinisikan style yakni internal style dan external style.

### Internal Style
Penggunaan internal style sangat efektif jika CSS yang diimplementasikan sedikit. Keyword __styles__ digunakan untuk mengimplementasikan internal style.

``` typescript
@Component({
  selector: 'app',
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

### External Style
Penggunaan external style sangat efektif jika CSS yang diimplementasikan sangat banyak. Dengan demikian kode CSS akan dipisahkan dari kode TypeScript dan memiliki file .css tersendiri sehingga secara source menjadi lebih mudah dibaca dan dipahami. Keyword __styleUrls__ digunakan untuk mengimplementasikan external style.

#### app.component.ts
``` typescript
@Component({
  selector: 'app',
  styleUrls: ['app.component.css']
})
export class AppComponent{
}
```

#### app.component.css
``` css
h1{
  background-color: red;
  color: white;
}
```
