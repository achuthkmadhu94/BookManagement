import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { ConfigurationServicesService } from '../AdminServices/configuration-services.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { books } from 'src/app/Modules/Books.model';


@Component({
  selector:  'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
 

export class AddBooksComponent implements OnInit {

  
  @ViewChild('addbooks')  mytemplateForm! : NgForm ;
  
  constructor(
    private http : HttpClient , 
    private configservice :ConfigurationServicesService,
    private tost : ToastrService,
    private spinner: NgxSpinnerService
     ) { }


  displayselectedbookdetails:any ;
  alert:boolean =false;
  ngOnInit(): void {
  }

  AddBook(formdata : books) {
    this.spinner.show();
    this.configservice.AddNewBook(formdata).subscribe(responsedata => {      
      if(responsedata){
        //this.alert = true ;
        this.spinner.hide();
        this.showToatr();  
      }
          
    })
   
  }

  clearForm(){      
   // this.mytemplateForm.markAsUntouched(); 
    this.mytemplateForm.resetForm();
   }

   showToatr(){
     this.tost.success('Book details added successfully ' ,'Added');
    this.clearForm();
   }

  
}
