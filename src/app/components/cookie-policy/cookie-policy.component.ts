import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-cookie-policy',
  templateUrl: './cookie-policy.component.html',
  styleUrls: ['./cookie-policy.component.scss']
})
export class CookiePolicyComponent implements OnInit {
  public contact = environment.EMAIL_CONTACT;

  constructor() { }

  ngOnInit() {
  }

}
