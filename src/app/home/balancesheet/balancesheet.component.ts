import { Component, OnInit } from '@angular/core';
import { Asset } from 'src/app/models/asset';
import { Expense } from 'src/app/models/expense';
import { Income } from 'src/app/models/income';
import { Libality } from 'src/app/models/libality';

@Component({
  selector: 'app-balancesheet',
  templateUrl: './balancesheet.component.html',
  styleUrls: ['./balancesheet.component.css']
})
export class BalancesheetComponent implements OnInit {

  section: string;
  goalAmount = 0;
  netAssets = 0;
  progressPercentage: number;
  listOfMonths = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  listOfYear = [];
  filterMonth = new Date().getMonth();
  filterYear = new Date().getFullYear();
  listOfExpense: Expense[];
  listOfIncome: Income[];
  listOfAsset: Asset[];
  listOfLibality: Libality[];
  showOverlay = '';

  constructor() { }

  ngOnInit(): void {
    this.setListOfYears();
    this.calculateGoalProgress();
  }
  setListOfYears() {
    for (let i = this.filterYear - 10; i < this.filterYear + 10; i++) {
      this.listOfYear.push(i);
    }
  }
  calculateGoalProgress() {
    this.progressPercentage = this.netAssets / this.goalAmount * 100;
  }


  getValue() {
    console.log(this.filterMonth, this.filterYear);
  }
  showForm(section: string) {
    this.showOverlay = 'showOverlay';
    this.section = section;
  }
  hideForm() {
    this.showOverlay = '';
  }

}
