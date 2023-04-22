import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { from } from 'rxjs';
import { DocumentService } from 'src/app/services/document.service';
import { AddDocumentComponent } from '../add-document/add-document.component';
import { DialogSignComponent } from '../../dialog-sign/dialog-sign.component';

@Component({
  selector: 'app-list-documents',
  templateUrl: './list-documents.component.html',
  styleUrls: ['./list-documents.component.css']
})
export class ListDocumentsComponent {
  constructor (private dialog : MatDialog , private documentservice : DocumentService ){}
  documents : any ;
  isEditing : any 
  ngOnInit(){
    this.documentservice.get().subscribe(response => {this.documents = response; console.log(response)})
  }
  delete(document:any){
    this.documentservice.delete(document.id).subscribe(response => console.log(response))

  }
  openAddDocumentDialog() {
    const dialogRef = this.dialog.open(AddDocumentComponent,{
      width:'700px'});
  }
  download(document:any){
    this.documentservice.download(document.id).subscribe(response => console.log(response));
  }


addrequest(document: any): void {
  const dialogRef = this.dialog.open(DialogSignComponent, {
    width: '400px',
    data: {
      message: `Are you sure you want to sign  ${document.title}?`,
    },
  });
  dialogRef.afterClosed().subscribe(result => {
    const fromdata = new FormData() ; 
    fromdata.append('document_id',document.id);
    this.documentservice.addrequest(fromdata).subscribe(response => {console.log(response)});
  });
}

toggleEditMode(document: Document) {
  this.isEditing = true
}
  save(document: any): void {
    const formdata = new FormData();
    formdata.append('privacy',document.privacy)
    formdata.append('description',document.description)
    this.documentservice.update(formdata,document.id).subscribe( response => {
      console.log(response)
    })
  }
  
  cancelEdit(document: any): void {
  // handle canceling of document editing here
  }

}
