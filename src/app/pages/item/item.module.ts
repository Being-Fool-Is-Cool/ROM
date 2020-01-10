import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddItemComponent } from './add-item/add-item.component';
import { itemRouting } from './item.routing';

@NgModule({
  declarations: [AddItemComponent],
  imports: [
    CommonModule,
    itemRouting
  ]
})
export class ItemModule { }
