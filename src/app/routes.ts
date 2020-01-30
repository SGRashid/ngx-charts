import { Routes } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {NotFound404Component} from './not-found404/not-found404.component';

export const allAppRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFound404Component }
];
