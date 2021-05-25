import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutheticateduserService {

  constructor() { }

  get isAuthenticated(): boolean{
    if (localStorage.getItem('UserId')) {
    //  alert('username is present');
      return true;
      
    }
    //alert('username is not present');
    return false;
  }
}
