import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import { UtilService } from 'src/app/core/util/util.service';
import { Income } from 'src/app/models/income';

@Component({
  selector: 'app-edit-income',
  templateUrl: './edit-income.component.html',
  styleUrls: ['./edit-income.component.css'],
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
export class EditIncomeComponent implements OnInit {
  date = new Date();
  banks = ['Axis', 'Paytm'];
  income: Income = {
    amount: 16309,
    date: new Date(),
    id: 'trest',
    month: 11,
    name: 'Promact',
    isregular: true,
    too: 'Axis',
    uid: '',
  };

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
    console.log(this.date);
  }
}
