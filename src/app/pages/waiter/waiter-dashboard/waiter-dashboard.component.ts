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
  public tables: any = [];

  constructor(private fb: FormBuilder, private _waiterService: WaiterService) { }

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
    this._waiterService.getAllTableDetail().subscribe(
      data => {
        console.log(data);
        for (const table of (data as any)) {
          this.tables.push(table);
        }
        console.log(this.tables);
      }
    );
    console.log(this.tables);
  }

}
