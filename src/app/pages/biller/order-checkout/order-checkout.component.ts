import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-order-checkout',
  templateUrl: './order-checkout.component.html',
  styleUrls: ['./order-checkout.component.scss']
})
export class OrderCheckoutComponent implements OnInit {

  orderCheckoutForm: FormGroup;

  constructor(private fb: FormBuilder) { }
  public orderDetails: Array<any>;
  public totalAmount: number;

  ngOnInit() {
    this.initForm();
    this.getOrderDetails();
  }

  initForm() {
    this.orderCheckoutForm = this.fb.group({
      //
    });
  }

  getOrderDetails() {
    this.orderDetails = [
      { orderName: 'Order 1', itemName: 'Fish Cutlet curry', itemCost: 70, itemQuantity: '250gm', orderQuantity: 2, amount: 140},
      { orderName: 'Order 2', itemName: 'chicken curry', itemCost: 70, itemQuantity: '250gm', orderQuantity: 2, amount: 140}
    ];
    this.totalAmount = 280;//sum of amount
  }

  onCheckoutClick() {
    console.log('Checkou Done');
  }

}
