import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {allAppRoutes} from './routes';
import {FormsModule} from '@angular/forms';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ChartsComponent } from './charts/charts.component';
import { HomeComponent } from './home/home.component';
import { VerticalBarChartComponent } from './vertical-bar-chart/vertical-bar-chart.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { NotFound404Component } from './not-found404/not-found404.component';
import { SettingsComponent } from './settings/settings.component';
import {ChartsDataService} from './charts-data.service';
import { ResultComponent } from './result/result.component';
import { CanvasChartComponent } from './canvas-chart/canvas-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    HomeComponent,
    VerticalBarChartComponent,
    MenuComponent,
    AboutComponent,
    FooterComponent,
    NotFound404Component,
    SettingsComponent,
    ResultComponent,
    CanvasChartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(allAppRoutes),
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [ChartsDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
