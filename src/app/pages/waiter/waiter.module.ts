import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { waiterRouting } from './waiter.routing';
import { WaiterDashboardComponent } from './waiter-dashboard/waiter-dashboard.component';

@NgModule({
  declarations: [WaiterDashboardComponent],
  imports: [
    CommonModule,
    waiterRouting
  ]
})
export class WaiterModule { }
