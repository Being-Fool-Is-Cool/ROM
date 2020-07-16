import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WaiterService } from '../waiter.service';

@Component({
  selector: 'app-waiter-dashboard',
  templateUrl: './waiter-dashboard.component.html',
  styleUrls: ['./waiter-dashboard.component.scss']
})
export class WaiterDashboardComponent implements OnInit {

  waiterForm: FormGroup;
  public tables: Array<any>;

  constructor(private fb: FormBuilder, private waiterService: WaiterService) { }

  ngOnInit() {
    this.initForm();
    this.getAllTables();
  }

  initForm() {
    this.waiterForm = this.fb.group({
      //
    });
  }

  getAllTables() {
    this.tables = ['Table1', 'Table2', 'Table3', 'Table4', 'Table5', 'Table6', 'Table7', 'Table8', 'Table1', 'Table2', 'Table3', 'Table4', 'Table5', 'Table6', 'Table7', 'Table8'];
  }

}
