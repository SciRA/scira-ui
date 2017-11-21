import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
declare var $: any;
@Component({
  selector: 'app-login',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  model: User;
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    console.log('login-component init');
    this.model = new User();
  }

  doLogin() {
    console.log('login', this.model);
    this.userService.authenticate(this.model);
  }
  doLogout() {
    this.userService.invalidate();
  }

}
