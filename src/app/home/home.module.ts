import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LayoutModule } from '../layout/layout.module';
import { HomeHistoryComponent } from './home-history/home-history.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeHistoryComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule
  ]
})
export class HomeModule { }
