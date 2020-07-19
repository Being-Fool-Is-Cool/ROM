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
  public category: any = [];
  public orderDetails: Array<any>;
  public classCondition: Boolean = false;
  ngOnInit() {
    this.initForm();
    this.getAllTables();
    this.getAllCategory();
  }

  initForm() {
    this.adminForm = this.fb.group({
      // table: [null]
    });
  }

  getAllCategory() {
    this.category = [
      { id: 1, text: 'BreakFast' },
      { id: 2, text: 'Lunch' },
      { id: 3, text: 'Dinner' },
      { id: 4, text: 'Snacks' },
      { id: 5, text: 'Bevrages' },
      { id: 6, text: 'Deserts' }
    ];
    this.category.push({ id: 8, text: 'Amrita' })
    // console.log(this.category[4]);
    // this._adminService.getAllCategory().subscribe(
    //   data => {
    //     // this.category = data;
    //     for (const cat of (data as any)) {
    //       this.category.push(cat);
    //     }
    //     console.log(this.category);
    //   }
    // ); 
  }

  getOrderDetailsByTable(tableId: any) {
    console.log(tableId);
    this.orderDetails = [
      { orderName: 'Order 1', itemName: 'Fish Cutlet curry', itemCost: 70, itemQuantity: '250gm', orderQuantity: 2, amount: 140},
      { orderName: 'Order 2', itemName: 'chicken curry', itemCost: 70, itemQuantity: '250gm', orderQuantity: 2, amount: 140}
    ];
    // this._adminService.getOrderByTable(tableId).subscribe( data => {
    //   console.log(data);
    // })

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

  openModal(modal, table: any) {
    this.getOrderDetailsByTable(table.tableId);
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
