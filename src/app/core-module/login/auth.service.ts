import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserInfo } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userData: UserInfo;

  constructor(private fireAuth: AngularFireAuth) { }

  login(credentials: {email:string, password: string}) {
    return this.fireAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(user => this.userData = user.user);
  }

  register(credentials: {email:string, password: string}) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
  }

  isLoggedIn() {
    return !!this.userData;
  }

  logout() {
    return this.fireAuth.auth.signOut();
  }

  get user() {
    return this.userData;
  }
}
