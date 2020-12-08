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
import { ActivatedRoute, Router } from '@angular/router';
import { AssetService } from 'src/app/core/api/asset/asset.service';
import { UtilService } from 'src/app/core/util/util.service';
import { Asset } from 'src/app/models/asset';

@Component({
  selector: 'app-edit-asset',
  templateUrl: './edit-asset.component.html',
  styleUrls: ['./edit-asset.component.css'],
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
export class EditAssetComponent implements OnInit {
  asset: Asset;
  categories = ['Saving', 'Bank', 'Property', 'Others'];

  constructor(
    private _adapter: DateAdapter<any>,
    private utilService: UtilService,
    private route: ActivatedRoute,
    private assetService: AssetService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.utilService.SetDateFormat(this._adapter);
    // Later
    /*const id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.assetService.Update(id);
    } else {
      console.log('Redirect to PageNotFound');
    }*/
    this.asset = this.assetService.assetToEdit;
  }
  onSubmit() {
    this.asset.date = new Date(this.asset.date);
    this.asset.month =
      this.asset.date.getMonth() + 1 + '/' + this.asset.date.getFullYear();
    this.assetService.Update(this.asset);
    this.router.navigate(['/asset']);
  }
}
