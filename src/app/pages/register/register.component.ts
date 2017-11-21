import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: User;
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.model = new User();
  }
  doRegister() {
    console.log('register:', this.model);
  }

}
