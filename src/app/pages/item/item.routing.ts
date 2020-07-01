import { Routes, RouterModule } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { OrderedItemComponent } from './ordered-item/ordered-item.component';

const childRoutes: Routes = [
    {
        path: '',
        component: AddItemComponent
    },
    {
        path: 'order',
        component: OrderedItemComponent
    }
];

export const itemRouting = RouterModule.forChild(childRoutes);
