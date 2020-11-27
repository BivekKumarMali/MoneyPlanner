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
import { UtilService } from 'src/app/core/util/util.service';

@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.component.html',
  styleUrls: ['./add-income.component.css'],
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
export class AddIncomeComponent implements OnInit {
  date = new Date();

  constructor(
    private _adapter: DateAdapter<any>,
    private utilService: UtilService
  ) {}

  ngOnInit(): void {
    this.utilService.SetDateFormat(this._adapter);
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    console.log(this.date);
  }
}
