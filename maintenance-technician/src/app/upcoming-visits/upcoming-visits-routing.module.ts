import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpcomingVisitsPage } from './upcoming-visits.page';

const routes: Routes = [
  {
    path: '',
    component: UpcomingVisitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpcomingVisitsPageRoutingModule {}
