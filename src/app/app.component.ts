import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService, User } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ngMean';

  user: User;
  userSub: Subscription;
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user) => {
      this.user = user;
      console.log(this.user);
    });
  }

  ngOnDestroy(): void {
    this.userSub && this.userSub.unsubscribe();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth/register']);
  }
}
