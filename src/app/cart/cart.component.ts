import { Component, OnInit } from '@angular/core'
import{bookdetails} from '../BookDetails.services'
import {bookdetailsarray} from '../Bookdetails.Module'
import{CookieService} from 'ngx-cookie-service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  displaybookdetails:bookdetailsarray[]=[];


  bdfromcookie! : string;
  emptyflag : boolean = false;

  constructor(private bookdetails : bookdetails, private cookies :CookieService){
  }

  ngOnInit(): void {
   // this.displaybookdetails = this.bookdetails.getallbooks();
   if(this.cookies.check('addedtocart')){
    this.displaybookdetails = JSON.parse(this.cookies.get('addedtocart'));
    this.emptyflag = true;
   }
   else{
     this.emptyflag=false;
   }
   // console.log(this.displaybookdetails1[0]); 
  }

  removeItemfromcart(removethisbookid :number)
  {
    //alert(removethisbookid);
    this.bookdetails.removefromcart(removethisbookid);
    this.ngOnInit();
  }

}
