import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Details } from './features/details/details';

export const routes: Routes = [
    {path: '', component: Home, title: 'Homepage'},
    {path: 'details/:id', component: Details, title: 'Home Details'},
];