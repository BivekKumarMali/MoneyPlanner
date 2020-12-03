import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetComponent } from './asset.component';
import { ListAssetComponent } from './list-asset/list-asset.component';
import { AddAssetComponent } from './add-asset/add-asset.component';
import { EditAssetComponent } from './edit-asset/edit-asset.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AssetService } from '../core/api/asset/asset.service';

@NgModule({
  declarations: [
    AssetComponent,
    ListAssetComponent,
    AddAssetComponent,
    EditAssetComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    RouterModule.forChild([
      { path: '', component: ListAssetComponent },
      { path: 'add', component: AddAssetComponent },
      { path: ':id/edit', component: EditAssetComponent },
    ]),
  ],
  providers: [AssetService],
})
export class AssetModule {}
