import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'cs-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent {
  user = this.authService.user;

  constructor(private authService: AuthService) { }

}
