import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private collapsed: boolean;

  constructor(
    public authService: AuthService
  ) {
    this.collapsed = false;
  }

  ngOnInit() {
    this.authService.getUserInfo();
  }

  logout() {
    this.authService.logout();
    // this.router.navigate(['/']);
  }

  public isCollapsed(): boolean {
    return this.collapsed;
  }

  public disableCollapsed() {
    this.collapsed = false;
  }

  public toggleMenu(): void {
    this.collapsed = !this.collapsed;
  }
}
