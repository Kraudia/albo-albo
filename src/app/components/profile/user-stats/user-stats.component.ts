import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Stats } from '../../../models/stats';
import { StatsService } from '../../../services/stats.service';

@Component({
  selector: 'app-user-stats',
  templateUrl: 'user-stats.component.html',
  styleUrls: ['user-stats.component.scss']
})
export class UserStatsComponent implements OnInit, OnDestroy {
  @Input('login') login: string;
  private subscription = new Subscription();
  public stats: Stats;

  constructor(
    public statsService: StatsService
  ) { }

  ngOnInit() {
    this.getStats();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getStats() {
    const subscription = this.statsService.getUserStats(this.login)
      .subscribe(
        response => {
          this.stats = response;
        });
    this.subscription.add(subscription);
  }
}
