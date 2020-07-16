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
  constructor(private fb: FormBuilder, private adminService: AdminService) { }
  public tables: Array<string>;
  public orderDetails: Array<any>;
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
    this.tables = ['Table1', 'Table2', 'Table3', 'Table4', 'Table5', 'Table6', 'Table7', 'Table8', 'Table1', 'Table2', 'Table3', 'Table4', 'Table5', 'Table6', 'Table7', 'Table8'];
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
