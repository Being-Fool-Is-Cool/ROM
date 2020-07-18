import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './pages.routing';

import { LayoutModule } from '../shared/layout.module';
import { SharedModule } from '../shared/shared.module';

/* components */
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        SharedModule,
        routing,
        ReactiveFormsModule,
        HttpClientModule
    ],
    declarations: [
        PagesComponent,
        LoginComponent
    ]
})
export class PagesModule { }
