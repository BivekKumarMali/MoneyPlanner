import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authChange = new Subject<boolean>();
  userState: any;
  protected isAuthenticated: boolean;
  authState: firebase.default.User;
  constructor(private authAf: AngularFireAuth, private router: Router) {}

  login(user: object) {
    this.authAf
      // @ts-ignore
      .signInWithEmailAndPassword(user.email, user.password)
      .then(() => {
        this.successfully();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  registerUser(user: object) {
    this.authAf
      // @ts-ignore
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((result) => {
        console.log(result);
        this.successfully();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  logout() {
    this.authAf.signOut();
    this.isAuthenticated = false;
    this.authChange.next(false);
    this.router.navigate(['/']);
  }

  signWithCerdentails(userState: any) {}

  isAuth() {
    this.authAf.authState.subscribe((authState) => {
      this.authState = authState;
    });

    if (this.authState) {
      return true;
    } else {
      return false;
    }
  }
  private successfully() {
    this.isAuthenticated = true;
    this.authChange.next(true);
    this.router.navigate(['/home']);
  }
}
