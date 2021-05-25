import { Component, OnInit } from '@angular/core';
import { BookConfigServiceService } from '../Configuration service/book-config-service.service';
import {map, retryWhen} from 'rxjs/operators';
import {books} from '../Modules/Books.model';

@Component({
  selector: 'app-book-home-page',
  templateUrl: './book-home-page.component.html',
  styleUrls: ['./book-home-page.component.css']
})
export class BookHomePageComponent implements OnInit {

  displaybookdetails:books[]=[];
  //bookarray=[];
  constructor(private config : BookConfigServiceService){
  }

  ngOnInit(): void {
    this.GetAllBooks();
  }

  GetAllBooks(){
    this.config.GetAllBookDetails()
    .pipe(map((responsedata : {[key : string]:books} ) =>{
      const displaybookdetails:books[]=[];
      for (const key in responsedata){
        if(responsedata.hasOwnProperty(key)){
          displaybookdetails.push({...responsedata[key], id:key});
        }    
      }
      return displaybookdetails;
    }))
    .subscribe(bookdata =>{
      //console.log(bookdata);
      this.displaybookdetails = bookdata;
     //console.log(this.displaybookdetails);
    })
    
  }

}
