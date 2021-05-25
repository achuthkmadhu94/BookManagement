import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserauthenticationService } from '../userauthentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { NgForm } from '@angular/forms';
import { user } from '../Modules/user.model';
import { UserconfigurationservicesService } from '../Configuration service/userconfigurationservices.service';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('signup') mytemplateForm!: NgForm;

  Signupbuttondisable: boolean = false;
  ListOfAllUser: user[] = [];
  authenticated: boolean = false;
  hide : boolean = true;
  username1: any;
  userid1: any;



  constructor(
    private userauthentication: UserauthenticationService,
    private router: Router,
    private cookie: CookieService,
    private config: UserconfigurationservicesService,
    private tost: ToastrService
  ) {}

  ngOnInit(): void {
    document.querySelector('.img__btn')?.addEventListener('click', function () {
      document.querySelector('.cont')?.classList.toggle('s--signup');
    });

    this.Signupbuttondisable = true;
  }

  SignIn(Signindata: { value: { email: string; password: string | number } }) {
    this.config
      .Validateuser()
      .pipe(
        map((responsedata: { [key: string]: user }) => {
          const ListOfAllUserResponse: user[] = [];
          for (let key in responsedata) {
            if (responsedata.hasOwnProperty(key)) {
              ListOfAllUserResponse.push({ ...responsedata[key], id: key });
            }
          }
          return ListOfAllUserResponse;
        })
      )
      .subscribe((allusers) => {
        this.ListOfAllUser = allusers;
       // console.log(this.ListOfAllUser);
        for (let i = 0; i < this.ListOfAllUser.length; i++) {
          if (
            this.ListOfAllUser[i].email == Signindata.value.email &&
            this.ListOfAllUser[i].password == Signindata.value.password
          ) {
            this.authenticated = true;
           // console.log('1st execution');
           this.username1 = this.ListOfAllUser[i].username ;
           this.userid1 = this.ListOfAllUser[i].id ;

           localStorage.removeItem('UserId');
           localStorage.removeItem('UserName');
           localStorage.setItem('UserId' , this.userid1);
           localStorage.setItem('UserName', this.username1 );

            console.log(this.ListOfAllUser[i].id);
          }
        }
        this.authentic();
      });
  }
  authentic() {
    if (this.authenticated) {
      this.router.navigate(['home']);
      

    } else {
      this.showToatrLogin();
    }
  }

  signUp(Signupdata: user) {
    this.Signupbuttondisable = false;
    this.config.Registeruser(Signupdata).subscribe((responsedata) => {
      console.log(responsedata);
      this.Signupbuttondisable = true;
      this.clearForm();
      this.showToatr();
    });
  }

  clearForm() {
    this.mytemplateForm.resetForm();
  }

  showToatr() {
    this.tost.success(
      'User Registration successfull ..Please Sing In  ',
      'Registered'
    );
    this.clearForm();
  }

  showToatrLogin() {
    this.tost.error("Invalid Credentials", "Oops..! Something went wrong");
    //this.clearForm();
  }
}
