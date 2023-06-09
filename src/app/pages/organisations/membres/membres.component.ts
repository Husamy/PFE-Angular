import { Router , NavigationExtras } from '@angular/router';
import { Component } from '@angular/core';
import { OrganisationService } from 'src/app/services/organisation.service';

@Component({
  selector: 'app-membres',
  templateUrl: './membres.component.html',
  styleUrls: ['./membres.component.css']
})
export class MembresComponent {
  users : any 
  constructor ( private OrganisationService : OrganisationService , private Router : Router    ) { 
  this.OrganisationService.getUsers().subscribe(response => {this.users = response })

  }
 navigateToProfile(userId: number, event: Event) {
  event.preventDefault(); // prevent the default behavior of the button element
  const navigationExtras: NavigationExtras = { state: { userId } };
  this.Router.navigate(['/profile', userId], navigationExtras);
}
 
}
