import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';
//import {CookieService} from 'ngx-cookie-service'
import { BookConfigServiceService } from '../Configuration service/book-config-service.service';
import { books } from '../Modules/Books.model';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  bookid!: string;
  displayselectedbookdetails : any;
  cart : any;
  currentuserid : any =localStorage.getItem('UserId');
  _bookname : string ="";
  _bookauthor : string ="";
  _bookimage : string ="";
  _bookrating : string ="";
  _bookdescription : string ="";

  constructor(
    private route : ActivatedRoute ,
    private config : BookConfigServiceService) { }


  ngOnInit(): void {
     
    this.bookid = this.route.snapshot.params['id'];
    if(this.bookid!=null) {
      this.GetBookDetailsById(); 
    }
  }

  GetBookDetailsById(){ 
    this.config.GetBookDetailsByID(this.bookid)
    .subscribe(((responsedatas:any)=>{
      this.displayselectedbookdetails = responsedatas;
      
      this._bookimage=this.displayselectedbookdetails['BookImageURL'];
      this._bookname =this.displayselectedbookdetails['BookName'];
      this._bookauthor=this.displayselectedbookdetails['BookAuthor'];
      this._bookdescription=this.displayselectedbookdetails['BookDescription'];
      this._bookrating = this.displayselectedbookdetails['BookRating'];

      this.ngAfterViewInit()
    }))
 }

 ngAfterViewInit() {
  // Hack: Scrolls to top of Page after page view initialized
  let top = document.getElementById('top');
  if (top !== null) {
    top.scrollIntoView();
    top = null;
  }
}

AddToCart(){

   // console.log(this.displayselectedbookdetails['BookAuthor']);
  
  this.cart = {BookId : this.bookid , UserId : this.currentuserid ,
    BookImageURL : this.displayselectedbookdetails['BookImageURL'],
    BookName: this.displayselectedbookdetails['BookName'] ,
    BookAuthor:this.displayselectedbookdetails['BookAuthor'],
     BookPrice : this.displayselectedbookdetails['BookPrice']}

    // console.log(this.cart);
     
     this.config.AddBookToCart(this.cart).subscribe(responsedata=>{
       console.log(responsedata);
     })

}

}
