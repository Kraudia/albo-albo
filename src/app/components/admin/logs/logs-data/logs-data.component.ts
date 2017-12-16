import { Component, Input, OnInit, OnChanges, SimpleChange, OnDestroy } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Subscription } from 'rxjs/Subscription';
import { ToastrService } from 'ngx-toastr';

import { AdminService } from '../../../../services/admin.service';
import { Log } from '../../../../models/log';

@Component({
  selector: 'app-logs-data',
  templateUrl: './logs-data.component.html',
  styleUrls: ['./logs-data.component.scss']
})
export class LogsDataComponent implements OnInit, OnChanges, OnDestroy {
  @Input('limit') limit = 50;
  @Input('userId') userId: number;
  @Input('info') info: string;
  @Input('status') status: string;
  @Input('name') name: string;
  private id: number;

  public actions: Log[] = [];
  public count = 0;
  public throttle = 300;
  public scrollDistance = 0;
  public disableScroll;
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
    this.getActions();
  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    this.subscription.unsubscribe();
    this.subscription = new Subscription();
    this.actions = null;
    this.id = null;
    this.getActions();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  reload(params) {
    this.slimLoadingBarService.start();
    this.resource.query(params).then(actions => this.actions = actions);
    this.slimLoadingBarService.complete();
  }

  getActions() {
    this.isLoading = true;
    const subscription = this.adminService.getActions(this.limit, this.userId, this.info, this.status, this.name, this.id)
      .subscribe(
        response => {
          this.actions = response;
          this.resource = new DataTableResource(this.actions);
          this.resource.count().then(count => this.count = count);
          if (this.actions.length > 0) {
            this.id = this.actions[this.actions.length - 1].id;
          }
          this.isLoading = false;
          this.disableScroll = false;
        },
      error => {
          this.toastrService.error(error);
          this.isLoading = false;
          this.disableScroll = false;
      });
    this.subscription.add(subscription);
  }

  getMoreActions() {
    this.slimLoadingBarService.start();
    this.isLoading = true;
    this.disableScroll = true;
    const subscription = this.adminService.getActions(this.limit, this.userId, this.info, this.status, this.name, this.id)
      .subscribe(
        response => {
          response.shift();
          this.actions = [ ...this.actions, ...response];
          this.id = this.actions[this.actions.length - 1].id;
          this.disableScroll = false;
          this.resource = new DataTableResource(this.actions);
          this.resource.count().then(count => this.count = count);
          this.isLoading = false;
          this.slimLoadingBarService.complete();
        });
    this.subscription.add(subscription);
  }

  onScrollDown() {
    this.getMoreActions();
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
