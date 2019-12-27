import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  choice: string;
  options: string[] = ['Office', 'PF Number'];


  pfForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.pfForm = this.fb.group({
      month: [''], sub: [''], refund: [''], da: [''],
      datas: this.fb.array([])

    })
  }

  addNewMonth() {
    let control = <FormArray>this.pfForm.controls.datas;
    control.push(
      this.fb.group({
        month: [''], sub: [''], refund: [''], da: [''],
      })
    )
  }

  deleteMonth(index) {
    let control = <FormArray>this.pfForm.controls.datas;
    control.removeAt(index)
  }



  ngOnInit() {
  }

}
