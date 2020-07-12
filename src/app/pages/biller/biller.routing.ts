import { Routes, RouterModule } from '@angular/router';
import { BillerDashboardComponent } from './biller-dashboard/biller-dashboard.component';
import { OrderCheckoutComponent } from './order-checkout/order-checkout.component';

const childRoutes: Routes = [
    {
        path: 'biller-dashboard',
        component: BillerDashboardComponent
    },
    {
        path: 'order-checkout',
        component: OrderCheckoutComponent
    }
];

export const billerRouting = RouterModule.forChild(childRoutes);
