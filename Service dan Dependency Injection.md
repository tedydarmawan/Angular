# Service dan Dependency Injection
Service dapat digunakan untuk membuat logic yang dapat digunakan secara berulang. Manfaat dari service misalnya sebagai central repository atau central business unit.

## Service
A class with a focused purpose.

Used for features that:
- Are independent from any particular component
- Provide shared data or logic accross components
- Encapsulate external interactions

Dependency Injection
A coding pattern in which a class receives the instances of objects it needs (called dependencies) from an external source rather than creating them itself.

# Membuat Service
- Create the service class
- Define the metadata with a decorator
- Import what we need

__Contoh service__

product.service.ts
``` ts
import { Injectable } from '@angular/core';
import { IProduct } from './product';

@Injectable()
export class ProductService{
    getProducts(): IProduct[]{
        return [
            {
                "productId": 1,
                "productName": "Product A"
            },
            {
                "productId": 2,
                "productName": "Product B"
            }
        ]
    }
}
```

# Registering the Service
- Register a provider
    - Code that can create or return a service
    - Typically the service class itself
- Define in component or Angular module metadata
- Registered in component
    - Injectable to component and its children
- Registered in Angular module
    - Injectable everywhere in the application

app.component.ts
``` ts
import { ProductService } from './products/product.service';

@Component({
    selecter: 'pm-root',
    template: `
    <div>
        <h1>{{pageTitle}}</h1>
        <pm-products></pm-products>
    </div>
    `,
    providers: [ProductService]
})
export class AppComponent{}
```

# Injecting the Service
product-list.component.ts
``` ts
@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent{
    constructor(private _productService: ProductService){
    }
}
```

# Membuat Logging Service

Buat kelas logging service 

logging.service.ts
``` typescript
export class LoggingService{
    logStatusChange(status: string){
        console.log('A server status changed, new status: ' + status);
    }
}
```

Tambahkan LogingService di kelas new-account.component.ts

snippet code:
``` typescript
const service = new LoggingService();
service.logStatusChange(accountStatus);
```

full code pada new-account.component.ts
``` typescript
import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    const service = new LoggingService();
    service.logStatusChange(accountStatus);
  }
}
```

# Inject Log Service ke Component
Untuk membuat dependency injection dari LoggingService, Tambahkan constructor, provider dan parameter LoggingService.

new-account.component.ts
```
import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService: LoggingService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    this.loggingService.logStatusChange(accountStatus);
  }
}
```

account.component.ts
```
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private loggingService: LoggingService){}

  onSetTo(status: string) {
    this.statusChanged.emit({id: this.id, newStatus: status});
    this.loggingService.logStatusChange(status);
  }
}
```

# Membuat Data Service
Buatlah accounts.service.ts

accounts.service.ts
``` typescript
export class AccountsService{
    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];

    addAccount(name: string, status: string){
        this.accounts.push({name: name, status: status});
    }

    updateStatus(id: number, status: string){
        this.accounts[id].status = status;
    }
}
```

app.component.ts
``` typescript
import { Component, OnInit } from '@angular/core';
import { AccountsService } from "./accounts.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService]
})
export class AppComponent implements OnInit{
  accounts: { name: string, status: string }[] = [];

  constructor(private accountsService: AccountsService){}

  ngOnInit(){
    this.accounts = this.accountsService.accounts;
  }
}
```

account.component.ts
``` typescript
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from "../accounts.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService, AccountsService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingService, private accountsService: AccountsService){}

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    this.loggingService.logStatusChange(status);
  }
}
```

new-account.component.ts
``` typescript
import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from "../accounts.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService, AccountsService]
})
export class NewAccountComponent {
  constructor(private loggingService: LoggingService, private accountsService: AccountsService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    this.loggingService.logStatusChange(accountStatus);
  }
}
```

# Memahami Hierarki Injector
Angular dependency injector memiliki hierarki injector yang berarti jika kita menyediakan service untuk suatu komponen, Angular dapat membuat instance dari service tersebut untuk komponen dan semua child komponennya. Dengan kata lain komponen dan semua child komponennya akan menerima instance yang sama dari service tersebut.

Hierarki pertama (paling tinggi) adalah AppModule, instance suatu service tersedia untuk seluruh aplikasi.
Hierarki kedua adalah AppComponent, instance suatu service tersedia untuk semua komponen (tapi tidak tersedia untuk service lainnya)
Hierarki ketiga (paling rendah) adalah AnyOtherComponent, instance suatu service tersedia untuk komponen tersebut dan child komponennya.

account.component.ts
``` typescript
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from "../accounts.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingService, private accountsService: AccountsService){}

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    this.loggingService.logStatusChange(status);
  }
}
```

new-account.component.ts
``` typescript
import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from "../accounts.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {
  constructor(private loggingService: LoggingService, private accountsService: AccountsService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    this.loggingService.logStatusChange(accountStatus);
  }
}
```

