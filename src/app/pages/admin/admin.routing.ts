import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

const childRoutes: Routes = [
    {
        path: 'admin-dashboard',
        component: AdminDashboardComponent
    }
];

export const adminRouting = RouterModule.forChild(childRoutes);
