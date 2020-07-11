import { Routes, RouterModule } from '@angular/router';
import { AddItemComponent } from '../item/add-item/add-item.component';
import { CookDashboardComponent } from './cook-dashboard/cook-dashboard.component';

const childRoutes: Routes = [
    {
        path: 'cook-dashboard',
        component: CookDashboardComponent
    }
];

export const cookRouting = RouterModule.forChild(childRoutes);
