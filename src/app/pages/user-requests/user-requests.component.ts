import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-requests',
  templateUrl: './user-requests.component.html',
  styleUrls: ['./user-requests.component.css']
})
export class UserRequestsComponent {
  requests : any ;
  constructor(private AuthService : AuthService , private DialogRef : MatDialogRef<UserRequestsComponent> ){}
  ngOnInit(){
    this.AuthService.getrequests().subscribe(response => { this.requests = response ; console.log(response)}) ;
  }
  Accept(request:any){
    
    this.AuthService.acceptRequest(request.id).subscribe( response => { 
      console.log();
      this.DialogRef.close();

    })
  }
  Delete(request:any){
    this.AuthService.deleterequest(request.id).subscribe( response => { 
      console.log();
      this.DialogRef.close();

  })

}
}
