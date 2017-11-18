import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public login: string;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        if (params['login']) {
          this.login = params['login'];
        } else {
          this.authService.getUserInfo().subscribe(res => {
            this.login = res.login;
            this.router.navigate(['profil', this.login, 'wszystkie'], {replaceUrl: false});
          });
        }
      });
  }

}
