import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  login() {
    if(this.email==="admin@gmail.com" && this.password==="password") {
      this.route.navigate(['/page', 'add']);
      // this.route.navigateByUrl('/page/add');
    }
  }

  constructor(private route: Router) {

  }

}
