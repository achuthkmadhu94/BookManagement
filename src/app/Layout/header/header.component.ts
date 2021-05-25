import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cookie : CookieService , private router : Router) { }

  ngOnInit(): void {
  }
  logoutuser(){
    this.cookie.delete('userdata');
    this.router.navigate(['login']);

  }
}
