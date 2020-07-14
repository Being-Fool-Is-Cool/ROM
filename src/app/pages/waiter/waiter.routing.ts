import { Routes, RouterModule } from '@angular/router';
import { WaiterDashboardComponent } from './waiter-dashboard/waiter-dashboard.component';
import { TakeOrderComponent } from './take-order/take-order.component';


const childRoutes: Routes = [
    {
        path: 'waiter-dashboard',
        component: WaiterDashboardComponent
    },
    {
        path: 'take-order',
        component: TakeOrderComponent
    }
];

export const waiterRouting = RouterModule.forChild(childRoutes);
