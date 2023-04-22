import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { InvitationsComponent } from './../../invitations/invitations.component';
import { AuthService } from 'src/app/services/auth.service';
import { Component } from '@angular/core';
import { UserRequestsComponent } from '../../user-requests/user-requests.component';
import { SendInvitationComponent } from '../send-invitation/send-invitation.component';

@Component({
  selector: 'app-admin-interface',
  templateUrl: './admin-interface.component.html',
  styleUrls: ['./admin-interface.component.css']
})
export class AdminInterfaceComponent {
  documentsAddedToday: number = 0;
  documentsAddedThisMonth: number = 0;
  documentsAddedThisYear: number = 0;
  requestsReceived: number = 0;
  logs : any
  myrequests : any 
  myinvitations : any 
  constructor(private authservice : AuthService , private dialog : MatDialog ){}
  
  
  users : any ; 
  ngOnInit(){
    this.authservice.getusers().subscribe(response => {this.users = response ; console.log(response)});
    this.authservice.timestampp().subscribe(response => { this.logs = response ;console.log(response)})
  }
  invitation(){
    console.log(this.myinvitations)

    const dialogRef = this.dialog.open(InvitationsComponent, {
      width: '600px',
      data :{ admin : true }
    });
   

  }
    requests(){
      const dialogRef = this.dialog.open(UserRequestsComponent, {
        width: '600px',
        data :{ admin : true }

        
      });  
  }
  sendinvitation(){
    const dialogRef = this.dialog.open(SendInvitationComponent, {
      width: '600px',
      data :{ admin : true }

      
    });  
  }
  
}
