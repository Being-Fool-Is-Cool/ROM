import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CookService } from '../cook.service';

// enum OrderStatus { Pending = 'pending', Preparing = 'preparing', Prepared = 'prepared', Served = 'served'}
enum OrderStatus { Pending , Preparing, Prepared, Served}

@Component({
  selector: 'app-cook-dashboard',
  templateUrl: './cook-dashboard.component.html',
  styleUrls: ['./cook-dashboard.component.scss']
})
export class CookDashboardComponent implements OnInit {

  cookDashboardForm: FormGroup;
  public allTabledetails: Array<any> = [];
  orderStatus = OrderStatus;

  constructor(private fb: FormBuilder, private _cookService: CookService) { }
  
  ngOnInit() {
    // this.initForm();
    this.getAllTableDetails();
  }

  initForm() {
    this.cookDashboardForm = this.fb.group({
      // tableNumber: [null, [Validators.required]]
    });
  }

  getAllTableDetails() {
    // this.allTabledetails = [
    //   { tableNo: 'Table 1', orderName: 'Order 1', itemNames: 'Fish Cutlet curry',  amount: 140, itemQuantity: 'Half', status: 'PENDING'},
    //   { tableNo: 'Table 5', orderName: 'Order 2', itemNames: 'chicken curry', amount: 140, itemQuantity: 'Quart', status: 'PENDING'}
    // ];

    this._cookService.getAllOrders().subscribe(
      data => {
        for (const cat of (data as any)) {
          this.allTabledetails.push(cat);
        }
        console.log(this.allTabledetails);
      }
    )
  }
  
}