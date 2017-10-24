import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found.component';

import { pageNotFoundRouter } from './page-not-found-routing.module';

@NgModule({
  declarations: [ PageNotFoundComponent ],
  imports: [ pageNotFoundRouter ]
})

export class PageNotFoundModule {}
