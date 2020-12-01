import { Component, OnInit } from '@angular/core';
import { AssetDto } from 'src/app/interface/Dto/assetDto';

@Component({
  selector: 'app-list-asset',
  templateUrl: './list-asset.component.html',
  styleUrls: ['./list-asset.component.css'],
})
export class ListAssetComponent implements OnInit {
  listAsset: AssetDto[];

  constructor() {}

  ngOnInit(): void {}

  NewFilter(filter: string) {
    const filters = filter.split(' ');
    console.log(filters);
  }
}
