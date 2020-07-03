import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-billto-cook',
  templateUrl: './view-billto-cook.component.html',
  styleUrls: ['./view-billto-cook.component.scss']
})
export class ViewBilltoCookComponent implements OnInit {

  viewBillToCookForm: FormGroup;
  constructor(private fb : FormBuilder) { }
  public tables: Array<string> = ['Table1', 'Table2', 'Table3', 'Table3'];
  public default_data: Array<any>;
  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.viewBillToCookForm = this.fb.group({
      tableNumber: [null,[Validators.required]]
    });
  }

  onSubmitClick(){
    let formData =this.viewBillToCookForm.value;
    let addReq ={
      tableNumber: formData.tableNumber
      // category: formData.category,
      // quantity: formData.quantity,
      // cost: formData.cost
    };
    console.log("ViewBilltoCookComponent Working: ");
    console.log(addReq);
    this.setBillToData();
  }

  setBillToData() {
    this.default_data = [
      // { first_name: 'Steve', last_name: 'Jobs', user_name: '@steve' },
      // { first_name: 'Simon', last_name: 'Philips', user_name: '@simon' },
      // { first_name: 'Jane', last_name: 'Doe', user_name: '@jane' },
      // { first_name: 'Larry', last_name: 'Thornton', user_name: '@larry' },
      // { first_name: 'Hiver', last_name: 'Choe', user_name: '@hiver' },
      { orderName: 'Fish Cutlet', itemName: 'Fish Cutlet curry', itemCost: 70, itemQuantity: '250gm', orderQuantity: 2, amount: 140},
      { orderName: 'Chicken', itemName: 'chicken curry', itemCost: 70, itemQuantity: '250gm', orderQuantity: 2, amount: 140}
    ];
  }

}
