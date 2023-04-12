import { Component } from '@angular/core';
import { FormBuilder , FormGroup} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-organisation',
  templateUrl: './add-organisation.component.html',
  styleUrls: ['./add-organisation.component.css']
})
export class AddOrganisationComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder , private authservice : AuthService, private dialogRef: MatDialogRef<AddOrganisationComponent>) {
    this.form = this.formBuilder.group({
      name: '',
      message: '',

    });
  }
  onCancel(): void {
    this.dialogRef.close();
  }
  
  onSubmit(): void {
    if (this.form.valid) {
      const fromdata = new FormData();
      fromdata.append('organisation', this.form.value.name);
      fromdata.append('message', this.form.value.message);
      console.log(fromdata);
      this.authservice.joincompany(fromdata).subscribe(response => {
        console.log(response);
        window.location.reload()
        this.dialogRef.close();
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
  
}
