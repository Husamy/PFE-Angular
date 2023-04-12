import { Component } from '@angular/core';

@Component({
  selector: 'app-public-documents',
  templateUrl: './public-documents.component.html',
  styleUrls: ['./public-documents.component.css']
})
export class PublicDocumentsComponent {
  documents= [
    {
      title: "Document 1",
      description :"Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.",
      type: "pdf",
      privacy: "Public",
      owner: "John Doe",
      image: "https://via.placeholder.com/350x150",
    },
    {
      title: "Document 2",
      description :"Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.",
      type: "xml",
      privacy: "Private",
      owner: "Jane Doe",
      image: "https://via.placeholder.com/350x150",
    },
    {
      title: "Document 3",
      description :"Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.",
      type: "pdf",
      privacy: "Public",
      owner: "Bob Smith",
      image: "https://via.placeholder.com/350x150",
    },
    {
      title: "Document 3",
      description :"Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.",
      type: "xml",
      privacy: "Public",
      owner: "Bob Smith",
      image: "https://via.placeholder.com/350x150",
    },
    {
      title: "Document 3",
      description :"Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.",
      type: "xml",
      privacy: "Public",
      owner: "Bob Smith",
      image: "https://via.placeholder.com/350x150",
    },
    {
      title: "Document 3",
      description :"Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.",
      type: "xml",
      privacy: "Public",
      owner: "Bob Smith",
      image: "https://via.placeholder.com/350x150",
    }
  ];
  deleteDocument(document:any){}
  contactOwner(document:any){}
}
