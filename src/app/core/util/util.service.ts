import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  authState: firebase.default.User;
  constructor(private authAf: AngularFireAuth) {}

  SetDateFormat(_adapter: any) {
    _adapter.setLocale('fr');
  }

  GetUserID() {
    this.authAf.authState.subscribe((authState) => {
      this.authState = authState;
    });
    return this.authState.uid;
  }
}
