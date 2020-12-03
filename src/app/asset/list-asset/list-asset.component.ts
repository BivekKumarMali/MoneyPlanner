import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AssetService } from 'src/app/core/api/asset/asset.service';
import { UtilService } from 'src/app/core/util/util.service';
import { Asset } from 'src/app/models/asset';

@Component({
  selector: 'app-list-asset',
  templateUrl: './list-asset.component.html',
  styleUrls: ['./list-asset.component.css'],
})
export class ListAssetComponent implements OnInit, OnDestroy {
  listAsset: Asset[];
  subs: Subscription;

  constructor(
    private assetService: AssetService,
    private utilService: UtilService
  ) {}

  ngOnInit(): void {
    this.subs = this.assetService.assetChanged.subscribe(
      (asset) => (this.listAsset = asset)
    );
    this.assetService.GetAll();
  }

  NewFilter(filter: string) {
    const filters = filter.split(' ');
    console.log(filters);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
