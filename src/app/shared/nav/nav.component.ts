import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  private readonly TOKEN_KEY = 'myapp_token';
  isLoggedIn: any  ;

  constructor(private router: Router , private sessionService : AuthService) { }
  ngOnInit() {
      this.isLoggedIn = sessionStorage.getItem(this.TOKEN_KEY);    }
  

  logout() {
    sessionStorage.removeItem(this.TOKEN_KEY);
  this.router.navigate(['/login'])  }
}
