import { Router , NavigationExtras } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-membres',
  templateUrl: './membres.component.html',
  styleUrls: ['./membres.component.css']
})
export class MembresComponent {
  users : any 
  constructor ( private AuthService : AuthService , private Router : Router    ) { 
  this.AuthService.getusers().subscribe(response => {this.users = response })

  }
 navigateToProfile(userId: number, event: Event) {
  event.preventDefault(); // prevent the default behavior of the button element
  const navigationExtras: NavigationExtras = { state: { userId } };
  this.Router.navigate(['/profile', userId], navigationExtras);
}
 
}
