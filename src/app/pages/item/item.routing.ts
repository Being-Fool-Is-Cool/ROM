import { Routes, RouterModule } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { OrderedItemComponent } from './ordered-item/ordered-item.component';
import { AddCategoryComponent } from './add-category/add-category.component';

const childRoutes: Routes = [
    {
        path: '',
        component: AddItemComponent
    },
    {
        path: 'order',
        component: OrderedItemComponent
    },
    {
        path: 'addItem',
        component: AddItemComponent
    },
    {
        path: 'addCategory',
        component: AddCategoryComponent
    }
];

export const itemRouting = RouterModule.forChild(childRoutes);
