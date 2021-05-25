import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookHomePageComponent } from './book-home-page/book-home-page.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { bookdetails} from './BookDetails.services';
import { HeaderComponent} from './Layout/header/header.component';
import { SideNavbarComponent} from './Layout/side-navbar/side-navbar.component';
import { RouterModule, Routes} from '@angular/router';
import { CookieService} from 'ngx-cookie-service';
import { AuthguardGuard } from './authguard.guard';
import {FormsModule} from '@angular/forms';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddBooksComponent } from './Admin/add-books/add-books.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import {MatIconModule} from '@angular/material/icon';
//import { NotificationModule } from "@progress/kendo-angular-notification";



import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { BookbytypeComponent } from './bookbytype/bookbytype.component';



const appRoute : Routes =[
  {path : 'cart' ,component :CartComponent },
  {path : 'book-details/:id' ,component : BookDetailsComponent},
  {path : 'home' , component :BookHomePageComponent },
  {path : 'login', component: LoginComponent},
  {path : 'Admin', component : AdminLoginComponent},
  {path : 'Addbooks', component : AddBooksComponent},
  {path : 'bookbytype/:type',component : BookbytypeComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    BookHomePageComponent,
    BookDetailsComponent,
    LoginComponent,
    CartComponent,
    HeaderComponent,
    SideNavbarComponent,
    AdminLoginComponent,
    AddBooksComponent,
    FooterComponent,
    BookbytypeComponent
    
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatDatepickerModule,
    MatDialogModule,
    MatSidenavModule,
    MatNativeDateModule,
    RouterModule.forRoot(appRoute),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [bookdetails,CookieService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
