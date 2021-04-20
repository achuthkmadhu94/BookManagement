import { Injectable} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {bookdetailsarray} from './Bookdetails.Module'

@Injectable()
export class bookdetails{
   isaddedtocart:number =0;
   Allbookdetails : bookdetailsarray[] =[
      new bookdetailsarray(1,'WINGS OF FIRE','400','5.0','https://images-na.ssl-images-amazon.com/images/I/61M4NTWpw7L.jpg',this.isaddedtocart),
    new bookdetailsarray (2,'How To Be Famous','300','4.5','https://images-na.ssl-images-amazon.com/images/I/51jxyYL8lQL._SX328_BO1,204,203,200_.jpg',this.isaddedtocart)
   ];
  
   cookiestring! : string;
   bookdetailsarrayforcookie : bookdetailsarray[]=[] ;
   singlebookdetails : bookdetailsarray[]=[];
    i :number=0;

   constructor(private cookie : CookieService){
   }

   getallbooks (){
      return this.Allbookdetails.slice();   
   }

   getallbookdetailsbyid (id : number){

      for(let i=0 ; i<this.Allbookdetails.length ; i++)
      {
         if(this.Allbookdetails[i].BookId==id)
         {
            
            this.singlebookdetails[0] =this.Allbookdetails[i];
         }         
      }
      return this.singlebookdetails; 
   }

   addtocart (cartid : number)
   {    
      if(!this.cookie.check('addedtocart'))
      {
         for(let i=0 ; i<this.Allbookdetails.length ; i++)
         {
            if(this.Allbookdetails[i].BookId==cartid)
            {              
               this.Allbookdetails[i].Isadded=1;
               this.bookdetailsarrayforcookie[0]=(this.Allbookdetails[i]);
               this.cookiestring = JSON.stringify(this.bookdetailsarrayforcookie);
               this.cookie.set('addedtocart' ,this.cookiestring);
            }
         }    
      }
      else
      {
         for(let i=0 ; i<this.Allbookdetails.length ; i++)
         {
           if(this.Allbookdetails[i].BookId==cartid)
           {
            this.Allbookdetails[i].Isadded=1;
            this.bookdetailsarrayforcookie = JSON.parse(this.cookie.get('addedtocart'));
            this.bookdetailsarrayforcookie.push(this.Allbookdetails[i]);
            this.cookiestring = JSON.stringify(this.bookdetailsarrayforcookie);
            this.cookie.set('addedtocart' ,this.cookiestring);
           }
         }
      }
   }

   removefromcart(removethisbookid : number){ 
      this.bookdetailsarrayforcookie = JSON.parse(this.cookie.get('addedtocart'));

      for(let i=0 ; i<this.bookdetailsarrayforcookie.length ; i++)
         {
           if(this.bookdetailsarrayforcookie[i].BookId==removethisbookid)
           {
            this.bookdetailsarrayforcookie.splice(i,1);
           }
         }         
      this.cookiestring = JSON.stringify(this.bookdetailsarrayforcookie);
      if(this.bookdetailsarrayforcookie[0] != undefined)
      {
         this.cookie.delete('addedtocart');
         this.cookie.set('addedtocart' ,this.cookiestring) ;      
      }
      else{
         this.cookie.delete('addedtocart');
      }

   }

}