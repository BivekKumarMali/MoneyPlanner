import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NavComponent } from './nav/nav.component';
import { AddformComponent } from './addform/addform.component';
import { FilterComponent } from './filter/filter.component';



@NgModule({
  declarations: [
    NavComponent,
    AddformComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    NavComponent,
    AddformComponent,
    FilterComponent
  ]
})
export class SharedModule { }
