import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillerDashboardComponent } from './biller-dashboard/biller-dashboard.component';
import { billerRouting } from './biller.routing';

@NgModule({
  declarations: [BillerDashboardComponent],
  imports: [
    CommonModule,
    billerRouting
  ]
})
export class BillerModule { }
