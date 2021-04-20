import { Component, OnInit } from '@angular/core';
import{bookdetails} from '../BookDetails.services'
import {bookdetailsarray} from '../Bookdetails.Module';

@Component({
  selector: 'app-book-home-page',
  templateUrl: './book-home-page.component.html',
  styleUrls: ['./book-home-page.component.css']
})
export class BookHomePageComponent implements OnInit {

  displaybookdetails!:bookdetailsarray[];

  constructor(private bookdetails : bookdetails){
  }

  ngOnInit(): void {
    this.displaybookdetails = this.bookdetails.getallbooks();
  }

}
