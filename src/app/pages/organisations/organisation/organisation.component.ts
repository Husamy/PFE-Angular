import { MatSidenavModule } from '@angular/material/sidenav';
import { UserRequestsComponent } from './../../user-requests/user-requests.component';
import { InvitationsComponent } from './../../invitations/invitations.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { AddOrganisationComponent } from '../add-organisation/add-organisation.component';
import { CreateOrganisationComponent } from '../create-organisation/create-organisation.component';
import { UserdataService } from 'src/app/userdata.service';

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.css']
})
export class OrganisationComponent  {
  hasOrganization: any ;
  organisation : any ;
  users :any 
  userinfo : any 
  constructor(private dialog : MatDialog , private authservice : AuthService , private user : UserdataService){}
  async ngOnInit() {
    try {
      const response = await this.authservice.getOrganisation().toPromise();
      this.organisation = response[0];
      console.log(this.organisation)
      if (this.organisation) {
        this.hasOrganization = true;
        console.log(this.hasOrganization)
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
      data :{
        admin : false 
      }
     
    });
    
  }
  requests(){
    const dialogRef = this.dialog.open(UserRequestsComponent, {
      width: '600px',
      data : { 
        admin : false 

      }
     
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
   isAdminDisabled() {
    this.user.getSharedUserData().subscribe(
      userdata => {  this.userinfo = userdata;
      }
    ); 
    
    if (this.userinfo && this.userinfo.length > 0 && this.userinfo[0].email === this.organisation.owner) {
      console.log(false)  
      return false;
    } else {
      console.log(false)
      return true;
    }
  }
  
  

}

