import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(
    private location: Location,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.setTitle();
  }

  setTitle() {
    const title = `Nie ma takiej strony - Albo Albo`;
    this.titleService.setTitle(title);
  }

  backLocation() {
    this.location.back();
  }
}
