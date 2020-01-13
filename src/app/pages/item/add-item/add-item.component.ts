import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ItemService} from '../../../shared/services/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
  providers: [ItemService]
})
export class AddItemComponent implements OnInit {
  addItemForm: FormGroup;
  public items: Array<string> = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona'];

  constructor(private formBuilder: FormBuilder, private itemService: ItemService) {

   }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.addItemForm = this.formBuilder.group({
      name:[null,[Validators.required]],
      category:[null,[Validators.required]],
      quantity:[null,[Validators.required]],
      cost: [null,[Validators.required]]
    });
  }

  onSubmitClick(){
    let formData =this.addItemForm.value;
    let addReq ={
      name: formData.name,
      category: formData.category,
      quantity: formData.quantity,
      cost: formData.cost
    };
    console.log(addReq);

  }


}
