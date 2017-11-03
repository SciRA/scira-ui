import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  adress: Adress;
  hobbies: string[];
  hello: any;
  posts: Post[];
  isEdid = false;

  constructor(private dataService: DataService) {
    console.log('constructor un..');
  }

  ngOnInit() {
    console.log('ngon init run')
    this.name = 'John Doe';
    this.age = 30;
    this.email = 'suntTare@yahoo.com';
    this.adress = {
      street: '50 main street',
      city: 'Boston',
      state: 'MA'
    }
    this.hobbies = ['Write code', 'Watch movies', 'Listen to music']
    this.hello = 1
    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  onClick() {
    this.name = "Stefan";
    this.hobbies.push('New Hobby');
  }

  addHobby(hobby) {
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteMe(hobby) {
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] == hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }

  edidUser() {
    this.isEdid = !this.isEdid;
  }

}

interface Adress {
  street: string;
  city: string;
  state: string;
}

interface Post {
  id: number,
  title: string,
  body: string,
  userId: number
}
