import { UserRequestsComponent } from './../../user-requests/user-requests.component';
import { InvitationsComponent } from './../../invitations/invitations.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { AddOrganisationComponent } from '../add-organisation/add-organisation.component';
import { CreateOrganisationComponent } from '../create-organisation/create-organisation.component';

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.css']
})
export class OrganisationComponent  {
  hasOrganization: any ;
  organisation : any ;
  users :any 
  constructor(private dialog : MatDialog , private authservice : AuthService){}
  async ngOnInit() {
    try {
      const response = await this.authservice.getOrganisation().toPromise();
      this.organisation = response[0];
      if (this.organisation) {
        this.hasOrganization = true;
        this.authservice.getusers().subscribe(response => {this.users = response })
      } else {
        console.log(this.organisation);
        this.hasOrganization = false;
      }
    } catch (error) {
      console.log('Error:', error);
    }
  }
  
  invitation(){
    const dialogRef = this.dialog.open(InvitationsComponent, {
      width: '600px',
     
    });
    
  }
  requests(){
    const dialogRef = this.dialog.open(UserRequestsComponent, {
      width: '600px',
     
    });
    
  }
  joinCompany(){
    const dialogRef = this.dialog.open(AddOrganisationComponent, {
    width: '500px',
   
  });
  dialogRef.afterClosed().subscribe(result => {
    const fromdata = new FormData() ; 
    
    this.authservice.joincompany(fromdata).subscribe(response => {console.log(response)});
  });}
  createCompany(){

    const dialogRef = this.dialog.open(CreateOrganisationComponent, {
      width: '500px',
     
    });

    dialogRef.afterClosed().subscribe(result => {
     
      window.location.reload()
    });
  }

}

