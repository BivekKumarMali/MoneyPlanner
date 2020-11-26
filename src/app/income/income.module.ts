import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { IncomeComponent } from './income.component';
import { RouterModule } from '@angular/router';
import { ListIncomeComponent } from './list-income/list-income.component';
import { AddIncomeComponent } from './add-income/add-income.component';
import { EditIncomeComponent } from './edit-income/edit-income.component';



@NgModule({
  declarations: [IncomeComponent, ListIncomeComponent, AddIncomeComponent, EditIncomeComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: ListIncomeComponent },
      { path: 'add', component: AddIncomeComponent },
      { path: ':id/edit', component: EditIncomeComponent }
    ]),
  ]
})
export class IncomeModule { }
