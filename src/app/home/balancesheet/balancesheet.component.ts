import { Component, OnDestroy, OnInit } from '@angular/core';
import { Asset } from 'src/app/models/asset';
import { Expense } from 'src/app/models/expense';
import { Income } from 'src/app/models/income';
import { Libality } from 'src/app/models/libality';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ExpenseService } from 'src/app/core/api/expense/expense.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-balancesheet',
  templateUrl: './balancesheet.component.html',
  styleUrls: ['./balancesheet.component.css']
})
export class BalancesheetComponent implements OnInit, OnDestroy {

  goalAmount = 0;
  netAssets = 0;
  progressPercentage: number;

  constructor(
  ) { }

  ngOnInit(): void {
    this.calculateGoalProgress();
  }

  calculateGoalProgress() {
    this.progressPercentage = this.netAssets / this.goalAmount * 100;
  }

  NewFilter(filter: string) {
    const filters = filter.split(' ');
    console.log(filters);
  }
  ngOnDestroy(): void {
  }
}
