import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subject, Subscription } from 'rxjs';

import { map } from 'rxjs/operators';
import { Asset } from 'src/app/models/asset';
import { UtilService } from '../../util/util.service';

@Injectable()
export class AssetService {
  assets: Asset[];
  assetToEdit: Asset;
  subs: Subscription[] = [];
  assetChanged = new Subject<Asset[]>();
  constructor(private Db: AngularFirestore, private utilService: UtilService) {}

  GetAll(month: string) {
    this.subs.push(
      this.Db.collection<Asset>('asset', (ref) =>
        ref
          .where('uid', '==', this.utilService.GetUserID())
          .orderBy('date', 'desc')
          .where('month', '==', month)
      )
        .snapshotChanges()
        .pipe(
          map((docArray) => {
            return docArray.map((doc) => {
              return {
                id: doc.payload.doc.id,
                amount: doc.payload.doc.data().amount,
                category: doc.payload.doc.data().category,
                month: doc.payload.doc.data().month,
                name: doc.payload.doc.data().name,
                uid: doc.payload.doc.data().uid,
                //@ts-ignore
                date: doc.payload.doc.data().date.toDate(),
              };
            });
          })
        )
        .subscribe((asset: Asset[]) => {
          this.assets = asset;
          this.assetChanged.next([...this.assets]);
        })
    );
  }

  Add(asset: Asset) {
    this.Db.collection<Asset>('asset').add(asset);
  }

  Delete(id: string) {
    this.Db.collection<Asset>('asset').doc(id).delete();
  }

  Update(asset: Asset) {
    this.Db.collection<Asset>('asset').doc(asset.id).update(asset);
  }
}
