import { NgModule } from '@angular/core';
import { RandomComponent } from './random.component';

import { randomRouter } from './random-routing.module';

@NgModule({
  declarations: [ RandomComponent ],
  imports: [ randomRouter ]
})

export class RandomModule {}
