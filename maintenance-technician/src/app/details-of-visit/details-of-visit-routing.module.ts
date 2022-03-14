import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsOfVisitPage } from './details-of-visit.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsOfVisitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsOfVisitPageRoutingModule {}
