import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MAT_MOMENT_DATE_FORMATS,
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { Router } from '@angular/router';
import { AssetService } from 'src/app/core/api/asset/asset.service';
import { UtilService } from 'src/app/core/util/util.service';
import { Asset } from 'src/app/models/asset';

@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.css'],
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
export class AddAssetComponent implements OnInit {
  date = new Date();
  asset: Asset;
  categories = ['Saving', 'Bank', 'Property', 'Others'];

  constructor(
    private _adapter: DateAdapter<any>,
    private utilService: UtilService,
    private assetService: AssetService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.utilService.SetDateFormat(this._adapter);
  }

  onSubmit(form: NgForm) {
    this.asset = form.value;
    this.asset.month = this.date.getMonth() + 1 + '/' + this.date.getFullYear();
    this.asset.date = this.date;
    this.asset.uid = this.utilService.GetUserID();
    this.assetService.Add(this.asset);
    this.router.navigate(['/asset']);
  }
}
