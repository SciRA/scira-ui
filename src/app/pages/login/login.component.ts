import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-login',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.enableValidation();
  }

  doLogin() {
    console.log('login');
  }
  enableValidation() {
    console.log($('#loginForm'));
    $('#loginForm').validate({
      rules: {
        userTB: {
          required: true,
          minlength: 5
        },
        passTB: {
          required: true,
          minlength: 5
        }
      },
      messages: {
        userTB: {
          required: 'Enter a username',
          minlength: 'Enter at least 5 characters'
        },
        passTB: {
          required: 'Enter your password',
          minlength: 'The password must have at least 5 characters'
        }
      },
      errorElement: 'div',
      errorPlacement: function (error, element) {
        const placement = $(element).data('error');
        if (placement) {
          $(placement).append(error);
        } else {
          error.insertAfter(element);
        }
      }
    });

  }

}
