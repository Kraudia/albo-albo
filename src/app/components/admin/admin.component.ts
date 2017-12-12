import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public question: number;

  constructor(
    private router: Router,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.setTitle();
  }

  setTitle() {
    const title = `Panel administratora - Albo Albo`;
    this.titleService.setTitle(title);
  }

  edit() {
    this.router.navigate(['administracja', 'edytuj', this.question], {replaceUrl: false});
  }
}
