import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddItemComponent } from './add-item/add-item.component';
import { itemRouting } from './item.routing';
import { SelectModule } from 'ng2-select';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AddItemComponent],
  imports: [
    CommonModule,
    SharedModule,
    SelectModule,
    itemRouting
  ]
})
export class ItemModule { }
