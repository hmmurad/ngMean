import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    console.log(this.f);
  }

  get f() {
    return this.loginForm.controls;
  }

  login() {
    const email = this.f.email.value;
    const password = this.f.password.value;

    if (!this.loginForm.valid) return;
    this.authService
      .login(email, password)
      .subscribe((res) => this.router.navigate(['/']));
  }

  get email() {
    return this.f.email;
  }
  get password() {
    return this.f.password;
  }
}
