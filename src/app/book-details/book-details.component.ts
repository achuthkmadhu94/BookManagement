import { Component, OnInit } from '@angular/core'
import {bookdetails} from '../BookDetails.services'
import {ActivatedRoute, Route} from '@angular/router'
import{bookdetailsarray} from '../Bookdetails.Module'
import {CookieService} from 'ngx-cookie-service'


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  bookid!: number;
  bookName! : string;
  bookImage! :string;
  bookRating! : string;
  bookPrice! : string;
  displayselectedbookdetails : bookdetailsarray[]=[];
  isButtonVisible : boolean=false;
  Checkifbookispresentincart : bookdetailsarray[]=[];
  ispresentincart : number=0 ;
  visibility : string = "visible" ;


  constructor(private bdetails : bookdetails , private route : ActivatedRoute ,private cookie : CookieService) { }

  ngOnInit(): void {
    this.bookid = this.route.snapshot.params['id'];
    this.displayselectedbookdetails = this.bdetails.getallbookdetailsbyid(this.bookid);

   if(this.cookie.check('addedtocart'))
   {
    this.Checkifbookispresentincart = JSON.parse(this.cookie.get('addedtocart')) ;
    for (let i=0 ;i <this.Checkifbookispresentincart.length ;i++){
      if(this.Checkifbookispresentincart[i].BookId == this.bookid ){
        this.ispresentincart=1;       
      }
    }
   }
   else{
    this.ispresentincart=0;
   }

   
  }

  AddItemtocart(cartid : number){
    this.bdetails.addtocart(cartid);
     this.isButtonVisible = true;
     this.visibility= "hidden";

  }  


}
