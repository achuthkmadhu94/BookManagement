import { Component, OnInit } from '@angular/core'
import { CookieService } from 'ngx-cookie-service'
import { BookConfigServiceService } from '../Configuration service/book-config-service.service';
import { map } from 'rxjs/operators';
import { books } from '../Modules/Books.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  bdfromcookie! : string;
  emptyflag : boolean = true;
  userid : any ;
  cartdetails : any[]=[]; 
  TotalAmount : number = 0 ;

  constructor( private cookies :CookieService , private config : BookConfigServiceService){
  }

  ngOnInit(): void {
    this.cartdetails= []; 
    this.TotalAmount=0;
    this.GetUsersBooksAddedToCart ();
  }

  GetUsersBooksAddedToCart () {
    this.cartdetails= []; 
    this.TotalAmount=0;
     this.userid=localStorage.getItem('UserId');
     this.config.GetAllBooksInTheCartForAUser(this.userid)
     .pipe(map((responsedata : {[key : string]:any} ) =>{
      const displaybookdetails:any[]=[];
      for (const key in responsedata){
        if(responsedata.hasOwnProperty(key)){
          this.emptyflag=false;
          displaybookdetails.push({...responsedata[key], id:key});
           this.TotalAmount = this.TotalAmount+ Number(responsedata[key].BookPrice);
        }    
      }
      return displaybookdetails;
    }))
    .subscribe(bookdata =>{
      //console.log(displaybookdetails);
      this.cartdetails = bookdata;
     // console.log(this.cartdetails);
      
    })
  }

  DeleteBook(booktodelete : any){
   // console.log(booktodelete.BookId);
    this.config.DeleteBookFromCart(booktodelete.id).subscribe(responsedatas =>{
    // console.log(this.cartdetails.length);
      if(this.cartdetails.length===1){
        this.emptyflag=true;
      }
      this.GetUsersBooksAddedToCart();
    })
  }
}
