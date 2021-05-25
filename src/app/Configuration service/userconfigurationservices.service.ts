import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from '../Modules/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserconfigurationservicesService {

  constructor(
    private http : HttpClient
   ) { }

  Registeruser(Newuserdata : user){
    return this.http.post('https://bookmanagementsystem-cdcc6-default-rtdb.firebaseio.com/Users.json',Newuserdata) ;
  }

  Validateuser () : Observable<any> {
    return this.http.get ('https://bookmanagementsystem-cdcc6-default-rtdb.firebaseio.com/Users.json');
  }
}
