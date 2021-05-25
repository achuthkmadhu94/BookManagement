import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class BookConfigServiceService {

  currentuserid = localStorage.getItem('UserId');

  constructor(private http : HttpClient) { }

  GetAllBookDetails(): Observable<any>  {
   return this.http.get('https://bookmanagementsystem-cdcc6-default-rtdb.firebaseio.com/BookDetails.json');
  }

  GetBookDetailsByID(bookid: string) : Observable<any> {
   const GetbookdetailsbyIdUrl ='https://bookmanagementsystem-cdcc6-default-rtdb.firebaseio.com/BookDetails/'+bookid+'.json';
    return this.http.get(GetbookdetailsbyIdUrl);
  }

  AddBookToCart (data : any) :Observable<any>{
    const AddtocartUrl='https://bookmanagementsystem-cdcc6-default-rtdb.firebaseio.com/Cart/'+this.currentuserid+'.json';
    return this.http.post(AddtocartUrl , data);
  }

  GetAllBooksInTheCartForAUser(userid : any) :Observable<any> {
    const getcartdetailsUrl ='https://bookmanagementsystem-cdcc6-default-rtdb.firebaseio.com/Cart/'+userid+'.json';
    return this.http.get(getcartdetailsUrl);
  }

  DeleteBookFromCart(Bookid : any) :Observable<any>  {
    const DeleteSelectedBookFromCart =
    'https://bookmanagementsystem-cdcc6-default-rtdb.firebaseio.com/Cart/'+this.currentuserid+'/'+Bookid+'.json';
    return this.http.delete(DeleteSelectedBookFromCart);
  }
}
