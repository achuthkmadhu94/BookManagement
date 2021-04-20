import { Component, OnInit } from '@angular/core';
import {UserauthenticationService} from '../userauthentication.service';
import {ActivatedRoute, Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authenticuser : boolean = false;

  constructor(
    private userauthentication: UserauthenticationService ,
    private router: Router,
    private cookie: CookieService
     ) { }

  ngOnInit(): void {   
  }

  login(){
    var uname = (document.getElementById("Uname") as HTMLInputElement).value;
    var password = (document.getElementById("Pass") as HTMLInputElement).value;

    if(this.userauthentication.checkforusers(uname ,password)){
     this.authenticuser =true;
      this.cookie.set('userdata' , JSON.stringify({
        "username" : uname,
        "password" : password
      }))
     this.router.navigate(['home']);
    } 
    else{
     this.authenticuser =false; 
     //this.router.navigate(['../app-book-home-page']);
    }
   // alert(this.authenticuser);
  }

}
