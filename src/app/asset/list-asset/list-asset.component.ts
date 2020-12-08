import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  filterMonth = new Date().getMonth() + 1;
  filterYear = new Date().getFullYear();

  constructor(
    private assetService: AssetService,
    private utilService: UtilService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subs = this.assetService.assetChanged.subscribe(
      (asset) => (this.listAsset = asset)
    );
    this.assetService.GetAll(this.filterMonth + '/' + this.filterYear);
  }

  NewFilter(filter: string) {
    this.assetService.GetAll(filter);
  }
  deleteAsset(id: string) {
    this.assetService.Delete(id);
  }

  editAsset(i: number) {
    this.assetService.assetToEdit = this.listAsset[i];
    this.router.navigate(['/asset', this.listAsset[i].id, 'edit']);
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
    this.assetService.subs.forEach((element) => {
      element.unsubscribe();
      console.log('working');
    });
  }
}
