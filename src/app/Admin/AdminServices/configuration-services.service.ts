import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { books } from 'src/app/Modules/Books.model';


@Injectable({
  providedIn: 'root'
})
export class ConfigurationServicesService {

  constructor( private http : HttpClient) { }

  AddNewBook(formdata : books)  {
    return this.http.post(
      'https://bookmanagementsystem-cdcc6-default-rtdb.firebaseio.com/BookDetails.json'
      , formdata
      )
     
    }
}
