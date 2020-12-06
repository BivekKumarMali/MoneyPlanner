import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subject, Subscription } from 'rxjs';

import { map } from 'rxjs/operators';
import { Asset } from 'src/app/models/asset';

@Injectable()
export class AssetService {
  assets: Asset[];
  subs: Subscription[] = [];
  assetChanged = new Subject<Asset[]>();
  constructor(private Db: AngularFirestore) {}

  GetAll() {
    this.subs.push(
      this.Db.collection<Asset>('asset', (ref) =>
        ref.orderBy('timestamp', 'desc')
      )
        .snapshotChanges()
        .pipe(
          map((docArray) => {
            return docArray.map((doc) => {
              return {
                id: doc.payload.doc.id,
                //@ts-ignore
                date: doc.payload.doc.data().timestamp.toDate(),
                ...doc.payload.doc.data(),
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

  delete(id: string) {
    this.Db.collection<Asset>('asset').doc(id).delete();
  }
}
