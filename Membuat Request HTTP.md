# Membuat Request HTTP POST
Buatlah kelas Service, misal: server-service.ts
``` ts
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ServerService{
    constructor(private http: Http){}
    
    storeServers(servers: any[]){
        return this.http.post('https://angular-training-25d1d.firebaseio.com/data.json', servers);
    }
}
```

Tambahkan kelas service tersebut ke app.module.ts
``` ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerService } from './server.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Pada app.component.ts, inject ServerService dan buatlah method onSave() untuk memanggil service tersebut
``` ts
import { Component } from '@angular/core';
import { ServerService } from './server.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];
  constructor(private serverService: ServerService){}
  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  onSave(){
    this.serverService.storeServers(this.servers)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
```

Pada app.component.html tambahkan elemen button yang memanggil method onSave() pada kelas app.component.html
``` html
<div class="container">
  <div class="row">
    <div class="col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2">
      <input type="text" #serverName>
      <button class="btn btn-primary" (click)="onAddServer(serverName.value)">Add Server</button>
      <br><br>
      <button class="btn btn-primary" (click)="onSave()">Save Servers</button>
      <hr>
      <ul class="list-group" *ngFor="let server of servers">
        <li class="list-group-item">{{ server.name }} (ID: {{ server.id }})</li>
      </ul>
    </div>
  </div>
</div>
```

# Menambahkan header pada request POST
``` ts
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class ServerService{
    constructor(private http: Http){}
    storeServers(servers: any[]){
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('https://angular-training-25d1d.firebaseio.com/data.json', servers, {headers: headers});
    }
}
```

# Membuat request HTTP GET

Pada kelas server.service.ts, buatlah method getServers()
``` ts
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class ServerService{
    constructor(private http: Http){}
    storeServers(servers: any[]){
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('https://angular-training-25d1d.firebaseio.com/data.json', servers, {headers: headers});
    }
    getServers(){
        return this.http.get('https://angular-training-25d1d.firebaseio.com/data.json');
    }
}
```

Pada kelas app.component.ts, buatlah method onGet()
``` ts
import { Component } from '@angular/core';
import { ServerService } from './server.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];
  constructor(private serverService: ServerService){}
  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  onSave(){
    this.serverService.storeServers(this.servers)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }
  onGet(){
    this.serverService.getServers()
      .subscribe(
        (response: Response) => {
          const data = response.json();
          console.log(data);
        },
        (error) => console.log(error)
      );
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
```

Pada app.component.html tambahkan elemen button yang memanggil method onGet()
``` html
<div class="container">
  <div class="row">
    <div class="col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2">
      <input type="text" #serverName>
      <button class="btn btn-primary" (click)="onAddServer(serverName.value)">Add Server</button>
      <br><br>
      <button class="btn btn-primary" (click)="onSave()">Save Servers</button>
      <button class="btn btn-primary" (click)="onGet()">Get Servers</button>
      <hr>
      <ul class="list-group" *ngFor="let server of servers">
        <li class="list-group-item">{{ server.name }} (ID: {{ server.id }})</li>
      </ul>
    </div>
  </div>
</div>
```
