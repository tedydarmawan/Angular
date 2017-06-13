# Objective
Hal-hal yang akan dipelajari:
- Angular Architecture
- Apa itu Single Page Application?
- Apa itu Root Component?
- Apa itu Root Module?

# Angular Architecture
![](https://scontent.fsub6-2.fna.fbcdn.net/v/t1.0-9/19105796_10212859307148078_4449576728535112151_n.jpg?_nc_eui2=v1%3AAeH-huepOG24B6VctSlNx3pR4SLDJ-rY4rXGRDtKxWI5e71CJCwpAgUQN0WWuVmdZfjZ1dTdYyix5clkqE5Oj08K_t7sJeEdPU9yUA6AXu9sRw&oh=64909fe56792a61f718e0be366b8d447&oe=599F3426)

# Instruksi Projek
- Akses https://github.com/angular-university/angular2-for-beginners-starter
- Clone atau download file zip dengan mengklik tombol "Clone or Download" disebelah kanan atas

Kemudian pada command line masuk ke folder projek dan lakukan:
``` cmd
npm install
```

Tunggu beberapa menit hingga proses instalasi selesai.

Untuk menjalankan projek lakukan:
``` cmd
npm start
```

Buka browser kemudian akses http://localhost:8080

- npm install digunakan untuk menginstall semua dependency projek yang ada pada package.json
- npm start digunakan untuk menjalankan server web terkait aplikasi

## Detail Pembuatan Projek
Semua langkah-langkah ini diimplementasikan di file app.ts

1. Buat kelas component HelloWorld kemudian tambahkan anotasi @Component beserta properti selector dan template
``` typescript
import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello World !</h1>`
})
export class HelloWorld{
}
```

2. Buat kelas module AppModule kemudian tambahkan anotasi @NgModule beserta properti declarations, imports dan bootstrap
``` typescript
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [HelloWorld],
  imports: [BrowserModule],
  bootstrap: [HelloWorld]
})
export class AppModule{
}
```

3. Bootstraping Application

Bootsraping application merupakan proses memuat aplikasi Angular pada saat aplikasi mulai dijalankan.

``` typescript
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

platformBrowserDynamic().bootstrapModule(AppModule);
```

4. Memanggil component di index.html
``` html
...
<body>
  <my-app>Loading...</my-app>
</body>
...
```

# Source Lengkap app.ts
``` typescript
import {Component, NgModule} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule} from "@angular/platform-browser";

@Component({
    selector:'my-app',
    template: `<h1>Hello World !</h1>`
})
export class HelloWorld {
}

 
@NgModule({
    declarations: [HelloWorld],
    imports: [BrowserModule],
    bootstrap: [HelloWorld]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
```

## Konsep Dasar
- __Single Page Application__ (SPA) merupakan aplikasi web yang memuat satu halaman HTML dan mengupdate halaman web secara dinamis berdasarkan interaksi user dengan aplikasi sehingga SPA memiliki user-experience yang lebih baik dibandingkan aplikasi web biasa.
- __Root Component__ adalah component utama yang didaftarkan pada properti bootsrap di Root Module
- __Module__ merupakan suatu cara untuk mengelompokkan component, directive, pipe dan service yang memiliki kesamaan fungsi menjadi satu kesatuan logical unit.
- __Root Module__ adalah module utama yang didaftarkan pada bootstraping application. 
  
  Setiap aplikasi Angular hanya boleh memiliki 1 Root Module.
- Properti __declarations__ digunakan untuk mendaftarkan component agar component tersebut dapat dikenali oleh module
- Properti __imports__ digunakan untuk mengimport module yang berisi fungsi-fungsi yang dibutuhkan sesuai dengan nama modulenya
  
  __BrowserModule__ berisi fungsi-fungsi yang dibutuhkan browser untuk menjalankan fungsi-fungsi yang ada pada Angular seperti built-in directive, pipes, services dan lainnya.
  BrowserModule hanya boleh digunakan di Root Module saja
- Properti __bootstrap__ hanya digunakan di Root Module dan berfungsi untuk mendaftarkan Root Component yang merupakan entry point dari aplikasi Angular.
