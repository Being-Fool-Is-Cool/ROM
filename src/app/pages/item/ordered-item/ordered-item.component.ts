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

}
