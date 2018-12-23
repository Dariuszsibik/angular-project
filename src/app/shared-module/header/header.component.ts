import { Component, SimpleChanges } from '@angular/core';
import { AuthService } from 'src/app/core-module/login/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  user = this.authService.user;

  constructor(
    private router: Router,
    private authService: AuthService) { }

  logout() {
    this.authService.logout()
      .then(() => this.router.navigate(['/login']));
  }

}
