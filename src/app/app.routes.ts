import { Routes } from '@angular/router';
import { MassagesComponent } from './massages/massages.component';
import { MainComponent } from './main/main.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    {title:"Masszázsok", path:"masszazsok", component:MassagesComponent},
    {title:"Pirinyó masszázs", path:"index", component:MainComponent},
    {path: '', redirectTo: '/index', pathMatch: 'full' },
    {path: '**', component:ErrorComponent}
];
