import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
  currentUser: User;
  constructor(private authService: AuthService, public router: Router) {
    this.currentUser = new User;
   }

  create(user: User) {
    console.log(User);
  }
  authenticate(user: User) {
    this.authService.login(user).subscribe(() => {
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/';
        this.currentUser = user;
        // Redirect the user
        this.router.navigate([redirect]);
      }
    });
  }
  invalidate() {
    this.authService.logout(this.currentUser);
    this.router.navigate(['login']);
    this.currentUser = null;
  }

}
