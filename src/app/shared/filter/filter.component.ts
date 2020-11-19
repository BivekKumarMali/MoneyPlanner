import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  listOfMonths = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  listOfYear = [];
  filterMonth = new Date().getMonth();
  filterYear = new Date().getFullYear();

  @Output() Filter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.setListOfYears();
  }

  setListOfYears() {
    for (let i = this.filterYear - 10; i < this.filterYear + 10; i++) {
      this.listOfYear.push(i);
    }
  }

  getValue() {
    console.log(this.filterMonth, this.filterYear);
    this.Filter.emit(this.filterMonth + ' ' + this.filterYear);
  }
}