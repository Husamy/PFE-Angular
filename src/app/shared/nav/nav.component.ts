import { UserdataService } from './../../userdata.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  user : any ;
  constructor(private router: Router , private authservice : AuthService , private userdata : UserdataService) { 
     this.userdata.getSharedUserData().subscribe((userData) => {
      if (userData && userData.length > 0) {
        this.user = userData[0];
      } else {
        console.error('UserdataService returned an empty array.');
      }
    });
  }

 
  logout() {
  this.authservice.logout();  }
}
