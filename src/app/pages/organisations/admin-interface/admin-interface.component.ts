import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { InvitationsComponent } from './../../invitations/invitations.component';
import { AuthService } from 'src/app/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-interface',
  templateUrl: './admin-interface.component.html',
  styleUrls: ['./admin-interface.component.css']
})
export class AdminInterfaceComponent {
  constructor(private authservice : AuthService , private dialog : MatDialog ){}
  documentsAddedToday: number = 0;
  documentsAddedThisMonth: number = 0;
  documentsAddedThisYear: number = 0;
  requestsReceived: number = 0;
  logs : any
  Requests = [
    {
      email: 'john@example.com',
      message: 'I am interested in joining your company!',
      date: '2023-04-04T10:30:00.000Z'
    },
    {
      email: 'jane@example.com',
      message: 'Can you tell me more about the position?',
      date: '2023-04-02T15:45:00.000Z'
    },
    {
      email: 'mike@example.com',
      message: 'I have several years of experience in the field and would love to be part of your team.',
      date: '2023-03-30T09:15:00.000Z'
    }
  ];
  users : any ; 
  ngOnInit(){
    this.authservice.getusers().subscribe(response => {this.users = response ; console.log(response)});
    this.authservice.timestampp().subscribe(response => { this.logs = response ;console.log(response)})
  }
  invitation(){
    const dialogRef = this.dialog.open(InvitationsComponent, {
      width: '600px',
     
    });
    
  }
}
