import { Component, Input, OnInit, OnChanges, SimpleChange, OnDestroy } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Subscription } from 'rxjs/Subscription';
import { ToastrService } from 'ngx-toastr';

import { AdminService } from '../../../../services/admin.service';
import { User } from '../../../../models/user';

@Component({
  selector: 'app-users-data',
  templateUrl: './users-data.component.html',
  styleUrls: ['./users-data.component.scss']
})
export class UsersDataComponent implements OnInit, OnChanges, OnDestroy {
  @Input('active') active: boolean;
  @Input('banned') banned: boolean;

  public users: User[] = [];
  public count = 0;
  public isLoading = false;

  private subscription = new Subscription();
  private resource = new DataTableResource([]);

  constructor(
    private adminService: AdminService,
    private slimLoadingBarService: SlimLoadingBarService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.subscription = new Subscription();
    this.getUsers();
  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    this.subscription.unsubscribe();
    this.subscription = new Subscription();
    this.users = null;
    this.getUsers();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  reload(params) {
    this.slimLoadingBarService.start();
    this.resource.query(params).then(actions => this.users = actions);
    this.slimLoadingBarService.complete();
  }

  getUsers() {
    this.isLoading = true;
    const subscription = this.adminService.getUsers(this.active, this.banned)
      .subscribe(
        response => {
          this.users = response;
          this.resource = new DataTableResource(this.users);
          this.resource.count().then(count => this.count = count);
          this.isLoading = false;
        },
        error => {
          this.toastrService.error(error);
          this.isLoading = false;
        });
    this.subscription.add(subscription);
  }

  rowColors(action) {
    if (action.status === 'SUCCESS') {
      return 'rgb(196, 241, 197)';
    } else if (action.status === 'ERROR') {
      return 'rgb(255, 218, 234)';
    } else if (action.status === 'INFO') {
      return 'rgb(227, 250, 252)';
    }
  }
}
