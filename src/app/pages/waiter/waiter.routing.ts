import { Routes, RouterModule } from '@angular/router';
import { WaiterDashboardComponent } from './waiter-dashboard/waiter-dashboard.component';


const childRoutes: Routes = [
    {
        path: 'waiter-dashboard',
        component: WaiterDashboardComponent
    }
];

export const waiterRouting = RouterModule.forChild(childRoutes);
