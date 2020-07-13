import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { AdminFunctionalityComponent } from './admin-functionality/admin-functionality.component';

const childRoutes: Routes = [
    {
        path: 'admin-dashboard',
        component: AdminDashboardComponent
    },
    {
        path: 'order-summary',
        component: OrderSummaryComponent
    },
    {
        path: 'admin-function',
        component: AdminFunctionalityComponent
    }
];

export const adminRouting = RouterModule.forChild(childRoutes);
