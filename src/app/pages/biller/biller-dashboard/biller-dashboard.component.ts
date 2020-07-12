import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-biller-dashboard',
  templateUrl: './biller-dashboard.component.html',
  styleUrls: ['./biller-dashboard.component.scss']
})
export class BillerDashboardComponent implements OnInit {

  billerDashboardForm: FormGroup;
  public allTabledetails: Array<any>;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
    this.getAllTableDetails();
  }
  
  initForm() {
    this.billerDashboardForm = this.fb.group({
      //
    });
  }

  getAllTableDetails() {
    this.allTabledetails = [
      { tableNo: 'Table 1', orderName: 'Order 1', itemNames: 'Fish Cutlet curry',  amount: 140, itemQuantity: 'Half', status: 'PENDING'},
      { tableNo: 'Table 5', orderName: 'Order 2', itemNames: 'chicken curry', amount: 140, itemQuantity: 'Quart', status: 'PENDING'}
    ];
  }

}
