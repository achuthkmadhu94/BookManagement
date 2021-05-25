import { Component } from '@angular/core';
import { AutheticateduserService } from './Authentication/autheticateduser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //isloginsuccessfull:boolean = false;

  constructor(public _authentic : AutheticateduserService){}

  title = 'Bookmanagementsystem2';

  //if(this._authentic.loggedIn()){}
  
}
