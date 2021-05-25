import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';
import { BookConfigServiceService } from '../Configuration service/book-config-service.service';
import {map, retryWhen} from 'rxjs/operators';
import {books} from '../Modules/Books.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bookbytype',
  templateUrl: './bookbytype.component.html',
  styleUrls: ['./bookbytype.component.css']
})
export class BookbytypeComponent implements OnInit {

  constructor(
    private route : ActivatedRoute,
    private config : BookConfigServiceService
    ) { }

  booktype : any ;
  displaybookdetails:books[]=[];

  ngOnInit(): void {
    //this.booktype = this.route.snapshot.params['type'];
    //console.log(this.booktype);
    this.route.paramMap.subscribe(params => {
      this.booktype = params.get('type');
      this.GetAllBooks();
    })
    
  }

  
  GetAllBooks(){
    this.config.GetAllBookDetails()
    .pipe(map((responsedata : {[key : string]:books} ) =>{
      const displaybookdetails:books[]=[];
      for (const key in responsedata){
        if(responsedata.hasOwnProperty(key)){
          if(responsedata[key].BookType == this.booktype)
          {
            displaybookdetails.push({...responsedata[key], id:key});
          }
        }    
      }
      return displaybookdetails;
    }))
    .subscribe(bookdata =>{
      //console.log(bookdata);
      this.displaybookdetails = bookdata;
    })
    
  }

}
