import { Document } from 'src/app/interfaces/document';
import { DocumentService } from './../../../services/document.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-public-documents',
  templateUrl: './public-documents.component.html',
  styleUrls: ['./public-documents.component.css']
})
export class PublicDocumentsComponent {
  documents !: Document[]  

  constructor(private DocumentService : DocumentService  ) {
    this.DocumentService.get().subscribe(response => {
      console.log('response');
        this.documents = response;
      });
   }

delete(document:any){
}
}
