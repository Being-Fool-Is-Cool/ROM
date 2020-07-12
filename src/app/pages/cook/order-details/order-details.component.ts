import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  orderDetailsForm: FormGroup;
  constructor(private fb: FormBuilder) { }
  public orderDetails: Array<any>;
  public status: Array<string> = ['Pending', 'Preparing', 'Prepared', 'Served'];
  public Pending: any = 'Pending';
  ngOnInit() {
    this.initForm();
    this.getOrderDetails();
  }
  
  initForm() {
    this.orderDetailsForm = this.fb.group({
      orderStatus: [null,[Validators.required]]
    });
  }

  getOrderDetails() {
    this.orderDetails = [
      { orderName: 'Order 1', itemName: 'Fish Cutlet curry', itemCost: 70, itemQuantity: '250gm', orderQuantity: 2, amount: 140},
      { orderName: 'Order 2', itemName: 'chicken curry', itemCost: 70, itemQuantity: '250gm', orderQuantity: 2, amount: 140}
    ];
  }

  onStatusChangeClick(){
    let formData =this.orderDetailsForm.value;
    let addReq ={
      orderStatus: formData.orderStatus
    };
    console.log(addReq);
    console.log('Status Changes');
  }

}
