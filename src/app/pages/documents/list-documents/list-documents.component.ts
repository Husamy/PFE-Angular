import { ChangeDetectorRef, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DocumentService } from 'src/app/services/document.service';
import { AddDocumentComponent } from '../add-document/add-document.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogSignComponent } from '../../dialog-sign/dialog-sign.component';
import { Document } from 'src/app/interfaces/document';
import { CertificateComponent } from '../../dialog/certificate/certificate.component';

@Component({
  selector: 'app-list-documents',
  templateUrl: './list-documents.component.html',
  styleUrls: ['./list-documents.component.css']
})
export class ListDocumentsComponent {
  constructor ( private snackbar : MatSnackBar , private dialog : MatDialog , private documentservice : DocumentService , private cdr: ChangeDetectorRef){}
  documents : Array<Document> = [] ;
  isEditing : any 
  ngOnInit(){
    this.documentservice.get().subscribe(response => {this.documents = response; console.log(response)})
  }
  delete(document:any){
    this.documentservice.delete(document.id).subscribe(response => {console.log(response)});
    // lahne lezmna enzydou request.status fil return emt3 request 
    this.ngOnInit();


  }
  showCertificate(document : Document){
    const dialogRef = this.dialog.open(CertificateComponent, {
      width: '500px' , 
      data : document ,
    });
  }
  validateSignature(){

  }
  expiration(){

  }
  openAddDocumentDialog() {
    
  const dialogRef = this.dialog.open(AddDocumentComponent, {
    width: '700px'
  });

  dialogRef.afterClosed().toPromise().then(() => {
    this.ngOnInit()
  });
}

  download(document:any){
    this.documentservice.download(document.id).subscribe(response => console.log(response));
  }

// fil add request lezmou itchecki kan el document deja aaleh request wala la

addrequest(document: any): void {
  const dialogRef = this.dialog.open(DialogSignComponent, {
    width: '400px',
    data: {
      message: `Are you sure you want to sign  ${document.title}?`,
      document_id : document.id
    },
  });
  dialogRef.afterClosed().subscribe(
    respone => { 
      this.ngOnInit();

    }
  )
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
