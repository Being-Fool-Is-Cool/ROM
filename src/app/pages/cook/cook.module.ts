import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cookRouting } from './cook.routing';
import { CookDashboardComponent } from './cook-dashboard/cook-dashboard.component';

@NgModule({
  declarations: [CookDashboardComponent],
  imports: [
    CommonModule,
    cookRouting
  ]
})
export class CookModule { }
