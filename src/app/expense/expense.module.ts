import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseComponent } from './expense.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { ListExpenseComponent } from './list-expense/list-expense.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { EditExpenseComponent } from './edit-expense/edit-expense.component';

@NgModule({
  declarations: [ExpenseComponent, ListExpenseComponent, AddExpenseComponent, EditExpenseComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: ListExpenseComponent },
      { path: 'add', component: AddExpenseComponent },
      { path: ':id/edit', component: EditExpenseComponent },
    ]),
  ],
})
export class ExpenseModule {}
