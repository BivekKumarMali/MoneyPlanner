import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { IncomeComponent } from './income.component';
import { RouterModule } from '@angular/router';
import { ListIncomeComponent } from './list-income/list-income.component';



@NgModule({
  declarations: [IncomeComponent, ListIncomeComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: ListIncomeComponent }
    ]),
  ]
})
export class IncomeModule { }
