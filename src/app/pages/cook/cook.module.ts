import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectModule } from 'ng2-select';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { cookRouting } from './cook.routing';
import { CookDashboardComponent } from './cook-dashboard/cook-dashboard.component';

@NgModule({
  declarations: [CookDashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    SelectModule,
    cookRouting,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class CookModule { }
