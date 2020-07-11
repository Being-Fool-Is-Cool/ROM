import { Routes, RouterModule } from '@angular/router';
import { BillerDashboardComponent } from './biller-dashboard/biller-dashboard.component';

const childRoutes: Routes = [
    {
        path: 'biller-dashboard',
        component: BillerDashboardComponent
    }
];

export const billerRouting = RouterModule.forChild(childRoutes);
