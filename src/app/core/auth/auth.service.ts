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
  userDetails: string = '';
  protected isAuthenticated: boolean;
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
        this.successfully();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  logout() {
    this.authAf.signOut();
    this.isAuthenticated = false;
    localStorage.removeItem('user');
    this.authChange.next(false);
    this.router.navigate(['/']);
  }

  signWithCerdentails(userState: any) {}

  isAuth() {
    const user = localStorage.getItem('user');
    if (user) {
      return true;
    } else {
      return false;
    }
  }
  private successfully() {
    this.isAuthenticated = true;
    this.authAf.authState.subscribe((authState) => {
      this.userDetails = JSON.stringify(authState);
    });
    localStorage.setItem('user', JSON.stringify(this.userDetails));
    this.authChange.next(true);
    this.router.navigate(['/home']);
  }
}
