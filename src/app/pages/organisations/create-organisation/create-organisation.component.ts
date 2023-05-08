import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { OrganisationService } from 'src/app/services/organisation.service';

@Component({
  selector: 'app-create-organisation',
  templateUrl: './create-organisation.component.html',
  styleUrls: ['./create-organisation.component.css']
})
export class CreateOrganisationComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private OrganisationService : OrganisationService, private dialogRef: MatDialogRef<CreateOrganisationComponent>) {
    this.form = this.formBuilder.group({
      name: '',
      description: '',

    });
  }
  onCancel(): void {
    this.dialogRef.close();
  }
  
  onSubmit(): void {
    if (this.form.valid) {
      const fromdata = new FormData();
      fromdata.append('name', this.form.value.name);
      fromdata.append('description', this.form.value.description);
      console.log(fromdata);
      this.OrganisationService.createOrganisation(fromdata).subscribe(response => {
        console.log(response);
        this.dialogRef.close();
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
  
}


