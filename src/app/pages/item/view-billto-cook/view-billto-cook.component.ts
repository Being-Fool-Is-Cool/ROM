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
      { orderName: 'Order 1', itemName: 'Fish Cutlet curry', itemCost: 70, itemQuantity: '250gm', orderQuantity: 2, amount: 140},
      { orderName: 'Order 2', itemName: 'chicken curry', itemCost: 70, itemQuantity: '250gm', orderQuantity: 2, amount: 140}
    ];
  }

}
