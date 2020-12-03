import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/models/expense';

@Component({
  selector: 'app-list-expense',
  templateUrl: './list-expense.component.html',
  styleUrls: ['./list-expense.component.css'],
})
export class ListExpenseComponent implements OnInit {
  listExpense: Expense[];

  constructor() {}

  ngOnInit(): void {}

  NewFilter(filter: string) {
    const filters = filter.split(' ');
    console.log(filters);
  }
}
