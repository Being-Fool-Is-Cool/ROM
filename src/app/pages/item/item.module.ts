import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddItemComponent } from './add-item/add-item.component';
import { itemRouting } from './item.routing';
import { SelectModule } from 'ng2-select';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddItemComponent],
  imports: [
    CommonModule,
    SharedModule,
    SelectModule,
    itemRouting,
    ReactiveFormsModule
  ]
})
export class ItemModule { }
