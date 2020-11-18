import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { BalancesheetComponent } from './balancesheet/balancesheet.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    HomeComponent,
    BalancesheetComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forChild([
      { path: '', component: BalancesheetComponent }
    ]),


    SharedModule
  ]
})
export class HomeModule { }
