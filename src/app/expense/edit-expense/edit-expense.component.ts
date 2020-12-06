import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MAT_MOMENT_DATE_FORMATS,
} from '@angular/material-moment-adapter';
import {
  MAT_DATE_LOCALE,
  DateAdapter,
  MAT_DATE_FORMATS,
} from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import { UtilService } from 'src/app/core/util/util.service';
import { Expense } from 'src/app/models/expense';

@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.css'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class EditExpenseComponent implements OnInit {
  expense: Expense = {
    amount: 1000,
    date: new Date(),
    id: 'vj',
    isregular: true,
    month: 5,
    source: 'Axis',
    category: 'Necessity',
    name: 'hello',
  };
  categories = ['Saving', 'Necessity', 'Other'];
  banks = ['Axis', 'Paytm'];

  constructor(
    private _adapter: DateAdapter<any>,
    private utilService: UtilService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.utilService.SetDateFormat(this._adapter);
    const id = this.route.snapshot.paramMap.get('id');
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
