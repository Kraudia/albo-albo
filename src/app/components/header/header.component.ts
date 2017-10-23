import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private collapsed: boolean;

  constructor() {
    this.collapsed = false;
  }

  ngOnInit() {
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
