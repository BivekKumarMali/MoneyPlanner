import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  userId = '';
  constructor(private authAf: AngularFireAuth) {}

  SetDateFormat(_adapter: any) {
    _adapter.setLocale('fr');
  }

  GetUserID() {
    this.authAf.authState.subscribe((authState) => {
      this.userId = authState.uid;
    });
    console.log(this.userId);

    return this.userId;
  }
}
