import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrentMonthExpiringPage } from './current-month-expiring.page';

const routes: Routes = [
  {
    path: '',
    component: CurrentMonthExpiringPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrentMonthExpiringPageRoutingModule {}
