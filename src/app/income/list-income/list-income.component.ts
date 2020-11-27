import { Component, OnInit } from '@angular/core';
import { IncomeDto } from 'src/app/interface/Dto/incomeDto';

@Component({
  selector: 'app-list-income',
  templateUrl: './list-income.component.html',
  styleUrls: ['./list-income.component.css']
})
export class ListIncomeComponent implements OnInit {

  listIncome: IncomeDto[];

  constructor() { }

  ngOnInit(): void {
  }


  NewFilter(filter: string) {
    const filters = filter.split(' ');
    console.log(filters);
  }
}
