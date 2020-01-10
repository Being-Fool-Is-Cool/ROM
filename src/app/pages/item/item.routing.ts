import { Routes, RouterModule } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';

const childRoutes: Routes = [
    {
        path: 'add',
        component: AddItemComponent
    }
];

export const itemRouting = RouterModule.forChild(childRoutes);