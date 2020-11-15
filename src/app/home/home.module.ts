import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { ExpenseComponent } from './expense/expense.component';
import { SavingComponent } from './saving/saving.component';
import { AssetsComponent } from './assets/assets.component';
import { IncomeComponent } from './income/income.component';
import { RouterModule } from '@angular/router';
import { BalancesheetComponent } from './balancesheet/balancesheet.component';
import { LiabilityComponent } from './liability/liability.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    ExpenseComponent,
    SavingComponent,
    AssetsComponent,
    IncomeComponent,
    BalancesheetComponent,
    LiabilityComponent
  ],
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', component: BalancesheetComponent },
      { path: 'expense', component: ExpenseComponent },
      { path: 'saving', component: SavingComponent },
      { path: 'assets', component: AssetsComponent },
      { path: 'liabilities', component: LiabilityComponent },
      { path: 'income', component: IncomeComponent },
    ]),


    SharedModule
  ]
})
export class HomeModule { }
