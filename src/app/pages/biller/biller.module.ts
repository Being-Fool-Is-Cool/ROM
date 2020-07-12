import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectModule } from 'ng2-select';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { BillerDashboardComponent } from './biller-dashboard/biller-dashboard.component';
import { billerRouting } from './biller.routing';
import { OrderCheckoutComponent } from './order-checkout/order-checkout.component';

@NgModule({
  declarations: [BillerDashboardComponent, OrderCheckoutComponent],
  imports: [
    CommonModule,
    SharedModule,
    SelectModule,
    billerRouting,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class BillerModule { }
