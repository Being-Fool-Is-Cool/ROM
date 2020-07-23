import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalModule } from 'ngx-modal';
import { NgSelectModule} from '@ng-select/ng-select';

import { adminRouting } from './admin.routing';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminFunctionalityComponent } from './admin-functionality/admin-functionality.component';
import { SalesHistoryComponent } from './sales-history/sales-history.component';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [AdminDashboardComponent, AdminFunctionalityComponent, SalesHistoryComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
    SharedModule,
    adminRouting,
    NgxEchartsModule,
    ModalModule,
    NgSelectModule
  ]
})
export class AdminModule { }
