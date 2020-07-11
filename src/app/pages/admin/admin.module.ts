import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { adminRouting } from './admin.routing';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [AdminDashboardComponent],
  imports: [
    CommonModule,
    adminRouting
  ]
})
export class AdminModule { }
