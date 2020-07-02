import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  // addCategoryForm: FormGroup;
  // constructor(private fb : FormBuilder) { }
  // public tables: Array<string> = ['Table1', 'Table2', 'Table3', 'Table3'];
  ngOnInit() {
    // this.initForm();
  }

  // initForm(){
  //   this.addCategoryForm = this.fb.group({
  //     // tableName:[null,[Validators.required]],
  //   });
  // }

}
