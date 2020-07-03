import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ordered-item',
  templateUrl: './ordered-item.component.html',
  styleUrls: ['./ordered-item.component.scss']
})
export class OrderedItemComponent implements OnInit {
  orderTableForm: FormGroup;
  constructor(private fb : FormBuilder) { }
  public tables: Array<string> = ['Table1', 'Table2', 'Table3', 'Table3'];
  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.orderTableForm = this.fb.group({
      tableName:[null,[Validators.required]],
    });
  }

  onSubmitClick(){
    let formData =this.orderTableForm.value;
    let addReq ={
      // name: formData.name,
      // category: formData.category,
      // quantity: formData.quantity,
      // cost: formData.cost
    };
    console.log("OrderedItemComponent Working");

  }

}
