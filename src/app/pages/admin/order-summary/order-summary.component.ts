import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {

  orderSummaryForm: FormGroup;
  public orderDetails: Array<any>;
  constructor(private fb: FormBuilder) { }
  
  ngOnInit() {
    this.initForm();
    this.getOrderDetailsByTable('table 4');
  }

  initForm() {
    this.orderSummaryForm = this.fb.group({
      //
    });
  }

  getOrderDetailsByTable(tableNumber: any) {
    this.orderDetails = [
      { orderName: 'Order 1', itemName: 'Fish Cutlet curry', itemCost: 70, itemQuantity: '250gm', orderQuantity: 2, amount: 140},
      { orderName: 'Order 2', itemName: 'chicken curry', itemCost: 70, itemQuantity: '250gm', orderQuantity: 2, amount: 140}
    ];

  }

}
