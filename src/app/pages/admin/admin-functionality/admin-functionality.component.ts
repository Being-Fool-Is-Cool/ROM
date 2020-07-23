import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-functionality',
  templateUrl: './admin-functionality.component.html',
  styleUrls: ['./admin-functionality.component.scss']
})
export class AdminFunctionalityComponent implements OnInit {

  adminFunctionForm: FormGroup;
  addUserForm: FormGroup;
  public adminAccess: Array<any>;
  public category:  any = [];
  public tables: any = [];
  public items: Array<any>;
  public itemsForCategory: Array<any>;
  public userGender: any;
  public users: Array<any>;

  constructor(private fb: FormBuilder, private _adminService: AdminService) {
    this.category = new Array();
    this.tables = new Array();
   }

  public value: any = {};
  public _disabledV: string = '0';
  public disabled: boolean = false;

  ngOnInit() {
    this.initApiCall();
    this.userGender = "male";
    this.initForm();
  }

  initApiCall() {
    this.getAdminAccess();
    this.getAllCategory();
    this.getAllTable();
    this.getAllUser();
  }
  initForm() {
    this.adminFunctionForm = this.fb.group({
      category: [null],
      table: [null],
      item: [null],
      name: [null],
      surname: [null],
      email: [null],
      password: [null],
      address: [null],
      rpassword: [null],
      user: [null]
    });

    this.addUserForm = this.fb.group({

    })
  }

  getAdminAccess() {
    this.adminAccess = [
      { id: 'addCat', text: 'Add Category', modal: 'addCat' },
      { id: 'delCat', text: 'Delete Category' },
      { id: 'addUser', text: 'Add User' },
      { id: 'delUser', text: 'Delete User' },
      { id: 'addTab', text: 'Add Table' },
      { id: 'delTab', text: 'Delete Table' },
      { id: 'addItem', text: 'Add Item' },
      { id: 'delItem', text: 'Delete Item' }
    ];
  }
  // Catergory related api start
  getAllCategory() {
    // this.category = [
    //   { id: 1, text: 'BreakFast' },
    //   { id: 2, text: 'Lunch' },
    //   { id: 3, text: 'Dinner' },
    //   { id: 4, text: 'Snacks' },
    //   { id: 5, text: 'Bevrages' },
    //   { id: 6, text: 'Deserts' }
    // ];
    // this.category.push({ id: 8, text: 'Amrita' })
    console.log(this.category[4]);
    this._adminService.getAllCategory().subscribe(
      data => {
        this.category = data;
        // for (const cat of (data as any)) {
        //   this.category.push(cat);
        // }
        console.log(this.category);
      }
    ); 
  }

  onAddCategoryClick(modal) {
    let formData = this.adminFunctionForm.value;
    let addReq = {
      category: formData.category
    };
    console.log(addReq);
    swal({
      type: 'success',
      title: 'Success!',
      text: 'close it!',
    });
    this.closeModal(modal);
  }

  onDeleteCategoryClick(modal) {
    let formData = this.adminFunctionForm.value;
    let addReq = {
      category: formData.category
    };
    console.log('Deleted Category ', addReq);
    swal({
      type: 'success',
      title: 'Success!',
      text: 'close it!',
    });
    this.closeModal(modal);
  }

  onCategorySelectvalue(value: any): void {
    console.log(value);
  }
  // Catergory related api end

  //Items related api Start
  getItemsForCategory(category: any) {
    this.items = [
      { id: 1, text: 'Fish Curry' },
      { id: 2, text: 'Paneer curry' },
      { id: 3, text: 'Veg Manchurian' },
      { id: 4, text: 'Egg Curry' },
      { id: 5, text: 'Mushroom royal' },
      { id: 6, text: 'Paneer Do Pyaza' }
    ];
    console.log(category);
    console.log(this.items);
  }

  onAddItemClick(modal) {
    let formData = this.adminFunctionForm.value;
    let addReq = {
      category: formData.category,
      item: formData.item
    };
    console.log(addReq);
    swal({
      type: 'success',
      title: 'Success!',
      text: 'close it!',
    });
    this.closeModal(modal);
  }

  public categorySelected(value: any): void {
    console.log('Selected value is: ', value);
    this.getItemsForCategory(value);
  }

  onDeleteItemClick(modal) {
    let formData = this.adminFunctionForm.value;
    let addReq = {
      category: formData.category,
      item: formData.item
    };
    console.log(addReq);
    swal({
      type: 'success',
      title: 'Success!',
      text: 'close it!',
    });
    this.closeModal(modal);
  }
  //Items related api end

  //Table related api start

  getAllTable() {
    this._adminService.getAllTableDetail().subscribe(
      data => {
        this.tables = data;
        console.log(this.tables);
      }
    );
    console.log(this.tables);

  }

  onAddTableClick(modal) {
    let formData = this.adminFunctionForm.value;
    let addReq = {
      category: formData.table
    };
    console.log('Added Table: ', addReq);
    swal({
      type: 'success',
      title: 'Success!',
      text: 'close it!',
    });
    this.closeModal(modal);
  }

  onDeleteTableClick(modal) {
    let formData = this.adminFunctionForm.value;
    let addReq = {
      table: formData.table
    };
    console.log('Deleted Table ', addReq);
    swal({
      type: 'success',
      title: 'Success!',
      text: 'close it!',
    });
    this.closeModal(modal);
  }

  onTableSelect(value: any): void {
    console.log(value);
  }
  //Table related api end

  // User related api start
  getAllUser() {
    this.users = [
      { id: 1, text: 'User 1' },
      { id: 2, text: 'User 2' },
      { id: 3, text: 'User 3' },
      { id: 4, text: 'User 4' },
      { id: 5, text: 'User 5' },
      { id: 6, text: 'User 6' }
    ];

  }

  onAddUserClick(modal) {
    let formData = this.adminFunctionForm.value;
    let addReq = {
      name: formData.name,
      surname: formData.surname,
      email: formData.email,
      password: formData.password,
      address: formData.address,
      rpassword: formData.rpassword,
      gender: this.userGender
    };
    console.log(addReq);
    swal({
      type: 'success',
      title: 'Success!',
      text: 'close it!',
    });
    this.closeModal(modal);
  }

  onDeleteUserClick(modal) {
    let formData = this.adminFunctionForm.value;
    let addReq = {
      user: formData.user
    };
    console.log(addReq);
    swal({
      type: 'success',
      title: 'Success!',
      text: 'close it!',
    });
    this.closeModal(modal);
  }
  // User related api end

  // Modal related call start
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
  // Modal related call end

  //ng-select methods start
  public selected(value: any): void {
    console.log('Selected value is: ', value);
  }

  public removed(value: any): void {
    console.log('Removed value is: ', value);
  }

  public refreshValue(value: any): void {
    this.value = value;
  }
  //ng-select method end

  onItemChange(value) {
    this.userGender = value
    console.log(this.userGender);
  }
}
