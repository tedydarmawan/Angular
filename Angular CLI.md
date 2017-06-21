# Objective
- Angular CLI

# Angular CLI
Angular CLI (Command Line Interface) merupakan sebuah tool yang digunakan untuk membuat dan mengatur aplikasi Angular menjadi lebih mudah dan sederhana. Angular CLI juga merupakan tool yang baik untuk projek Angular yang besar sehingga dapat membuat programmer lebih fokus ke pemrogramannya daripada ke alur kerja Angularnya.


Buka terminal atau cmd pada sistem operasi Windows untuk menjalankan beberapa perintah berikut ini:

__Menginstall Angular CLI__
``` cmd
npm install -g @angular/cli
```
-g = global

__Membuat projek baru Angular__
``` cmd
ng new nama-projek
```

__Masuk ke direktori projek__
``` cmd
cd nama-projek
```

__Menjalankan aplikasi Angular__
``` cmd
ng serve
```
ng serve akan mengcompile program TypeScript ke JavaScript dan menjalankan aplikasi Angular pada port 4200 (http://localhost:4200).

Mengganti port default
``` cmd
ng serve --port NOMOR_PORT
```
