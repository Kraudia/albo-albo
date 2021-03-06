import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Stats } from '../../models/stats';
import { StatsService } from '../../services/stats.service';

@Component({
  selector: 'app-stats',
  templateUrl: 'stats.component.html',
  styleUrls: ['stats.component.scss']
})
export class StatsComponent implements OnInit, OnDestroy {
  @Input('status') status: string;
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
    const subscription = this.statsService.getStats()
      .subscribe(
        response => {
          this.stats = response;
        });
    this.subscription.add(subscription);
  }
}
