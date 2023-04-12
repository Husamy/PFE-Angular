import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-invitations',
  templateUrl: './invitations.component.html',
  styleUrls: ['./invitations.component.css']
})
export class InvitationsComponent {
  
  invitations : any ;
  constructor(private AuthService : AuthService , private dialogRef : MatDialogRef<InvitationsComponent> ){}
  ngOnInit(){
    this.AuthService.getinvitations().subscribe(response => { this.invitations = response ; console.log(response)}) ;
  }
  Accept(invitation:any){
    
    this.AuthService.acceptRequest(invitation.id).subscribe( response => { 
      console.log();
      this.dialogRef.close();

    })
  }
  Delete(invitaiton:any){
    this.AuthService.deleteInvitation(invitaiton).subscribe( response => { 
      console.log();
      this.dialogRef.close();

  })

}
}
