import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { ViewallComponent } from './viewall/viewall.component';
import { HomeComponent } from './home/home.component';
import {BookService} from './book.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { EditComponent } from './edit/edit.component';
import { NgpSortModule } from 'ngp-sort-pipe';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import {AuthService} from './auth.service';
import {HttpInterceptorService} from './http-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ViewComponent,
    ViewallComponent,
    HomeComponent,
    EditComponent,
    LoginComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgpSortModule
  ],
  providers: [BookService, AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
