import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn: boolean = false;
  isAdmin: boolean = false;

  constructor() { }

  login(email: string, password: string) {
    if(email==="admin@gmail.com" && password==="password") {
      this.isLoggedIn = true;
      this.isAdmin = true;
    } else if (email==="user@gmail.com" && password==="password") {
      this.isLoggedIn = true;
      this.isAdmin = false;
    }
    return this.isLoggedIn;
  }
}
