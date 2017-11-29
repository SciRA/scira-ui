import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { User } from '../models/user';
@Injectable()
export class AuthService {
  isLoggedIn = false;
  // URL where we redirect after logging in
  redirectUrl: string;
  constructor() { }

  login(user: User): Observable<boolean> {
    console.log('USER just logged in', user.username);
    localStorage.setItem('currentUser', user.username);
    this.isLoggedIn = true;
    return Observable.of(true);
    // return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
  }
  logout(user: User): void {

    console.log('USER just logged out', user.username);
    localStorage.removeItem('currentUser');
    this.isLoggedIn = false;
  }
}
