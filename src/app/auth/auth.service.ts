import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';

export interface User {
  fullName?: string;
  email: string;
  password: string;
  repeatPassword?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user$ = new Subject<User>();
  constructor() {}

  register(user: any) {
    this.setUser(user);
    return of(user);
  }

  login(email: string, password: string) {
    const loginCredentials = { email, password };
    return of(loginCredentials);
  }
  logout() {
    this.user$.next();
  }
  setUser(user: any) {
    return this.user$.next(user);
  }
  get user() {
    return this.user$.asObservable();
  }
}
