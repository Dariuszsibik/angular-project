import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

export interface Credentials {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  readonly authState$ = this.fireAuth.authState;

  constructor(private fireAuth: AngularFireAuth) { }

  login(credentials: Credentials) {
    return this.fireAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
  }

  register(credentials: Credentials) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
  }

  logout() {
    return this.fireAuth.auth.signOut();
  }

  get user() {
    return this.fireAuth.auth.currentUser;
  }
}
