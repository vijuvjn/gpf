import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  username: string;
  password: string;

  ngOnInit() {
  }

  login(): void {
    if (this.username == '14283' && this.password == 'password') {
      this.router.navigate(["sidenav"]);
    } else {
      alert("Invalid Username or Password")
    }
  }
}
