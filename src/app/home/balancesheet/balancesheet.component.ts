import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balancesheet',
  templateUrl: './balancesheet.component.html',
  styleUrls: ['./balancesheet.component.css']
})
export class BalancesheetComponent implements OnInit {

  goalAmount = 0;
  netAssets = 0;
  progressPercentage: number;
  constructor() { }

  ngOnInit(): void {
    this.calculateGoalProgress();
  }
  calculateGoalProgress() {
    this.progressPercentage = this.netAssets / this.goalAmount * 100;
  }

}
