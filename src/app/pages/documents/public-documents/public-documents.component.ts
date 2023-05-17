import { Document } from 'src/app/interfaces/document';
import { DocumentService } from './../../../services/document.service';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-public-documents',
  templateUrl: './public-documents.component.html',
  styleUrls: ['./public-documents.component.css']
})
export class PublicDocumentsComponent {
  documents !: Document[]  

  constructor(private DocumentService : DocumentService , private SnackBar : MatSnackBar  ) {
    this.DocumentService.get().subscribe(response => {
      console.log('response');
        this.documents = response;
      });
   }

download(document:any){
this.DocumentService.download(document.id).subscribe(response => {
})
}
}
