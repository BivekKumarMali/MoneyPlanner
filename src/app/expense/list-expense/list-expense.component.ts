import { Component, OnInit } from '@angular/core';
import { ExpenseDto } from 'src/app/interface/Dto/expenseDto';

@Component({
  selector: 'app-list-expense',
  templateUrl: './list-expense.component.html',
  styleUrls: ['./list-expense.component.css'],
})
export class ListExpenseComponent implements OnInit {
  listExpense: ExpenseDto[];

  constructor() {}

  ngOnInit(): void {}

  NewFilter(filter: string) {
    const filters = filter.split(' ');
    console.log(filters);
  }
}
