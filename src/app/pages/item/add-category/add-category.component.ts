import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  addCategoryForm: FormGroup;
  constructor(private fb : FormBuilder) { }
  public category: Array<string> = ['Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Drinks'];

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.addCategoryForm = this.fb.group({
      category:[null,[Validators.required]]
    });
  }

  onSubmitClick(){
    let formData =this.addCategoryForm.value;
    let addReq ={
      category: formData.category
    };
    console.log(addReq);

  }

}
