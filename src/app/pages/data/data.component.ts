import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material';
import _moment from 'moment';
import { default as _rollupMoment } from 'moment';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { User } from "../edit/user_model";
import { USER_DATA } from "../edit/user_data";

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
  providers: [{ provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
  { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }]
})
export class DataComponent implements OnInit {


  pfForm: FormGroup;
  officeForm: FormGroup;
  today = new Date();
  date = new FormControl(moment());

  displayedColumns: string[] = ['id', 'name', 'sub', 'refund', 'arrear', 'from', 'to'];
  dataSource = new MatTableDataSource<User>(USER_DATA);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  constructor(private fb: FormBuilder) {
    this.pfForm = this.fb.group({
      date: [''], sub: [''], refund: [''], da: [''], from: [''], to: [''],
      datas: this.fb.array([])
    }),

      this.today.setDate(this.today.getDate());
  }

  addNew() {
    let control = <FormArray>this.pfForm.controls.datas;
    control.push(
      this.fb.group({
        date: [''], sub: [''], refund: [''], da: [''], from: [''], to: [''],
      })
    )
  }

  deleteadded(index: number) {
    let control = <FormArray>this.pfForm.controls.datas;
    control.removeAt(index)
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }



}
