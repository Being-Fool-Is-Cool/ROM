import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-admin-functionality',
  templateUrl: './admin-functionality.component.html',
  styleUrls: ['./admin-functionality.component.scss']
})
export class AdminFunctionalityComponent implements OnInit {

  adminFunctionForm: FormGroup;
  public adminAccess: Array<any>;
  public category: Array<any>;
  public tables: Array<any>;
  constructor(private fb: FormBuilder) { }
  public items: Array<any> = [
    
  ];
  public value: any = {};
  public _disabledV: string = '0';
  public disabled: boolean = false;

  public refreshValue(value: any): void {
    this.value = value;
  }

  ngOnInit() {
    this.initForm();
    this.initApiCall();
  }

  initApiCall() {
    this.getAdminAccess();
    this.getAllCategory();
    this.getAllTable();
  }
  initForm() {
    this.adminFunctionForm = this.fb.group({
      category: [null],
      table: [null]
    });
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
    this.category = [
      { id: 1, text: 'BreakFast' },
      { id: 2, text: 'Lunch' },
      { id: 3, text: 'Dinner' },
      { id: 4, text: 'Snacks' },
      { id: 5, text: 'Bevrages' },
      { id: 6, text: 'Deserts' }
      ];

  }

  onAddCategoryClick(category: any) {
    let formData =this.adminFunctionForm.value;
    let addReq ={
      category: formData.table
    };
    console.log(addReq);
    swal({
      type: 'success',
      title: 'Success!',
      text: 'close it!',
    });
  }

  onDeleteCategoryClick(category: any) {
    let formData =this.adminFunctionForm.value;
    let addReq ={
      category: formData.category
    };
    console.log(addReq);
    swal({
      type: 'success',
      title: 'Success!',
      text: 'close it!',
    });
  }
  // Catergory related api end

  //Table related api start

  getAllTable() {
    this.tables = [
      { id: 1, text: 'Table 1' },
      { id: 2, text: 'Table 2' },
      { id: 3, text: 'Table 3' },
      { id: 4, text: 'Table 4' },
      { id: 5, text: 'Table 5' },
      { id: 6, text: 'Table 6' }
      ];

  }

  onAddTableClick(table: any) {
    let formData =this.adminFunctionForm.value;
    let addReq ={
      category: formData.table
    };
    console.log('Added Table: ', addReq);
    swal({
      type: 'success',
      title: 'Success!',
      text: 'close it!',
    });
  }

  onDeleteTableClick(table: any) {
    let formData =this.adminFunctionForm.value;
    let addReq ={
      category: formData.table
    };
    console.log('Deleted Table ',addReq);
    swal({
      type: 'success',
      title: 'Success!',
      text: 'close it!',
    });
  }
  //Table related api end

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

}
