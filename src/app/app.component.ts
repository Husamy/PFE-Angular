import { Component } from '@angular/core';
import { CookieService  } from 'ngx-cookie-service';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'application';
  auth : boolean = false ;

  constructor( private authservice : AuthService ) { }

  isAuthenticated():boolean{
    return this.authservice.isLoggedIn()
  }
}