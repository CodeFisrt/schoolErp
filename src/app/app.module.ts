import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { CustomerComponent } from './components/customer/customer.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { VariablesComponent } from './components/variables/variables.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgIFAdvComponent } from './components/ng-ifadv/ng-ifadv.component';
import { NgForAdvComponent } from './components/ng-for-adv/ng-for-adv.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgFor2Component } from './components/ng-for2/ng-for2.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CustomerComponent,
    AddUserComponent,
    VariablesComponent,
    DataBindingComponent,
    NgIfComponent,
    NgForComponent,
    NgIFAdvComponent,
    NgForAdvComponent,
    NgClassComponent,
    NgFor2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
