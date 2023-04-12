import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.css']
})
export class AddDocumentComponent {
  form: FormGroup;
  files: File[] = [];

  constructor(private formBuilder: FormBuilder , private docservice : DocumentService , private dialogRef: MatDialogRef<AddDocumentComponent>) {
    this.form = this.formBuilder.group({
      title: '',
      description: '',
      privacy: '',
      type :''
    });
  }

  onSelect(event: any) {
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  onCancel(){
    this.dialogRef.close();

  }

   async onSubmit() {
    const file = this.files[0];
  
    const formdata = new FormData();
    formdata.append('title',this.form.get('title')?.value);
    formdata.append('description',this.form.get('description')?.value);
    formdata.append('privacy',this.form.get('privacy')?.value);
    formdata.append('typefile',this.form.get('type')?.value);
    formdata.append('fileDoc',file);
    formdata.append('owner','husammorbi@gmail.com');
    formdata.append('user_id','1');
  
    await this.docservice.add(formdata).toPromise();
    this.dialogRef.close();
    window.location.reload();
  
  }
}