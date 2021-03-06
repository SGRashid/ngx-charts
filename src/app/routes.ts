import { Routes } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {NotFound404Component} from './not-found404/not-found404.component';
import {SettingsComponent} from './settings/settings.component';
import {ResultComponent} from './result/result.component';
import {CanvasChartComponent} from './canvas-chart/canvas-chart.component';

export const allAppRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'result', component: ResultComponent},
  { path: 'canvas', component: CanvasChartComponent},
  { path: '**', component: NotFound404Component }
];
