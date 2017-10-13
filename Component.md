## Apa itu Component?
![Imgur](https://i.imgur.com/Bc1M6MS.png)

Template
- Tampilan layout
- Dibuat dengan HTML
- Melibatkan binding dan directive

Class
- Kode yang mengsupport tampilan
- Dibuat dengan TypeScript
- Properties = data
- Method = Logika

Metadata
- Data tambahan untuk Angular
- Didefinisikan dengan sebuah decorator

__app.component.ts__
``` typescript
@Component({
  selector: 'app', //app = directive
  template: `<h1>{{pageTitle}}</h1>`,
  styles: [`
    h1{
      background-color: red;
      color: white;
    }
  `]
})
export class AppComponent{
  pageTitle: string = 'Hello World!';
}
```

Angular terdiri dari component. Component merupakan kombinasi antara template HTML dengan kelas component yang mengatur bagian tampilan suatu halaman web.
Component juga merupakan suatu directive, yakni directive khusus yang memiliki template.

Setiap kelas component dimulai dengan @Component decorator yang berfungsi untuk mengambil objek metadata. 
Objek metadata ini berupa properti-properti yang menggambarkan bagaimana template HTML dan kelas component bekerja sama.

__Class__
``` typescript
export class AppComponent{
  pageTitle: string = 'Hello World!';
}
```

Decorator adalah suatu fungsi yang menambahkan metadata ke sebuah class, property atau method. Decorator selalu diawali dengan sebuah @.
Contoh built-in decorator: @Component

__Decorator__
``` typescript
@Component({
  selector: 'app',
  template: `<h1>{{pageTitle}}</h1>`,
  styles: [`
    h1{
      background-color: red;
      color: white;
    }
  `]
})
```

@Component decorator memiliki beberapa property yang sering digunakan yaitu:
- Properti selector
- Properti template
- Properti style

Untuk melihat properti-properti lebih lanjut pada @Component decorator dapat mengakses https://angular.io/docs/ts/latest/api/core/index/Component-decorator.html


## Properti Selector
Selector digunakan untuk membuat custom tag HTML yang merepresentasikan suatu component. Ketika custom tag HTML ini dipanggil maka template HTML akan muncul sesuai dengan lokasi penerapan custom tag HTMLnya

__app.component.ts__
``` typescript
@Component({
...
  selector: 'app'
...
})
```

__index.html__
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

__app.component.ts
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

__app.component.ts__
``` typescript
@Component({
  selector: 'app',
  templateUrl: 'app.component.html'
})
export class AppComponent{
}
```

__app.component.html__
``` html
<h1>Hello World !</h1>
```

## Properti Style
Style mendefinisikan implementasi CSS untuk suatu template. Ada 2 cara untuk mendefinisikan style yakni internal style dan external style.

### Internal Style
Penggunaan internal style sangat efektif jika CSS yang diimplementasikan sedikit. Keyword __styles__ digunakan untuk mengimplementasikan internal style.

__app.component.ts__
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

__app.component.ts__
``` typescript
@Component({
  selector: 'app',
  styleUrls: ['app.component.css']
})
export class AppComponent{
}
```

__app.component.css__
``` css
h1{
  background-color: red;
  color: white;
}
```

## Langkah-Langkah Membuat Component

### Buat component class
__app.component.ts__
``` typescript
export class AppComponent{
  pageTitle: string = 'Hello';
}
```

__app.component.ts__
``` typescript
export class AppComponent{
  pageTitle: string = 'Hello';
}
```
###



