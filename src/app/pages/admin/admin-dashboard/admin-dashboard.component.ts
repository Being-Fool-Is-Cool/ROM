import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  adminForm: FormGroup;
  constructor(private fb: FormBuilder) { }
  public tables: Array<string>;
  ngOnInit() {
    this.initForm();
    this.getAllTables();
  }

  initForm() {
    this.adminForm = this.fb.group({
      //
    });
  }

  getAllTables() {
    this.tables = ['Table1', 'Table2', 'Table3', 'Table4', 'Table5', 'Table6', 'Table7', 'Table8', 'Table1', 'Table2', 'Table3', 'Table4', 'Table5', 'Table6', 'Table7', 'Table8'];
  }

}
