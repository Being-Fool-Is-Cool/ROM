import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import swal from 'sweetalert2';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  adminForm: FormGroup;
  constructor(private fb: FormBuilder, private _adminService: AdminService) { }
  public tables: any = [];
  public orderDetails: Array<any>;
  public classCondition: Boolean = false;
  ngOnInit() {
    this.initForm();
    this.getAllTables();
    this.getOrderDetailsByTable('Table 1');
  }

  initForm() {
    this.adminForm = this.fb.group({
      //
    });
  }

  getOrderDetailsByTable(tableNumber: any) {
    this.orderDetails = [
      { orderName: 'Order 1', itemName: 'Fish Cutlet curry', itemCost: 70, itemQuantity: '250gm', orderQuantity: 2, amount: 140},
      { orderName: 'Order 2', itemName: 'chicken curry', itemCost: 70, itemQuantity: '250gm', orderQuantity: 2, amount: 140}
    ];

  }

  getAllTables() {
    this._adminService.getAllTableDetail().subscribe(
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

  openModal(modal) {
    modal.open();
  }

  closeModal(modal) {
    modal.close();
  }

  onSuccess() {
    swal({
      type: 'success',
      title: 'Success!',
      text: 'close it!',
    });
  }

}
