import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {AuthService} from '../services/auth.service';
import {HomeComponent} from '../home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  errorMessage = 'Invalid Credentials';
  successMessage: any;
  invalidLogin = false;
  loginSuccess = false;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  handleLogin() {
    this.authService.authenticationService(this.username, this.password).subscribe(data => {
      console.log('Success');
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful';
      // this.authService.onSuccess(this.username, this.password);
      this.router.navigate(['/home']);
    }, () => {
      console.log('Error');
      this.invalidLogin = true;
      this.loginSuccess = false;
    });
  }
}
