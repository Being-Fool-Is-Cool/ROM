import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// enum OrderStatus { Pending = 'pending', Preparing = 'preparing', Prepared = 'prepared', Served = 'served'}
enum OrderStatus { Pending , Preparing, Prepared, Served}

@Component({
  selector: 'app-cook-dashboard',
  templateUrl: './cook-dashboard.component.html',
  styleUrls: ['./cook-dashboard.component.scss']
})
export class CookDashboardComponent implements OnInit {

  cookDashboardForm: FormGroup;
  constructor(private fb: FormBuilder) { }
  public tables: Array<any>;
  public tableOrderDetails: Array<any>;
  public allTabledetails: Array<any>;
  orderStatus = OrderStatus;
  
  ngOnInit() {
    this.initForm();
    this.getAllTables();
    this.getAllTableDetails();
  }

  initForm() {
    this.cookDashboardForm = this.fb.group({
      tableNumber: [null, [Validators.required]]
    });
  }

  getAllTables() {
    this.tables = ['Table1', 'Table2', 'Table3', 'Table3'];
  }

  getAllTableDetails() {
    this.allTabledetails = [
      { tableNo: 'Table 1', orderName: 'Order 1', itemNames: 'Fish Cutlet curry',  amount: 140, itemQuantity: 'Half', status: 'PENDING'},
      { tableNo: 'Table 5', orderName: 'Order 2', itemNames: 'chicken curry', amount: 140, itemQuantity: 'Quart', status: 'PENDING'}
    ];
  }

  getDetailsByTableNo() {
    this.tableOrderDetails = [
      {}
    ]
  }

}
