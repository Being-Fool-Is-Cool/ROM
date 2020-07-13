import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectModule } from 'ng2-select';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { waiterRouting } from './waiter.routing';
import { WaiterDashboardComponent } from './waiter-dashboard/waiter-dashboard.component';

@NgModule({
  declarations: [WaiterDashboardComponent],
  imports: [
    CommonModule,
    SelectModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
    SharedModule,
    waiterRouting
  ]
})
export class WaiterModule { }
