import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public banned = '';
  public active = '';

  constructor(
    private titleService: Title
  ) { }

  ngOnInit() {
    this.setTitle();
  }

  setTitle() {
    const title = `Lista użytkowników - Panel administratora - Albo Albo`;
    this.titleService.setTitle(title);
  }
}
