import { Component , Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-sign',
  templateUrl: './dialog-sign.component.html',
  styleUrls: ['./dialog-sign.component.css']
})
export class DialogSignComponent {
  form !: FormGroup 
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private FormBuilder : FormBuilder) {
    this.form = this.FormBuilder.group({
      common: '',
    });
  }
  onSubmit() {
    console.log(this.form.value)
  }
}
  

