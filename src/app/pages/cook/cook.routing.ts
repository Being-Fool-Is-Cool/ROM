import { Routes, RouterModule } from '@angular/router';
import { CookDashboardComponent } from './cook-dashboard/cook-dashboard.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

const childRoutes: Routes = [
    {
        path: 'cook-dashboard',
        component: CookDashboardComponent
    },
    {
        path: 'order-details',
        component: OrderDetailsComponent
    }
];

export const cookRouting = RouterModule.forChild(childRoutes);
