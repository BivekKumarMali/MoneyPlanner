import { Component, OnInit } from '@angular/core';
import { Income } from 'src/app/models/income';

@Component({
  selector: 'app-list-income',
  templateUrl: './list-income.component.html',
  styleUrls: ['./list-income.component.css'],
})
export class ListIncomeComponent implements OnInit {
  listIncome: Income[];

  constructor() {}

  ngOnInit(): void {}

  NewFilter(filter: string) {
    const filters = filter.split(' ');
    console.log(filters);
  }
}
