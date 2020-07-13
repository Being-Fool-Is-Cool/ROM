import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectModule } from 'ng2-select';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalModule } from 'ngx-modal';

import { adminRouting } from './admin.routing';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { AdminFunctionalityComponent } from './admin-functionality/admin-functionality.component';

@NgModule({
  declarations: [AdminDashboardComponent, OrderSummaryComponent, AdminFunctionalityComponent],
  imports: [
    CommonModule,
    SelectModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
    SharedModule,
    adminRouting,
    ModalModule
  ]
})
export class AdminModule { }
