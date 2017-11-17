import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from './services/auth.service';
import { ToastrService, ToastContainerDirective } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(ToastContainerDirective) toastContainer: ToastContainerDirective;

  constructor(
    private authService: AuthService,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.authService.loginCurrentUser();
    this.toastrService.overlayContainer = this.toastContainer;
  }
}
