# Form Pada Angular
Pada aplikasi non Angular data yang diinputkan pada form dikirimkan server pada saat proses submit sedangkan pada aplikasi Angular, form akan digunakan untuk mendapatkan data inputan dari user yang kemudian akan dikirimkan ke server melalui request HTTP dalam format JSON. Selain itu Angular juga dapat melakukan validasi terhadap form.

``` html
<form>
  <label>Name</label>
  <input type="text" name="name">
  <label>Mail</label>
  <input type="text" name="email">
  <button type="submit">Save</button>
</form>
```

Contoh:
Name: Tedy Darmawan
Mail: tedy.darmawan@gmail.com


``` json
{
  value: {
    name: "Tedy Darmawan",
    email: "tedy.darmawan@gmail.com"
  },
  valid: true
}
```

# Template-Driven vs Reactive

__Template-Driven__

Angular membentuk objek form dari DOM (Document Object Model).

__Reactive__

Form dibuat secara programming dan disingkronisasikan dengan DOM.

# Contoh Form
app.component.html
``` html
<div class="container">
  <div class="row">
    <div class="col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2">
      <form>
        <div id="user-data">
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" id="username" class="form-control">
          </div>
          <button class="btn btn-default" type="button">Suggest an Username</button>
          <div class="form-group">
            <label for="email">Mail</label>
            <input type="email" id="email" class="form-control">
          </div>
        </div>
        <div class="form-group">
          <label for="secret">Secret Questions</label>
          <select id="secret" class="form-control">
            <option value="pet">Your first Pet?</option>
            <option value="teacher">Your first teacher?</option>
          </select>
        </div>
        <button class="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  </div>
</div>
```

# Mendaftarkan Form
Untuk menggunakan fungsi Angular Form, pastikan import FormsModule pada app.module.ts

app.module.ts
``` typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Untuk membuat objek javascript dari Form maka input control pada form harus didaftarkan dengan menambahkan keyword __ngModel__ dan atribut __name__.
``` html
<input type="text" id="username" class="form-control" ngModel name="username">
```

app.component.html
``` html
<div class="container">
  <div class="row">
    <div class="col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2">
      <form>
        <div id="user-data">
          <div class="form-group">
            <label for="username">Username</label>
            <input 
              type="text" 
              id="username" 
              class="form-control"
              ngModel 
              name="username">
          </div>
          <button class="btn btn-default" type="button">Suggest an Username</button>
          <div class="form-group">
            <label for="email">Mail</label>
            <input 
              type="email" 
              id="email" 
              class="form-control"
              ngModel
              name="email">
          </div>
        </div>
        <div class="form-group">
          <label for="secret">Secret Questions</label>
          <select 
            id="secret" 
            class="form-control"
            ngModel
            name="secret">
            <option value="pet">Your first Pet?</option>
            <option value="teacher">Your first teacher?</option>
          </select>
        </div>
        <button class="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  </div>
</div>
```

# Submit menggunakan form
Buat method onSubmit() pada app.component.ts

app.component.ts
``` typescript
import { Component  } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit(form: NgForm){
    console.log(form);
  }
}
```

Tambahkan ngSubmit dan local reference pada form di app.component.html

app.component.html
``` html
<div class="container">
  <div class="row">
    <div class="col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2">
      <form (ngSubmit)="onSubmit(f)" #f="ngForm">
        <div id="user-data">
          <div class="form-group">
            <label for="username">Username</label>
            <input 
              type="text" 
              id="username" 
              class="form-control"
              ngModel 
              name="username">
          </div>
          <button class="btn btn-default" type="button">Suggest an Username</button>
          <div class="form-group">
            <label for="email">Mail</label>
            <input 
              type="email" 
              id="email" 
              class="form-control"
              ngModel
              name="email">
          </div>
        </div>
        <div class="form-group">
          <label for="secret">Secret Questions</label>
          <select 
            id="secret" 
            class="form-control"
            ngModel
            name="secret">
            <option value="pet">Your first Pet?</option>
            <option value="teacher">Your first teacher?</option>
          </select>
        </div>
        <button class="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  </div>
</div>
```
