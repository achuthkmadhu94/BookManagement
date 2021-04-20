import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookHomePageComponent } from './book-home-page/book-home-page.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import{bookdetails} from './BookDetails.services';
import { HeaderComponent } from './header/header.component'
import{ RouterModule, Routes} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import { AuthguardGuard } from './authguard.guard';

const appRoute : Routes =[
  {path : 'cart' ,component :CartComponent,canActivate : [AuthguardGuard] },
  {path : 'book-details/:id' ,component : BookDetailsComponent,canActivate : [AuthguardGuard]},
  {path : 'home' , component :BookHomePageComponent ,canActivate : [AuthguardGuard]},
  {path : 'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BookHomePageComponent,
    BookDetailsComponent,
    LoginComponent,
    CartComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [bookdetails,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
