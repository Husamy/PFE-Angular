import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DocumentService } from 'src/app/services/document.service';
import { ConfirmDeleteComponent } from '../dialog/confirm-delete/confirm-delete.component';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent {
  requests :any ; 
  constructor(public dialog: MatDialog , private documentservice : DocumentService) {}
  ngOnInit(){
    this.documentservice.getrequests().subscribe(response => {this.requests = response, console.log(response)} )
  }
  

  getStatusClass(status: any): string | undefined {
    switch (status) {
      case 'Active':
        return 'badge badge-success rounded-pill d-inline';
      case 'Onboarding':
        return 'badge badge-primary rounded-pill d-inline';
      case 'Awaiting':
        return 'badge badge-warning rounded-pill d-inline';
      default:
        return undefined;
    }
  }

 
  confirmDelete(request: any): void {
    const dialogRef = this.dialog.open(ConfirmDeleteComponent, {
      width: '400px',
      data: {
        request : request,
        id : request.id,
        message: `Are you sure you want to delete ${request.id}?`,
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      window.location.reload();
    });
}
}