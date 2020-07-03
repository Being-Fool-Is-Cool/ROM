import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddItemComponent } from './add-item/add-item.component';
import { itemRouting } from './item.routing';
import { SelectModule } from 'ng2-select';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OrderedItemComponent } from './ordered-item/ordered-item.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ViewBilltoCookComponent } from './view-billto-cook/view-billto-cook.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [AddItemComponent, OrderedItemComponent, AddCategoryComponent, ViewBilltoCookComponent],
  imports: [
    CommonModule,
    SharedModule,
    SelectModule,
    itemRouting,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class ItemModule { }
