import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserauthenticationService {
 
     public userslist=[
       {userid: 1 ,
        username : 'a',
        password : 'a' 
    },
       {userid: 2 ,
        username : 'q',
        password : 'q' },

        {userid:3,
         username:'admin',
         password:'a'}
    ]
    authenticated! : boolean;
    constructor() { }

    checkforusers(username1 : string , password1 : string):boolean {
        for(var i=0;i<this.userslist.length;i++){
           // alert(this.userslist[i].username);
            if(this.userslist[i].username==username1 && this.userslist[i].password==password1)
            {
                this.authenticated = true;
                
                return this.authenticated;
            }
            else{
               
                this.authenticated=false;
            }
        }
        return this.authenticated;
    }
}
