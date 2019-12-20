import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from "../user_model";

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  static id = 100;

  form: FormGroup;
  mode: 'update'

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<UpdateuserComponent>,
    private fb: FormBuilder) {

  }

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as User;
    }

    this.form = this.fb.group({
      id: [UpdateuserComponent.id++],
      name: [this.defaults.name || '',],
      desig: [this.defaults.desig || ''],
      office: this.defaults.office || '',
      basic: this.defaults.basic || '',
    });
  }

  update() {
    const User = this.form.value;
    User.id = this.defaults.id;

    this.dialogRef.close(User);
  }

}
