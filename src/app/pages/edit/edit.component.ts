import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { User } from "./user_model";
import { USER_DATA } from "./user_data";


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'desig', 'office', 'basic'];
  dataSource = new MatTableDataSource<User>(USER_DATA);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  updateUser(User) {
    this.dialog.open(UpdateuserComponent, {
      data: User
    }).afterClosed().subscribe((_User) => {

      if (_User) {

      }
    });
  }



}



